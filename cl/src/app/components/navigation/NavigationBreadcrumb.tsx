import React from 'react';
import { UseNavigationBreadcrumbName } from './NavigationBreadcrumbContext';
import { NavLink, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

interface BreadcrumbProps {
    customLastBreadcrumbText?: string;  // Add a prop for custom text
}

export const NavigationBreadcrumb: React.FC<BreadcrumbProps> = ({ customLastBreadcrumbText }) => {
    const { breadName } = UseNavigationBreadcrumbName();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const isRootPath = pathnames.length === 0;
    const showBackButton = pathnames.length > 1;
    const rootPath = pathnames.length > 0 ? `/${pathnames[0]}` : '/';

    return (
        <div className="flex flex-col gap-4">
            <div className={`flex flex-row gap-4 ${isRootPath? 'hidden':''}`}>
                {showBackButton && (
                    <NavLink
                        className="flex flex-row items-center gap-2 rounded-2xl text-base-content opacity-70"
                        to={rootPath}
                    >
                        <FaArrowLeft className="text-md" />
                        <div>Back</div>
                    </NavLink>
                )}

                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const displayText = isLast ? (customLastBreadcrumbText || breadName || value.replace('-', ' ')) : value.replace('-', ' ');

                    return (
                        <React.Fragment key={to}>
                            {index > 0 && <span>/</span>}
                            <NavLink className="text-md capitalize" to={to}>
                                {displayText}
                            </NavLink>
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="text-4xl capitalize font-bold text-base-content">
                {isRootPath  ? 'Home' : (breadName || pathnames[pathnames.length - 1]?.replace('-', ' ') || 'Home')}
            </div>
        </div>
    );
};