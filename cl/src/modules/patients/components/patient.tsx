import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";
import { useGetPatientDetails, Patient } from "../hooks/useGetPatientDetails";

export const PatientPage = () => {
    const { id } = useParams<{ id: string }>();
    const { setBreadName } = UseNavigationBreadcrumbName();

    const { data: response, isLoading } = useGetPatientDetails(Number(id));
    const data = response as Patient[];


    useEffect(() => {
        setBreadName('Loading...');

        if (response){
            setBreadName(`${data[0].name}`);
        }
    }, [response, setBreadName]);


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

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative mt-5">
            Patient: Working?
        </div>
    )
}