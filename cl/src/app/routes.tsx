import { RouteObject } from "react-router-dom";


import HomeRoutes from "@modules/home/routes";
import ProductsRoutes from "@modules/products/routes";
import ErrorRoutes from "@modules/errors/routes";

const ROUTES: RouteObject[] = [
	...HomeRoutes,
	...ProductsRoutes,
	//Errors PAGE MUST BE AT THE BOTTOM SHIITER
	...ErrorRoutes
]

export default ROUTES;