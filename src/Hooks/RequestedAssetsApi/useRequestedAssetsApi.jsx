import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";

const useRequestedAssetsApi = (apiName, dataType) => {
  const axiousSecureApi = useAxiosSecure();

  const fetchData = async () => {
    const res = await axiousSecureApi.get(apiName);
    return res.data;
  };


  return useQuery({
    queryKey:[`${dataType}`, apiName],
    queryFn: () => fetchData(apiName),

  })
  
};

export default useRequestedAssetsApi;
