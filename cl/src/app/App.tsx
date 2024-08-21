import React, {useEffect} from "react"
import {Toaster} from "react-hot-toast";
import {DevTools} from "jotai-devtools";
import {useAtom} from "jotai";
import {ThemeAtom} from "../atoms/ThemeAtom.tsx";

import ROUTES from "./routes"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {
	const router = createBrowserRouter(ROUTES)
    const [theme, setTheme] = useAtom(ThemeAtom);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <>
            <Toaster/>
                <RouterProvider router={router} />
            <DevTools />
        </>
    )
}
export default App;