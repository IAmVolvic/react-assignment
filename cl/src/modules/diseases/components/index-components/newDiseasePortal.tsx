import React, { useState } from 'react';
import { UseRightModule } from "@app/components/right-module/rightModuleContext";
import toast from 'react-hot-toast';
import { usePostDisease } from '@modules/diseases/hooks/usePostDiseases';


export const NewDiseasePortal = () => {
    const [diseaseName, setDiseaseName] = useState<string>("");
    const { setModuleOpen } = UseRightModule();
    

    const clearForm = () => {
        setDiseaseName("");
    }

    const closeModule = () => {
        clearForm();
        setModuleOpen(false);
    }

    const createNewDisease = () => {
        if (!diseaseName.trim()) { toast.error('Failed to create disease'); return; }

        usePostDisease(diseaseName).then(() => {
            toast.success('Successfully added a disease!');  
        });

        closeModule();
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 mb-10">
                    <div className="text-2xl font-bold text-base-content">New Disease</div>
                    <div className="text-md text-base-content opacity-70">Add a new disease to the panel</div>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div className="text-sm">Disease Name</div>
                    <input type="text" placeholder="Disease Name" value={diseaseName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDiseaseName(event.target.value) } className="w-full bg-base-300 p-3 rounded-xl" />
                </div>
            </div>    


            <div className="w-full flex flex-row flex-nowrap gap-3 mt-5">
                <button onClick={() => closeModule()} className="w-full bg-base-200 py-1.5 rounded-xl text-center"> Cancel </button>
                <button onClick={() => createNewDisease()} className="w-full bg-base-content text-base-300 py-1.5 rounded-xl"> Create </button>
            </div>
        </div>
    )
}