import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import {StrictMode} from "react";
import AppLayout from "./components/ui/Layout/AppLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";


const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>

                <Route element={<AppLayout />}>
                    <Route index element={<Dashboard />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    </StrictMode>
);
