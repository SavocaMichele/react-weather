import {createBrowserRouter, RouterProvider} from "react-router";
import AuthLayout from "./components/ui/Layout/AuthLayout.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import AppLayout from "./components/ui/Layout/AppLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";


export const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                { index: true, Component: Auth }
            ]
        },

        {
            path: "/",
            Component: AppLayout,
            children: [
                { index: true, Component: Dashboard }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}