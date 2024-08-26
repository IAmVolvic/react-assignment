import React from 'react';
import { useDeleteDiagnose } from '@modules/patients/hooks/useDeleteDiagnose';
import toast from 'react-hot-toast';


interface RemoveDiagnoseProps {
    diagnoseId: number | null;
}

export const RemoveDiagnose: React.FC<RemoveDiagnoseProps> = ({ diagnoseId }) => {
    const handleDelete = () => {
        if (!diagnoseId) { toast.error('Failed to remove diagnose'); return; }

        useDeleteDiagnose(diagnoseId!.toString());
        toast.success('Successfully removed diagnosis!');
    };

    return (
        <>
            <dialog id="deleteDiagnoseAgreement" className="modal">
                <div className="modal-box rounded-2xl">
                    <h3 className="font-bold text-lg">Are you sure?</h3>
                    <p className="py-4">Deleting this diagnosis is permanent</p>

                    <form method="dialog" className="w-full flex flex-row flex-nowrap gap-3 mt-5">
                        <button className="w-full bg-base-200 py-1.5 rounded-xl text-center"> Cancel </button>
                        <button onClick={handleDelete} className="w-full bg-error text-error-content py-1.5 rounded-xl"> Delete </button>
                    </form>
                </div>
                
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}