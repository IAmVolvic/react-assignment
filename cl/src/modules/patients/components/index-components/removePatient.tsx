import React from 'react';
import { useDeletePatient } from '../../hooks/useDeletePatient';
import toast from 'react-hot-toast';


interface RemovePatientProps {
    patientId: number | null;
}

export const RemovePatient: React.FC<RemovePatientProps> = ({ patientId }) => {
    const handleDelete = () => {
        if (!patientId) { toast.error('Failed to remove patient'); return; }

        useDeletePatient(patientId!.toString()).then(() => {
            toast.success('Successfully removed patient!');
        });
    };

    return (
        <>
            <dialog id="deletePatientAgreement" className="modal">
                <div className="modal-box rounded-2xl">
                    <h3 className="font-bold text-lg">Are you sure?</h3>
                    <p className="py-4">Deleting this patient is permanent</p>

                    <form method="dialog" className="w-full flex flex-row flex-nowrap gap-3 mt-5">
                        <button className="w-full bg-base-200 py-1.5 rounded-xl text-center"> Cancel </button>
                        <button onClick={handleDelete} className="w-full bg-error text-black py-1.5 rounded-xl"> Delete </button>
                    </form>
                </div>
                
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}