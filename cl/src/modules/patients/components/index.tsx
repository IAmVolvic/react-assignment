import { useEffect } from "react";
import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";

import { PatientsBlocks } from "./index-components/patientsBlocks";

import { FaPlus } from "react-icons/fa6";


export const PatientsPage = () => {
    const { setBreadName } = UseNavigationBreadcrumbName();
    
    useEffect(() => {
        setBreadName(undefined);
    }, [setBreadName]);
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative mt-5">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-center items-center border-2 border-dashed border-base-content rounded-2xl w-full h-52 p-8">
                    <FaPlus className="text-xl text-base-content" />
                </div>
                <div className="flex flex-col">
                    <div className="text-md text-base-content">New Patient</div>
                    <div className="text-xs text-base-content opacity-70">Add a new patient to the panel</div>
                </div>
            </div>
        
            <PatientsBlocks />
        </div>
    )
}