import { RouteObject } from "react-router-dom";
import { ErrorPage } from "./components/errors";
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