import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import useAuthProvider from "../AuthProviderHooks/useAuthProvider";

const useUserDataLoadingApi = () => {
    const axiousSecureApi = useAxiosSecure();
    const {user} = useAuthProvider();

    const userArrr = [];
    if(user){
        userArrr.length = 0;
        userArrr.push(user.email);
    }
    
    const param = {
        userEmail: userArrr[0],
    }

    const fetchData = async() => {

        const res = await axiousSecureApi.get("/users", {
            params:param,
        });
        return res.data;
    };

    const {data: userData = [], refetch} = useQuery({
        queryKey: ["userData"],
        queryFn: () => fetchData(),
    });

    return [userData, refetch];
};

export default useUserDataLoadingApi;