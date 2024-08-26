import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { usePatchDiseaseName } from '@modules/diseases/hooks/usePatchDiseases';

interface EditDiseaseProps {
    diseaseId: number | null;
}


export const EditDisease: React.FC<EditDiseaseProps> = ({ diseaseId }) => {
    const [diseaseName, setDiseaseName] = useState<string>("");

    const handleEdit = () => {
        if (!diseaseId) { toast.error('Failed to edit disease'); return; }
        usePatchDiseaseName(diseaseId.toString()!, diseaseName);
        toast.success('Successfully edited disease');
    };

    return (
        <>
            <dialog id="editDiseaseAgreement" className="modal">
                <div className="modal-box rounded-2xl">
                    <h3 className="font-bold text-lg">Editing Disease</h3>
                    <p className="py-4">Editing a disease is permanent</p>

                    <input type="text" placeholder="Disease Name" value={diseaseName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDiseaseName(event.target.value) } className="w-full bg-base-300 p-3 rounded-xl mt-2 mb-5" />

                    <form method="dialog" className="w-full flex flex-row flex-nowrap gap-3 mt-5">
                        <button className="w-full bg-base-200 py-1.5 rounded-xl text-center"> Cancel </button>
                        <button onClick={handleEdit} className="w-full bg-success text-success-content py-1.5 rounded-xl"> Save </button>
                    </form>
                </div>
                
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}