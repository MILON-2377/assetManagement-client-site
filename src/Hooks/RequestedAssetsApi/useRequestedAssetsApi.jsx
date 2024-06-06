import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import searchTextNameHook from "./searchTextName";

const useRequestedAssetsApi = (pending) => {
  const axiousSecureApi = useAxiosSecure();

  const fetchData = async () => {

    const textName = searchTextNameHook();
    const param = {
      textName,
      pending
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
