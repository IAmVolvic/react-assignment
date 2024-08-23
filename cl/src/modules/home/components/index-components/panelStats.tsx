import { FaUserInjured } from "react-icons/fa6";
import { FaBookMedical } from "react-icons/fa6";
import { FaDisease } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";

export const PanelStats = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 relative mt-5">
            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Total Patients</div>
                    <div className="text-lg text-base-100 font-semibold">02</div>
                </div>
                <FaUserInjured className="text-3xl text-base-100" />
            </div>

            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Total Diagnoses</div>
                    <div className="text-lg text-base-100 font-semibold">02</div>
                </div>
                <FaBookMedical className="text-3xl text-base-100" />
            </div>

            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Total Diseases</div>
                    <div className="text-lg text-base-100 font-semibold">02</div>
                </div>
                <FaDisease className="text-3xl text-base-100" />
            </div>

            <div className="flex flex-row justify-between items-center bg-base-content rounded-2xl h-28 p-8">
                <div className="flex flex-col">
                    <div className="text-xl text-base-300 uppercase">Service Stats</div>
                    <div className="text-lg text-base-100 font-semibold">Online</div>
                </div>
                <IoServer className="text-3xl text-base-100" />
            </div>
        </div>
    )
}