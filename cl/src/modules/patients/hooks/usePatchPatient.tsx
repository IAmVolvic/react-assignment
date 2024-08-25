import { Api, Patients } from "@Api";
export type Patient = Patients

export const usePatchPatientName = (patientId: string, newName: string) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return newAPI.patients.patientsPartialUpdate({name: newName}, {id: `eq.${patientId}`});
}