import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import searhTextUpdate from "./searchTextUpdataState";
import handlePaginationPage from "../PaginationCount/paginationPage";
import handleSortingArr from "../AssetsDataSorting/assetsSorting";



const useAssetsSearchApi = () => {
  const axiousSecures = useAxiosSecure();
  const searchText = searhTextUpdate();


const fetchAssets = async (searchText) => {
  let nextPage = handlePaginationPage();
  const sortingName = handleSortingArr();

  if(nextPage === undefined){
    nextPage = 0;
  }

  const params = {
    searchText,
    nextPage,
    sortingName
  };

  if(searchText){
    params.searchText = searchText[0];
  }

  const res = await axiousSecures.get("/assets", {params});
  return res.data;

}


  const { data: resultData = [], refetch } = useQuery({
    queryKey: ["resultData", searchText, ],
    queryFn: async() => fetchAssets(searchText),
    enabled: !!searchText,
    throwOnError: (error) => {
      console.log(error);
    },
  });

  return [resultData, refetch];
};

export default useAssetsSearchApi;
