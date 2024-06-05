import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../AuthProviderHooks/useAuthProvider";
import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";
import searhTextUpdate from "../AssetsSearchApi/searchTextUpdataState";
import handleSortingArr from "../AssetsDataSorting/assetsSorting";

const useMyRequestedDataLoadingApi = () => {
    
    const {user} = useAuthProvider();
    const userEmail = user?.email;
    const axiousSecure = useAxiosSecure();

    // console.log(user);


    const fetchData = async() => {
        const searchName = searhTextUpdate();
        const filterName = handleSortingArr();

        // console.log(searchName);

        const param = {
            searchName: searchName,
            filterName,
            userEmail: user?.email
        }

        const res = await axiousSecure.get(`/requestAssets/${userEmail}`, {
            params: param,
        });
        return res.data;
    };

    const {data: myRequestedData=[], refetch} = useQuery({
        queryKey: ["myRequestedData"],
        queryFn: () => fetchData(),
    });

    return [myRequestedData, refetch];
};

export default useMyRequestedDataLoadingApi;