import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import searchTextNameHook from "./searchTextName";

const useRequestedAssetsApi = () => {
  const axiousSecureApi = useAxiosSecure();

  const fetchData = async () => {

    const textName = searchTextNameHook();
    const param = {
      textName,
    };

    const res = await axiousSecureApi.get(`/requestAssets`, {
      params: param,
    });
    return res.data;
  };

  const { data: requestedData = [], refetch } = useQuery({
    queryKey: ["requestedData"],
    queryFn: () => fetchData(),
  });

  return [requestedData, refetch];
};

export default useRequestedAssetsApi;
