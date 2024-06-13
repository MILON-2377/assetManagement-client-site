import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";

const useUserDataLoadingApi = (email) => {
  const axiousSecureApi = useAxiosSecure();

  const fetchUserData = async (email) => {
    const res = await axiousSecureApi.get(`/users?userEmail=${email}`);
    return res.data;
  };

  return useQuery({
    queryKey: ["userData", email],
    queryFn: () => fetchUserData(email),
    enabled: !!email,
  });
};

export default useUserDataLoadingApi;
