import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import useAuthProvider from "../AuthProviderHooks/useAuthProvider";
import affiliatedUsers from "./unAffiliatedUsersDataStore";

const useUserDataLoadingApi = (name) => {
  const axiousSecureApi = useAxiosSecure();
  const { user } = useAuthProvider();

  const userArrr = [];
  if (user) {
    userArrr.length = 0;
    userArrr.push(user.email);
  }


  const fetchData = async () => {
    const affiliated = affiliatedUsers();
    const res = await axiousSecureApi.get("/users", {
      params: {
        userEmail: userArrr[0],
        affiliated,
        userPending:name
      },
    });
    return res.data;
  };

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchData(),
  });

  return [userData, refetch];
};

export default useUserDataLoadingApi;
