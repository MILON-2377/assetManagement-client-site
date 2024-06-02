import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import searhTextUpdate from "./searchTextUpdataState";

const useAssetsSearchApi = () => {
  const axiousSecures = useAxiosSecure();

  const searchText = searhTextUpdate();
  console.log(searchText[0]);



  const { data: assetsData = [], refetch } = useQuery({
    queryKey: ["assetsData"],
    queryFn: async() => {
       const res = await axiousSecures.get(`/assets`, {
            params: { assetName: searchText[0] || "" },
          });
        return res.data;

    },
    enabled: !!searchText,
    throwOnError: (error) => {
      console.log(error);
    },
  });

  return [assetsData, refetch];
};

export default useAssetsSearchApi;
