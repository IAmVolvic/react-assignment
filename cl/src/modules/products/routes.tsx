import { RouteObject } from "react-router-dom";
import { NavigationTemplate } from "@app/components/NavigationTemplate";
import { ProductsPage } from "./components/products";

const ROUTES: RouteObject[] = [
	{
		path: '/products',
		element: <NavigationTemplate />,
		children: [
			{
				index:true,
				element:  <ProductsPage />
			}
		]
	}
]

export default ROUTES;