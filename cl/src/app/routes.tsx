import { RouteObject } from "react-router-dom";


import HomeRoutes from "@modules/home/routes";
import ProductsRoutes from "@modules/patients/routes";
import ErrorRoutes from "@modules/errors/routes";

const ROUTES: RouteObject[] = [
	...HomeRoutes,
	...ProductsRoutes,
	
	//Errors
	...ErrorRoutes
]

export default ROUTES;