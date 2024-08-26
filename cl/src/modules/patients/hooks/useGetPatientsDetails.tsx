import { useQuery } from "@tanstack/react-query"

import { Api, Patients } from "@Api";

export type Patient = {
    id?: number;
    name: string;
    totalDiagnoses: number | undefined;
};

export const useGetPatientsDetails = () => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return useQuery({
        queryKey: ['patient-details'],
        queryFn: async (): Promise<Patient[]> => {
            
            const patientsRes = await newAPI.patients.patientsList({ order: 'id.asc' });
            const patients = await Promise.all(
                patientsRes.data.map(async (patient) => {
                    const diagnosesRes = await newAPI.diagnoses.diagnosesList({ patient_id: `eq.${patient.id}` });
                    return {
                        id: patient.id,
                        name: patient.name,
                        totalDiagnoses: diagnosesRes.data.length,
                    };
                })
            );

            return patients;
        },
        refetchInterval: 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });
}