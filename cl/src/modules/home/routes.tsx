import { RouteObject } from "react-router-dom";
import { NavigationTemplate } from "@app/components/NavigationTemplate";
import { HomePage } from "./components/home";

const ROUTES: RouteObject[] = [
	{
		path: '/',
		element: <NavigationTemplate />,
		children: [
			{
				index:true,
				element:  <HomePage />
			}
		]
	}
]

export default ROUTES;