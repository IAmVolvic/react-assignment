import { useRef, useState } from 'react';
import { UseRightModule } from "@app/components/right-module/rightModuleContext";
import { CgClose } from "react-icons/cg";
import { useOutsideAlerter } from '@app/hooks/useOutsideAlerter';

export const RightSideModule = () => {
    const { isModuleOpen, setModuleOpen, ignoreClickRefs } = UseRightModule();

    const ref = useRef(null);
    useOutsideAlerter(ref, () => setModuleOpen(false), ignoreClickRefs??[]);

	return (
        <>
            <div ref={ref} className={`absolute bg-base-100 w-96 h-full right-0 transition-transform duration-500 z-20 drop-shadow-xl ${ isModuleOpen ? 'translate-x-0' : 'translate-x-full' }`}>   
                <div className="flex flex-col h-full p-5">
                    <div className="flex justify-end">
                        <button onClick={() => setModuleOpen(false)} className="flex justify-center items-center w-6 h-6"><CgClose /></button>
                    </div>

                    <div id="right-side-module" className="h-full"></div>
                </div>
            </div>
        </>
	)
}