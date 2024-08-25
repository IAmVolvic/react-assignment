import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseRightModule } from "@app/components/right-module/rightModuleContext";
import { useGetDiseases } from "@modules/patients/hooks/useGetDiseaseDetails";
import { CustomSelect, Option } from "@app/components/multiSelect";
import { usePostDiagnoses } from '@modules/patients/hooks/usePostDiagnoses';
import toast from 'react-hot-toast';


export const NewPatientDiagnoses = () => {
    const { id } = useParams<{ id: string }>();
    const { data: response, isLoading } = useGetDiseases();

    const { setModuleOpen } = UseRightModule();
    const [selectedItems, setSelectedItems] = useState<Option[]>([]);
    const selectRef = useRef<{ clearSelection: () => void }>(null);

    const selectArray: Option[] = response?.map((item) => {
        return {
            value: item.id?.toString()??'',
            label: item.name,
        }
    }) ?? [];

    const handleSelectionChange = (selectedItems: Option[]) => {
        setSelectedItems(selectedItems);
    };

    const clearForm = () => {
        setSelectedItems([]);

        if (selectRef.current) {
            selectRef.current.clearSelection();
        }
    }

    const closeModule = () => {
        clearForm();
        setModuleOpen(false);
    }

    const addDiagnoses = () => {
        selectedItems.map((item) => {
            if (isNaN(parseInt(item.value))) { return; }
            usePostDiagnoses(Number(id)!, parseInt(item.value))
        });

        toast.success('Successfully added diagnoses!');  
        closeModule();
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 mb-10">
                    <div className="text-2xl font-bold text-base-content">Add Diagnoses</div>
                    <div className="text-md text-base-content opacity-70">Add a new diagnoses to the patient</div>
                </div>


                <div className="flex flex-col gap-2">
                    <div className="text-sm">Patient Diagnoses</div>

                    {isLoading ? (
                        <div>Loading...</div> // Show loading state
                    ) : (
                        <CustomSelect
                            ref={selectRef}
                            selectClassName="w-full bg-base-300 p-3 rounded-xl"
                            placeHolder="Select a patient diagnoses"
                            options={selectArray}
                            onSelectionChange={handleSelectionChange}
                        />
                    )}
                </div>
            </div>    


            <div className="w-full flex flex-row flex-nowrap gap-3 mt-5">
                <button onClick={() => closeModule()} className="w-full bg-base-200 py-1.5 rounded-xl text-center"> Cancel </button>
                <button onClick={() => addDiagnoses()} className="w-full bg-base-content text-base-300 py-1.5 rounded-xl"> Add </button>
            </div>
        </div>
    )
}