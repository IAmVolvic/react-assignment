import { useQuery } from "@tanstack/react-query"

import { Api, Diseases } from "@Api";
export type Disease = Diseases

export const useGetDiseases = () => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return useQuery({
        queryKey: ['diseases-details-patients'],
        queryFn: async (): Promise<Diseases[]> => {
            return  newAPI.diseases.diseasesList()
            .then((res) => res.data)
        },
        refetchInterval: 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });
}