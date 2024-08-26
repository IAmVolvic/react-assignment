import React, { useState } from "react";
import { useGetPatientDiagnoseHistory } from "../../hooks/useGetPatientDiagnoseHistory";

import { FaDisease } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { Timemat } from "@app/hooks/useTimemat";
import { RemoveDiagnose } from "./removeDiagnose";


interface RemovePatientProps {
    patientId: number;
}

export const PatientDiagnoseHistoryList: React.FC<RemovePatientProps> = ({ patientId }) => {
    const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);
    const { data: response, isLoading } = useGetPatientDiagnoseHistory(patientId);

    const handleDeleteAgreement = (id: number) => {
        setSelectedPatientId(id);
        const deletePatientAgreementModal = document.getElementById('deleteDiagnoseAgreement');
        if (deletePatientAgreementModal) {
            (deletePatientAgreementModal as HTMLDialogElement).showModal();
        }
    };

    if ( isLoading ) {
        return (
            <tr>
                <th className="hidden lg:block"></th>
                <td>
                    <span className="text-lg">Loading</span>
                </td>
                <td></td>
                <th></th>
            </tr>
        )
    }

    if (!response || response.length < 1) {
        return (
            <tr>
                <th className="hidden lg:block"></th>
                <td>
                    <span className="text-lg">No Data Found</span>
                </td>
                <td></td>
                <th></th>
            </tr>
        )
    }



    return (
        <>
            {response.map((diagnose) => (
                <tr key={diagnose.diagnoseId}>
                    <th className="hidden lg:block">
                        <FaDisease size={"2rem"} />
                    </th>
                    <td>
                        <span className="text-lg">{diagnose.diseaseName}</span>
                    </td>
                    <td>
                        <span className="text-lg">{Timemat(diagnose.diagnoseTimestamp!)}</span>
                    </td>
                    <th>
                        <button onClick={() => handleDeleteAgreement(diagnose.diagnoseId!)} className="p-3 rounded-xl bg-error text-error-content" ><FaTrashCan size={"1.3rem"} /></button>
                    </th>
                </tr>
            ))}

            <tr>
                <td>
                    <RemoveDiagnose diagnoseId={selectedPatientId} />
                </td>
            </tr>
        </>
    )
}