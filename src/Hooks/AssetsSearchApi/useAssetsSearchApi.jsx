import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import searhTextUpdate from "./searchTextUpdataState";
import handlePaginationPage from "../PaginationCount/paginationPage";
import handleSortingArr from "../AssetsDataSorting/assetsSorting";
import sortingAssetsDataStore from "../HandleSortingAssetsData/sortingAssetsData";



const useAssetsSearchApi = () => {
  const axiousSecures = useAxiosSecure();


const fetchAssets = async (searchText) => {
  const searchName = searhTextUpdate();
  let nextPage = handlePaginationPage();
  const sortingName = handleSortingArr();
  const sortQuantityName = sortingAssetsDataStore();

  console.log(nextPage);

  if(nextPage === undefined){
    nextPage = 0;
  }

  const params = {
    searchName,
    nextPage,
    sortingName,
    sortQuantityName,
  };

  if(searchText){
    params.searchName = searchName;
  }

  const res = await axiousSecures.get("/assets", {params});
  return res.data;

}


  const { data: resultData = [], refetch } = useQuery({
    queryKey: ["resultData"],
    queryFn: async() => fetchAssets(),
    throwOnError: (error) => {
      console.log(error);
    },
  });

  return [resultData, refetch];
};

export default useAssetsSearchApi;
