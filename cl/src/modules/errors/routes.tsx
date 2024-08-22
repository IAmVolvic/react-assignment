import { RouteObject } from "react-router-dom";
import { ErrorPage } from "./components/errors";
import { NavigationSide } from "@app/components/navigation";

const ROUTES: RouteObject[] = [
	{
		element: <NavigationSide />,
		children: [
			{
				path: '*',
				element:  <ErrorPage />
			}
		]
	}
]

export default ROUTES;