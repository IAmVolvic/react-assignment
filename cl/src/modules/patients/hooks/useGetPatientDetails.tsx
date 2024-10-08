import { useQuery } from "@tanstack/react-query"

import { Api, Patients } from "@Api";
export type Patient = Patients

export const useGetPatientDetails = (patientId: number) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return useQuery({
        queryKey: ['patient-details-patients'],
        queryFn: async (): Promise<Patients[]> => {
            return  newAPI.patients.patientsList({id: `eq.${patientId}`})
            .then((res) => res.data)
        },
        refetchInterval: 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });
}