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
import AllRequestForAssets from "../Layouts/JoinAsAnHRManager/AllRequestForAssetPage/AllRequestForAssets";
import MyRequestedAssets from "../Layouts/JoinAsAnEmployee/MyRequestedAssetPage/MyRequestedAssets";
import PrinteRequestAsset from "../Layouts/JoinAsAnEmployee/MyRequestedAssetPage/PrinteRequestAsset";
import AddAnEmployee from "../Layouts/JoinAsAnHRManager/AddAnEmployeePage/AddAnEmployee";
import MyEmployeeList from "../Layouts/JoinAsAnHRManager/MyEmployeeList/MyEmployeeList";
import ProtectiveRoute from "./PrivateRoute/ProtectiveRoute";
import PaymentGateWay from "../Layouts/PaymentGatway/PaymentGateWay";

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
                element: <ProtectiveRoute><RequestForAnAssets></RequestForAnAssets></ProtectiveRoute>
            },
            {
                path: "/addAnAsset",
                element: <AddAnAsset></AddAnAsset>
            },
            {
                path: "/assetList",
                element: <AssetList></AssetList>
            },
            {
                path: "/allRequesForAsset",
                element: <AllRequestForAssets></AllRequestForAssets>
            },
            {
                path: "/myRequestedAssets",
                element: <MyRequestedAssets></MyRequestedAssets>
            },
            {
                path: "/printeAssetPage",
                element: <PrinteRequestAsset></PrinteRequestAsset>
            },
            {
                path: "/addAnEmployee",
                element: <AddAnEmployee></AddAnEmployee>
            },
            {
                path: "/myEmpoyeeList",
                element: <MyEmployeeList></MyEmployeeList>
            },
            {
                path: "/payment",
                element: <PaymentGateWay></PaymentGateWay>
            }
        ]
    }
]);

export default router;