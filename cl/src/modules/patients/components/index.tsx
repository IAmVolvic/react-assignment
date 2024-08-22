import { useEffect } from "react";
import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";
import { useGetPatientDetails, Patient } from "../hooks/useGetPatientDetails";



export const PatientsPage = () => {
    const { setBreadName } = UseNavigationBreadcrumbName();
    
    useEffect(() => {
        setBreadName(undefined);
    }, [setBreadName]);
    
    
    const { data: response, isLoading, refetch } = useGetPatientDetails();

    if ( isLoading ) {
        return (
            <div className="flex justify-center items-center mt-10">
                <div className="circle-loader border-2 border-base-100 border-l-primary w-44 h-44" />
            </div>
        )
    }

    if (!response) {
        return (
            <div className="flex flex-col items-center justify-center relative lg:my-52">
                <div className="t-sub text-2xl lg:text-4xl">No Results</div>
                <div className="t-sub text-8xl lg:text-9xl">Found</div>
            </div>
        )
    }


    const data = response as Patient[];


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 relative">
            {
                Object.values(data).map((value: Patient) => 
                    (
                        <div key={value.id}>
                            {value.name}
                        </div>
                    ))
            }
        </div>
    )
}