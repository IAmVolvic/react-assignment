import { RouteObject } from "react-router-dom";
import { NavigationTemplate } from "@app/components/NavigationTemplate";
import { PatientsPage } from "./components";

const ROUTES: RouteObject[] = [
	{
		path: '/patients',
		element: <NavigationTemplate />,
		children: [
			{
				index:true,
				element:  <PatientsPage />
			}
		]
	}
]

export default ROUTES;