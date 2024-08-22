import { RouteObject } from "react-router-dom";
import { NavigationSide } from "@app/components/navigation";

import { PatientsPage } from "./components";
import { PatientPage } from "./components/patient";

const ROUTES: RouteObject[] = [
	{
		path: '/patients',
		element: <NavigationSide />,
		children: [
			{ index: true, element: <PatientsPage /> },
			{ path: ":id", element: <PatientPage /> }
		]
	}
]

export default ROUTES;