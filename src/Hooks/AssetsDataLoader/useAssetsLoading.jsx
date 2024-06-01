import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";

const useAssetsLoading = () => {
  const axiosSecure = useAxiosSecure();

  const { data: assets=[] } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/assets");
      return res.data;
    },
  });
  return [assets];
};

export default useAssetsLoading;
