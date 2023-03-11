import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Error } from "../pages/Error"
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement:<Error />,
    },
    {
        path: "auth",
        errorElement: <Error />,
        children: [{
            path: "register",
            element:<Register />
        }, {
            path: "login",
            element:<Login  />
        }]
    }
]);

