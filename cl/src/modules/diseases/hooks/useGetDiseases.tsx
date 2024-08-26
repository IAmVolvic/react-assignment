import { useQuery } from "@tanstack/react-query";
import { Api, Diseases } from "@Api";

export type Disease = {
    id?: number;
    name: string;
    totalDiagnosed: number;
};

export const useGetDiseases = () => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return useQuery({
        queryKey: ['diseases-details-diseases'],
        queryFn: async (): Promise<Diseases[]> => {
            const diseasesRes = await newAPI.diseases.diseasesList({ order: 'id.asc' });
            const diseases = await Promise.all(
                diseasesRes.data.map(async (disease) => {
                    const diagnosesRes = await newAPI.diagnoses.diagnosesList({ disease_id: `eq.${disease.id}` });
                    const uniquePatientIds = new Set<number>();

                    diagnosesRes.data.forEach(diagnosis => {
                        uniquePatientIds.add(diagnosis.patient_id);
                    });

                    return {
                        id: disease.id,
                        name: disease.name,
                        totalDiagnosed: uniquePatientIds.size,
                    };
                })
            );

            return diseases;
        },
        refetchInterval: 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });
};