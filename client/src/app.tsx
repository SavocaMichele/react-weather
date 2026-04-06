import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
import {Router} from "./router.tsx";
import {UserContextProvider} from "@/context/user-context.tsx";
import {TooltipProvider} from "@radix-ui/react-tooltip";
import {initializeTheme} from "@/hooks/useAppearance.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


import "./utils/i18n/i18n.ts";
import "./assets/styles/app.scss";
import {LocationContextProvider} from "@/context/location-context.tsx";


const root = document.getElementById("root")!;

const queryClient = new QueryClient()

ReactDOM.createRoot(root).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>

            <ReactQueryDevtools />

            <TooltipProvider>
                <LocationContextProvider>
                    <UserContextProvider>
                        <Router />
                    </UserContextProvider>
                </LocationContextProvider>
            </TooltipProvider>
        </QueryClientProvider>
    </StrictMode>
);

initializeTheme();