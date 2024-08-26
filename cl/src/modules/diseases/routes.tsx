import { RouteObject } from "react-router-dom";
import { NavigationSide } from "@app/components/navigation";

import { DiseasesPage } from "./components";

const ROUTES: RouteObject[] = [
	{
		path: '/diseases',
		element: <NavigationSide />,
		children: [
			{ index: true, element: <DiseasesPage /> }
		]
	}
]

export default ROUTES;