import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetPatientsDetails, Patient } from "../../hooks/useGetPatientsDetails";
import { RemovePatient } from "./removePatient";



export const PatientsBlocks = () => {
    const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);
    const { data: response, isLoading } = useGetPatientsDetails();
    const deletePatientAgreementModal = document.getElementById('deletePatientAgreement') as HTMLDialogElement;

    if ( isLoading ) {
        return (
            <div className="absolute w-full h-full mt-80 lg:mt-52">
                <div className="flex justify-center items-center w-full h-full">
                    <div className="circle-loader border-2 border-base-100 border-l-primary w-44 h-44" />
                </div>
            </div>
        )
    }

    if (!response) {
        return (
            <div className="absolute w-full h-full mt-80 lg:mt-52">
                <div className="flex flex-col items-center justify-center">
                    <div className="t-sub text-2xl lg:text-4xl">No Results</div>
                    <div className="t-sub text-8xl lg:text-9xl">Found</div>
                </div>
            </div>  
        )
    }


    const data = response as Patient[];


    const handleDeleteAgreement = (id: number) => {
        setSelectedPatientId(id);
        const deletePatientAgreementModal = document.getElementById('deletePatientAgreement');
        if (deletePatientAgreementModal) {
            (deletePatientAgreementModal as HTMLDialogElement).showModal();
        }
    };
    
    return (
        <>
            {data.map((patient, index) => (
                <div key={index} className="flex flex-col gap-5 bg-base-content rounded-2xl w-full h-52 p-8 relative">
                    <div className="w-20 h-20 bg-base-100 border-2 border-base-100 rounded-2xl absolute -top-10">
                        <img src={`https://api.dicebear.com/9.x/adventurer/svg?seed=xZ${patient.name}`} alt="Patient" className="w-full h-full object-cover rounded-2xl" />
                    </div>

                    <div className="absolute top-0 right-0 px-6 py-3">
                        <div className="text-6xl font-semibold text-base-300 opacity-20">{patient.id}</div>
                    </div>

                    <div className="text-2xl font-semibold text-base-300 mt-10">{patient.name}</div>

                    <div className="w-full flex flex-row flex-nowrap gap-3 mt-5">
                        <Link className="w-full bg-base-100 py-1.5 rounded-xl text-center" to={`/patients/${patient.id}`}> View </Link>
                        <button onClick={() => handleDeleteAgreement(patient.id!)} className="w-full bg-error text-black py-1.5 rounded-xl"> Delete </button>
                    </div>
                </div>
            ))}


            <RemovePatient patientId={selectedPatientId} />
        </>
    )
}