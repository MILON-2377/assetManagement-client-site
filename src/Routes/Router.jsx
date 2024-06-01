import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Layouts/Home/Home";
import LogIn from "../Layouts/LogInPage/LogIn";
import Register from "../Layouts/RegisterPage/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;