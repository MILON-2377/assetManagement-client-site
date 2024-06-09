import { useLocation, useNavigate } from "react-router-dom";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import useUserDataLoadingApi from "../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";


const ProtectiveRoute = ({children}) => {
    const location = useLocation();
    const {user} = useAuthProvider();
    const navigate = useNavigate();
    const [userData] = useUserDataLoadingApi();
    const userPower = userData?.userType;

   

    if(user && userPower === "Manager" || userPower === "Employee" ){
        return children
    }else{
        return navigate("/login", {state: {from:location.pathname}});
    }
};

export default ProtectiveRoute;