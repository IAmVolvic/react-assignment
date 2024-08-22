import { RouteObject } from "react-router-dom";


import HomeRoutes from "@modules/home/routes";
import PatientRoutes from "@modules/patients/routes";
import ErrorRoutes from "@modules/errors/routes";

const ROUTES: RouteObject[] = [
	...HomeRoutes,
	...PatientRoutes,
	
	//Errors
	...ErrorRoutes
]

export default ROUTES;