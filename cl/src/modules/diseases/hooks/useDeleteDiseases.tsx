import { Api, Diseases } from "@Api";
export type Disease = Diseases

export const useDeleteDisease = (diseaseId: string) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return newAPI.diseases.diseasesDelete({id: `eq.${diseaseId}`});
}