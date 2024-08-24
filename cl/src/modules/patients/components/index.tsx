import { useEffect, useRef } from "react";
import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";
import { UseRightModule } from "@app/components/right-module/rightModuleContext";
import { PatientsBlocks } from "./index-components/patientsBlocks";
import { FaPlus } from "react-icons/fa6";
import { createPortal } from "react-dom";



export const PatientsPage = () => {
    const { setBreadName } = UseNavigationBreadcrumbName();
    const { setModuleOpen, setIgnoreClickRefs } = UseRightModule();
    const rightSideModule = document.getElementById('right-side-module');
    const ref = useRef(null);

    useEffect(() => {
        setBreadName(undefined);
    }, [setBreadName]);

    useEffect(() => {
        setIgnoreClickRefs([ref]);
    }, [ref]);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative mt-5">
                <div className="flex flex-col gap-2">
                    <button ref={ref} onClick={() => setModuleOpen(true)} className="flex flex-row justify-center items-center border-2 border-dashed border-base-content rounded-2xl w-full h-52 p-8">
                        <FaPlus className="text-xl text-base-content" />
                    </button>

                    <div className="flex flex-col">
                        <div className="text-md text-base-content">New Patient</div>
                        <div className="text-xs text-base-content opacity-70">Add a new patient to the panel</div>
                    </div>
                </div>
            
                <PatientsBlocks />
            </div>

            {rightSideModule && createPortal(
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2 mb-10">
                            <div className="text-2xl font-bold text-base-content">New Patient</div>
                            <div className="text-md text-base-content opacity-70">Add a new patient to the panel</div>
                        </div>
                        
                        <input type="text" placeholder="Patient Name" className="w-full bg-base-300 p-3 rounded-xl" />

                        <select className="w-full bg-base-300 p-3 rounded-xl">
                            <option disabled selected>Select a patient diagnoses</option>
                        </select>
                    </div>    


                    <div className="w-full flex flex-row flex-nowrap gap-3 mt-5">
                        <button onClick={() => setModuleOpen(false)} className="w-full bg-base-200 py-1.5 rounded-xl text-center"> Cancel </button>
                        <button className="w-full bg-base-300 py-1.5 rounded-xl"> Create </button>
                    </div>
                </div>
            , rightSideModule)}

        </>
    )
}