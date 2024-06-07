import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";


const ProtectiveRoute = ({children}) => {
    const location = useLocation();
    const {user} = useAuthProvider();

    if(!user){
        <Navigate to='/login' state={{from:location}}></Navigate>
    }else{
        return children;
    }

};

export default ProtectiveRoute;