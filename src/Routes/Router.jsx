import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Layouts/Home/Home";
import LogIn from "../Layouts/LogInPage/LogIn";
import Register from "../Layouts/RegisterPage/Register";
import JoinAnEmployee from "../Layouts/JoinAsAnEmployee/JoinAnEmployee";

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
            },
            {
                path: "/joinAnEmployee",
                element: <JoinAnEmployee></JoinAnEmployee>
            }
        ]
    }
]);

export default router;