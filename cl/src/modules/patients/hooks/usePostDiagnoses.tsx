import { Api, Diagnoses } from "@Api";
export type diagnose = Diagnoses

export const usePostDiagnoses = (patientId: number, diseaseId: number) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return newAPI.diagnoses.diagnosesCreate({patient_id: patientId, disease_id: diseaseId})
}