import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";
import { UseRightModule } from "@app/components/right-module/rightModuleContext";
import { DiseasesList } from "./index-components/diseasesList";
import { NewDiseasePortal } from "./index-components/newDiseasePortal";


export const DiseasesPage = () => {
    const { setBreadName } = UseNavigationBreadcrumbName();

    const { setModuleOpen, setIgnoreClickRefs } = UseRightModule();
    const rightSideModule = document.getElementById('right-side-module');
    const ref = useRef(null);
    useEffect(() => {
        setIgnoreClickRefs([ref]);
    }, [ref]);

    
    useEffect(() => {
        setBreadName(undefined);
    }, [setBreadName]);


    return (
        <>
            <div className="w-full mt-5 flex flex-col gap-5">
                <div className="flex justify-end">
                    <button ref={ref} onClick={() => setModuleOpen(true)} className="bg-base-content text-base-300 px-6 py-1.5 rounded-xl text-center">Add Disease</button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="hidden lg:block"></th>
                            <th className="text-lg">Disease Name</th>
                            <th className="text-lg">Diagnosed</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <DiseasesList />
                    </tbody>
                </table>
            </div>

            {rightSideModule && createPortal(<NewDiseasePortal />, rightSideModule)}
        </>
        
    )
}