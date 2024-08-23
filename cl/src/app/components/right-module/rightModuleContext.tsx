import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RightModuleContextProps {
    isModuleOpen?: boolean;
    setModuleOpen: (newVal: boolean) => void;
    toggleModule: () => void;
    
    ignoreClickRefs?: React.RefObject<HTMLElement>[];
    setIgnoreClickRefs: (newVal: React.RefObject<HTMLElement>[]) => void;
}

const RightModuleContextContext = createContext<RightModuleContextProps | undefined>(undefined);

export const RightModuleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isModuleOpen, setModuleOpen] = useState(true);
    const [ignoreClickRefs, setIgnoreClickRefs] = useState<React.RefObject<HTMLElement>[]>([]);

    const toggleModule = () => {
        setModuleOpen(!isModuleOpen);
    }

    return (
        <RightModuleContextContext.Provider value={{ isModuleOpen, setModuleOpen, toggleModule, ignoreClickRefs, setIgnoreClickRefs }}>
            {children}
        </RightModuleContextContext.Provider>
    );
};

export const UseRightModule = (): RightModuleContextProps => {
    const context = useContext(RightModuleContextContext);
    if (!context) {
        throw new Error('UseRightModule must be used within a RightModuleProvider');
    }
    return context;
};