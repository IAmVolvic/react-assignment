import { RouteObject } from "react-router-dom";
import { NavigationSide } from "@app/components/navigation";
import { HomePage } from "./components/home";

const ROUTES: RouteObject[] = [
	{
		path: '/',
		element: <NavigationSide />,
		children: [
			{
				index:true,
				element:  <HomePage />
			}
		]
	}
]

export default ROUTES;