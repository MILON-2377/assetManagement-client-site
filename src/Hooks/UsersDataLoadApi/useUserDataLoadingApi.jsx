import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import useAuthProvider from "../AuthProviderHooks/useAuthProvider";
import affiliatedUsers from "./unAffiliatedUsersDataStore";

const useUserDataLoadingApi = (name) => {
  const axiousSecureApi = useAxiosSecure();
  const { user } = useAuthProvider();


  const fetchData = async () => {
    const affiliated = affiliatedUsers();
    const res = await axiousSecureApi.get("/users", {
      params: {
        userEmail: user?.email,
        affiliated,
        userPending:name
      },
    });
    return res.data;
  };

  const { data: userData = [], refetch, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchData(),
  });

  return [userData, refetch, isLoading];
};

export default useUserDataLoadingApi;
