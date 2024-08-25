import { useQuery } from "@tanstack/react-query";
import { Api, Diagnoses, Diseases } from "@Api";

export type Diagnose = Diagnoses;
export type Disease = Diseases;
export type DiagnosesHistory = {
    diagnoseId: number | undefined;
    diagnoseTimestamp: string | undefined;
    diseaseName: string;
};

export const useGetPatientDiagnoseHistory = (patientId: number) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return useQuery({
        queryKey: ['diagnoses-history', patientId], // Include patientId in the query key to refetch data when it changes
        queryFn: async (): Promise<DiagnosesHistory[]> => {
            const diagnosesRes = await newAPI.diagnoses.diagnosesList({ patient_id: `eq.${patientId}`, order: 'diagnosis_date.desc' });

            const diagnosesHistory = await Promise.all(
                diagnosesRes.data.map(async (diagnose) => {
                    const diseaseRes = await newAPI.diseases.diseasesList({ id: `eq.${diagnose.disease_id}` });
                    return {
                        diagnoseId: diagnose.id,
                        diagnoseTimestamp: diagnose.diagnosis_date,
                        diseaseName: diseaseRes.data[0].name,
                    };
                })
            );

            return diagnosesHistory;
        },

        refetchInterval: 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });
};