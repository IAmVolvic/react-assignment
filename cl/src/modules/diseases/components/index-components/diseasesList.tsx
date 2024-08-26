import { useState } from "react";
import { useGetDiseases, Disease } from "../../hooks/useGetDiseases";
import { EditDisease } from "./editDisease";
import { DeleteDisease } from "./deleteDisease";

import { FaDisease } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";

export const DiseasesList = () => {
    const { data: response, isLoading } = useGetDiseases();
    const [ selectedDisease, setSelectedDisease ] = useState<number | null>(null);

    const handleEditDisease = (selectedDisease: number) => {
        setSelectedDisease(selectedDisease)
        const editDiseaseAgreementModal = document.getElementById('editDiseaseAgreement');
        if (editDiseaseAgreementModal) {
            (editDiseaseAgreementModal as HTMLDialogElement).showModal();
        }
    }

    const handleDeleteDisease = (selectedDisease: number) => {
        setSelectedDisease(selectedDisease)
        const deleteDiseaseAgreementModal = document.getElementById('deleteDiseaseAgreement');
        if (deleteDiseaseAgreementModal) {
            (deleteDiseaseAgreementModal as HTMLDialogElement).showModal();
        }
    }

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


    const data = response as Disease[];

    return (
        <>
            {data.map((disease) => (
                <tr key={disease.id}>
                    <th className="hidden lg:block"> <FaDisease size={"2rem"} /> </th>
                    <td>
                        <span className="text-lg">{disease.name}</span>
                    </td>

                    <td>
                        <span className="text-lg">{disease.totalDiagnosed}</span>
                    </td>

                    <th>
                        <div className="flex flex-row flex-nowrap items-center gap-4">
                            <button onClick={() => handleEditDisease(Number(disease.id))} className="p-3 rounded-xl bg-base-content text-base-300" ><AiFillEdit size={"1.3rem"} /></button>
                            <button onClick={() => handleDeleteDisease(Number(disease.id))} className="p-3 rounded-xl bg-error text-error-content" ><FaTrashCan size={"1.3rem"} /></button>
                        </div>
                    </th>
                </tr>
            ))}

            <tr>
                <td>
                    <EditDisease diseaseId={selectedDisease} />
                    <DeleteDisease diseaseId={selectedDisease} />
                </td>
            </tr>
        </>
    )
}