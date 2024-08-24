import { Api, Patients } from "@Api";
export type Patient = Patients

export const usePostPatient = (patientName: string) => {
    const newAPI = new Api({
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            "Prefer": "return=representation"
        }
    });

    return newAPI.patients.patientsCreate({name: patientName})
}