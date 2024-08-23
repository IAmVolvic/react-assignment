import { useState } from 'react';
import { Outlet } from "react-router-dom"

import ThemeSwitcher from "@app/components/ThemeSwitcher"; 
import { NavigationButtons } from "./NavigationButtons";
import { NavigationTitle } from "./NavigationTitle";

import { NavigationBreadcrumbProvider } from './NavigationBreadcrumbContext';
import { NavigationBreadcrumb } from "./NavigationBreadcrumb";

import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

import { RightModuleProvider } from "@app/components/right-module/rightModuleContext";
import { RightSideModule } from "@app/components/right-module";


export const NavigationSide = () => {
     const [isNavOpen, setIsNavOpen] = useState(false);

	return (
       <div className="flex flex-row flex-nowrap overflow-hidden justify-center items-center relative">   
            {/* This is the desktop navigation */}
            <div className="hidden flex-col gap-8 w-80 min-h-screen bg-base-100 p-5 z-0 lg:flex">
                <NavigationTitle />
                <NavigationButtons />
            </div>
            

            {/* This is the mobile navigation should be able to toggle */}
            <div className={`flex flex-col gap-8 w-80 h-screen bg-base-100 p-5 fixed transition-all duration-500 z-10 lg:hidden top-0 ${ isNavOpen ? 'left-0' : '-left-80' }`}>
                <div className="flex justify-end">
                    <button onClick={() => setIsNavOpen(false)} className="bg-base-100 w-min p-2 rounded-md text-base-content lg:hidden">
                        <CgClose />
                    </button>
                </div>
                <NavigationTitle />
                <NavigationButtons />
            </div>


            {/* This is the main content */}
            <div className="flex flex-col w-full bg-base-300 z-0">
                <RightModuleProvider>
                    <div className="flex flex-col h-screen overflow-y-auto p-5 gap-8">
                        <button onClick={() => setIsNavOpen(true)} className="bg-base-100 w-min p-2 rounded-md text-base-content lg:hidden">
                            <RxHamburgerMenu />
                        </button>

                        <NavigationBreadcrumbProvider>
                            <div className="flex flex-row justify-between">
                                <NavigationBreadcrumb />
                                <ThemeSwitcher />
                            </div>
                            <Outlet />
                        </NavigationBreadcrumbProvider>
                    </div>
                    <RightSideModule />
                </RightModuleProvider>
            </div>
       </div>
	)
}