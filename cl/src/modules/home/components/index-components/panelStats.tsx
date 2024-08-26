import NumberFormatter from "@app/hooks/useNumFormatter";
import { useGetTotalDetails, PanelDetails } from "@modules/home/hooks/useTotalDetails";
import { FaUserInjured } from "react-icons/fa6";
import { FaBookMedical } from "react-icons/fa6";
import { FaDisease } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";

export const PanelStats = () => {
    const { data: response, isLoading } = useGetTotalDetails();
    
    const data = response as PanelDetails;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 relative mt-5">
            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Total Patients</div>
                    <div className="text-lg text-base-100 font-semibold">
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            <NumberFormatter number={data.totalPatients} />
                        )}
                    </div>
                </div>
                <FaUserInjured className="text-3xl text-base-100" />
            </div>

            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Total Diagnoses</div>
                    <div className="text-lg text-base-100 font-semibold">
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            <NumberFormatter number={data.totalDiagnoses} />
                        )}
                    </div>
                </div>
                <FaBookMedical className="text-3xl text-base-100" />
            </div>

            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Total Diseases</div>
                    <div className="text-lg text-base-100 font-semibold">
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            <NumberFormatter number={data.totalDiseases} />
                        )}
                    </div>
                </div>
                <FaDisease className="text-3xl text-base-100" />
            </div>

            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Service Stats</div>
                    <div className="text-lg text-base-100 font-semibold">
                        {!response ? (
                            <span>Offline</span>
                        ) : (
                            <span>Online</span>
                        )}
                    </div>
                </div>
                <IoServer className="text-3xl text-base-100" />
            </div>
        </div>
    )
}