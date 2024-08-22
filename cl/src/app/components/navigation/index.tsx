import { useState } from 'react';
import { Outlet } from "react-router-dom"

import { NavigationButtons } from "./NavigationButtons";
import { NavigationTitle } from "./NavigationTitle";
import { NavigationBreadcrumbProvider } from './NavigationBreadcrumbContext';
import { NavigationBreadcrumb } from "./NavigationBreadcrumb";

import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export const NavigationSide = () => {
     const [isNavOpen, setIsNavOpen] = useState(false);

	return (
       <div className="flex flex-row flex-nowrap justify-center items-center relative">   
            <div className="hidden flex-col gap-8 w-1/6 h-screen bg-base-100 p-5 z-0 lg:flex">
                <NavigationTitle />
                <NavigationButtons />
            </div>
            
            {/* This is the mobile navigation should be able to toggle */}
            <div className={`flex flex-col gap-8 w-72 h-screen bg-base-100 p-5 absolute transition-all duration-500 z-10 lg:hidden ${ isNavOpen ? 'left-0' : '-left-72' }`}>
                <div className="flex justify-end">
                    <button onClick={() => setIsNavOpen(false)} className="bg-base-100 w-min p-2 rounded-md text-base-content lg:hidden">
                        <CgClose />
                    </button>
                </div>

                <NavigationTitle />
                <NavigationButtons />
                
            </div>

            <div className="flex flex-col gap-8 w-full h-screen bg-base-300 p-5  z-0">
                <button onClick={() => setIsNavOpen(true)} className="bg-base-100 w-min p-2 rounded-md text-base-content lg:hidden">
                    <RxHamburgerMenu />
                </button>

                <NavigationBreadcrumbProvider>
                    <NavigationBreadcrumb />
                    <Outlet />
                </NavigationBreadcrumbProvider>
            </div>
       </div>
	)
}