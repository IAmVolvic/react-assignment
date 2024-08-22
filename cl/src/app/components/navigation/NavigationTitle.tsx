import { FaStarOfLife } from "react-icons/fa6";

export const NavigationTitle = () => {
	return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="bg-base-300 p-2.5 rounded-xl text-md"><FaStarOfLife /></div>
                <div className="font-semibold">HappyHealth</div>
            </div>

            <img src="https://avatar.iran.liara.run/public/job/doctor/male" className="bg-primary border-2 border-success rounded-full w-10 h-10" />
        </div>
	)
}