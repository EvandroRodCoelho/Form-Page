import {RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { GlobalStyles } from "./styles/global";
export function App() {
    return (
        <>
            <RouterProvider router={router}/>
            <GlobalStyles  />
        </>
    );
}


