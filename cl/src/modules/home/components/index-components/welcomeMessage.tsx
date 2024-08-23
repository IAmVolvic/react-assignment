import { FaBookmark } from "react-icons/fa6";

export const WelcomeMessage = () => {
    return (
        <div className="flex flex-col gap-8 w-full bg-base-content rounded-2xl p-10 bg-250px lg:bg-40rem bannerBG">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 text-base-300 text-sm font-semibold">
                    <FaBookmark />
                    <span>Update</span>
                    <span>0.0.1</span>
                </div>

                <div className="text-xl font-bold text-base-100 lg:text-3xl"> Welcome to HappyHealth </div>
            </div>
            
            <div>
                <button className="bg-secondary rounded-lg px-6 py-1 text-primary-content">Learn more</button>
            </div>
        </div>
    )
}