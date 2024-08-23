import { useEffect } from "react";
import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";

export const PatientPage = () => {
    const { setBreadName } = UseNavigationBreadcrumbName();

    useEffect(() => {
        setBreadName('bob');
    }, [setBreadName]);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 relative">
            Patient: Working?
        </div>
    )
}