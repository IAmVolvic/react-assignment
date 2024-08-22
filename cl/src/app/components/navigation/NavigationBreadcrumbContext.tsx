import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextProps {
    breadName?: string;
    setBreadName: (name: string|undefined) => void;
}

const NavigationBreadcrumbContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationBreadcrumbProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [breadName, setBreadName] = useState<string | undefined>(undefined);

    return (
        <NavigationBreadcrumbContext.Provider value={{ breadName, setBreadName }}>
            {children}
        </NavigationBreadcrumbContext.Provider>
    );
};

export const UseNavigationBreadcrumbName = (): NavigationContextProps => {
    const context = useContext(NavigationBreadcrumbContext);
    if (!context) {
        throw new Error('UseNavigationBreadcrumbName must be used within a NavigationBreadcrumbProvider');
    }
    return context;
};