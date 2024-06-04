import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Layouts/Home/Home";
import LogIn from "../Layouts/LogInPage/LogIn";
import Register from "../Layouts/RegisterPage/Register";
import JoinAnEmployee from "../Layouts/JoinAsAnEmployee/JoinAnEmployee";
import JoinAnHRManager from "../Layouts/JoinAsAnHRManager/JoinAnHRManager";
import RequestForAnAssets from "../Layouts/JoinAsAnEmployee/RequestForAnAssets/RequestForAnAssets";
import AddAnAsset from "../Layouts/JoinAsAnHRManager/AddAnAssets/AddAnAsset";
import AssetList from "../Layouts/JoinAsAnHRManager/AssetListPage/AssetList";

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
            },
            {
                path: "/joinAnHRManager",
                element: <JoinAnHRManager></JoinAnHRManager>
            },
            {
                path: "/requestForAssets",
                element: <RequestForAnAssets></RequestForAnAssets>
            },
            {
                path: "/addAnAsset",
                element: <AddAnAsset></AddAnAsset>
            },
            {
                path: "/assetList",
                element: <AssetList></AssetList>
            }
        ]
    }
]);

export default router;