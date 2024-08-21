import { useQuery } from "@tanstack/react-query"

import { apiClient } from "@app/components/apiClient.ts";
import { Patients } from "@Api";

export const useGetPatientDetails = () => {
    return useQuery({
        queryKey: ['patient-details'],
        queryFn: async (): Promise<Patients[]> => {
            return apiClient.patients.patientsList({name: 'ilike.bob%'})
            .then((res) => res.data)
        }
    });
}