import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import makeUsersEmployee from "./makeUsersEmployee";


const useMakeUsersToEmployee = () => {

    const axiousSecureApi = useAxiosSecure();

    const handleUsersToEmployee = () =>  {
        const ids = makeUsersEmployee();

        return axiousSecureApi.put("/users", {ids});
    }

    return handleUsersToEmployee;
};

export default useMakeUsersToEmployee;