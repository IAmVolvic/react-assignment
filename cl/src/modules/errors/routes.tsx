import { RouteObject } from "react-router-dom";
import { ErrorPage } from "./components/index";
import { NavigationTemplate } from "@app/components/NavigationTemplate";

const ROUTES: RouteObject[] = [
	{
		element: <NavigationTemplate />,
		children: [
			{
				path: '*',
				element:  <ErrorPage />
			}
		]
	}
]

export default ROUTES;