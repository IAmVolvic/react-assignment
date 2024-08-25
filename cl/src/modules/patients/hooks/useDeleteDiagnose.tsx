import { Api, Diagnoses } from "@Api";
export type Diagnose = Diagnoses

export const useDeleteDiagnose = (diagnoseId: string) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return newAPI.diagnoses.diagnosesDelete({id: `eq.${diagnoseId}`})
}