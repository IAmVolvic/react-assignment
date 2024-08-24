import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";
import { useGetPatientDetails, Patient } from "../hooks/useGetPatientDetails";

import { FaDisease } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export const PatientPage = () => {
    const { id } = useParams<{ id: string }>();
    const { setBreadName } = UseNavigationBreadcrumbName();

    const { data: response, isLoading } = useGetPatientDetails(Number(id));
    const patient = response as Patient[];

    const [patientName, setPatientName] = useState<string>("");

    useEffect(() => {
        setBreadName('Loading...');

        if (response && patient.length > 0) {
            setBreadName(patient[0].name);
            setPatientName(patient[0].name);
        }
    }, [response, setBreadName]);


    if ( isLoading ) {
        return (
            <div className="absolute w-full h-full mt-80 lg:left-20 lg:mt-52">
                <div className="flex justify-center items-center w-full h-full">
                    <div className="circle-loader border-2 border-base-100 border-l-primary w-44 h-44" />
                </div>
            </div>
        )
    }

    if (!response || patient.length < 1) {
        return (
            <div className="absolute w-full h-full mt-80 lg:left-20 lg:mt-52">
                <div className="flex flex-col items-center justify-center">
                    <div className="t-sub text-2xl lg:text-4xl">No Results</div>
                    <div className="t-sub text-8xl lg:text-9xl">Found</div>
                </div>
            </div>  
        )
    }

    return (
        <div className="container mx-auto px-4 flex flex-col flex-nowrap mt-5">
            
            <div className="flex flex-row flex-wrap gap-5 justify-between items-center w-full bg-base-content p-5 rounded-t-2xl bg-250px lg:bg-40rem bannerBG drop-shadow-xl">
                <div className="flex flex-row justify-between items-center gap-5">
                    <img src={`https://api.dicebear.com/9.x/adventurer/svg?seed=xZ${patient[0].name}`} alt="patient" className="bg-base-100 w-20 h-20 lg:w-40 lg:h-40 rounded-full" />

                    <div className="flex flex-col lg:gap-3">
                        <div className="text-xl font-bold text-base-300 lg:text-3xl">{patient[0].name}</div>
                        <div className="text-sm text-base-300 opacity-70 lg:text-xl">Patient at HappyHealth</div>
                    </div>
                </div>

                <button className="text-sm bg-base-100 text-base-content py-1.5 px-8 rounded-xl text-center lg:text-xl">Save Edit</button>
            </div>

            <div className="flex flex-col gap-8 justify-between w-full bg-base-100 p-5 rounded-b-2xl drop-shadow-xl">
                <div className="flex flex-col gap-2 w-full">
                    <div className="text-lg">Patient Name</div>
                    <input type="text" placeholder={patientName} value={patientName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPatientName(event.target.value) } className="w-full lg:w-96 bg-base-300 p-3 rounded-xl" />
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="w-20"></th>
                                <th className="text-lg">Diseases</th>
                                <th className="text-lg">Timestamp</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>
                                    <FaDisease size={"2rem"} />
                                </th>
                                <td>
                                    <span className="text-lg">Flu</span>
                                </td>
                                <td>
                                    <span className="text-lg">08/05/2024</span>
                                </td>
                                <th>
                                    <button ><FaRegEdit size={"1.5rem"} /></button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}