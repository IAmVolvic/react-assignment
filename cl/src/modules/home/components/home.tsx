import { useEffect } from "react"
import { UseNavigationBreadcrumbName } from "@app/components/navigation/NavigationBreadcrumbContext";

import { WelcomeMessage } from "./index-components/welcomeMessage";
import { PanelStats } from "./index-components/panelStats";


export const HomePage = () => {
    const { setBreadName } = UseNavigationBreadcrumbName();
    
    useEffect(() => {
        setBreadName(undefined);
    }, [setBreadName]);
    
    return (
        <div className="">
            <WelcomeMessage />

            <PanelStats />
        </div>
    )
}