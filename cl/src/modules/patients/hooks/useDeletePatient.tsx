import { Api, Patients } from "@Api";
export type Patient = Patients

export const useDeletePatient = (patientId: string) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return newAPI.patients.patientsDelete({id: `eq.${patientId}`})
}