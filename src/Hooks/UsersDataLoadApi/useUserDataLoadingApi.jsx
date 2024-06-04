import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";


const useUserDataLoadingApi = () => {
  const axiousSecureApi = useAxiosSecure();
  const {user} = useAuthProvider();

  const fetchData = async () => {
    const param = {
      email: user?.email,
    };

    const res = await axiousSecureApi.get("/users", {
      params: param,
    });
    return res.data;
  };

  const { data: userData = []} = useQuery({
    queryKey: ["userData"],
    queryFn: async () => fetchData(),
  });

  return [userData];
};

export default useUserDataLoadingApi;
