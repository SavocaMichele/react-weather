import {createBrowserRouter, RouterProvider, Navigate, useLocation} from "react-router";
import AuthLayout from "./components/ui/Layout/AuthLayout.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import AppLayout from "./components/ui/Layout/AppLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Settings from "@/pages/Settings/Settings.tsx";
import Favorites from "@/pages/Favorites/Favorites.tsx";
import {useUserContext} from "@/context/user-context.tsx";
import React from "react";


function withAuth<T extends object>(Component: React.ComponentType<T>) {
    return function ProtectedComponent(props: T) {
        const { user, isLoading } = useUserContext();
        const location = useLocation();

        if (isLoading) {
            return null;
        }

        if (!user) {
            return <Navigate to="/auth" state={{ from: location }} replace />;
        }

        return <Component {...props} />;
    };
}


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
                { index: true, Component: Dashboard },
                { path: "settings", Component: Settings },
                { path: "favorites", Component: withAuth(Favorites) }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}