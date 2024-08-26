import { useQuery } from "@tanstack/react-query"

import { Api } from "@Api";
export type PanelDetails = {
    totalPatients: number;
    totalDiseases: number;
    totalDiagnoses: number;
}

export const useGetTotalDetails = () => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return useQuery({
        queryKey: ['panel-details'],
        queryFn: async (): Promise<PanelDetails> => {
            const totalPatients = newAPI.patients.patientsList()
                .then((res) => res.data.length)
            const totalDiseases = newAPI.diseases.diseasesList()
                .then((res) => res.data.length)
            const totalDiagnoses = newAPI.diagnoses.diagnosesList()
                .then((res) => res.data.length)
            return { totalPatients: await totalPatients, totalDiseases: await totalDiseases, totalDiagnoses: await totalDiagnoses }
        },
        refetchInterval: 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });
}