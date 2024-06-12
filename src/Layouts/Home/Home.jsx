import { useEffect} from "react";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import useUserDataLoadingApi from "../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import Banner from "./Banner/Banner";
import AllPendingAssetRequest from "./Components/AllPendingAssetRequest";
import TopMostRequestedAsset from "./Components/TopMostRequestedAsset";
import sortingAssetsDataStore from "../../Hooks/HandleSortingAssetsData/sortingAssetsData";
import MyPendingRequest from "../JoinAsAnEmployee/MyPendingRequest/MyPendingRequest";
import MyMonthlyRequest from "../JoinAsAnEmployee/MyMonthlyRequest/MyMonthlyRequest";
import TrackYourProgres from "../JoinAsAnEmployee/TrackYourProgress/TrackYourProgres";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";
import LoadingPage from "../../LoadingPage/LoadingPage";
import HomePageCompo from "./homeWithOutUser/HomePageCompo";
// import useHRManagerRouteProtected from "../../Hooks/HrManagerRouteProceted/useHRManagerRouteProtected";

// import ImportantNoticed from "../JoinAsAnEmployee/ImportanatNoticed/ImportantNoticed";

const Home = () => {
  const { user } = useAuthProvider();
  const [userData, refetch, isLoading] = useUserDataLoadingApi();
  const userPower = userData?.userType;

  useEffect(() => {
    refetch();
    sortingAssetsDataStore("ltn10");
  }, []);

  useEffect(() => {
    if (userData?.userdata?.Affiliated === "not affiliated") {
      swal(
        "Unaffiliated? Contact your HR manager for registration assistance. Let's kickstart your journey together!"
      );
    }
  }, [userData]);

  if (user && isLoading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="">
      <Helmet>
        <title>Home || AssetTrackr</title>
      </Helmet>

      <section>
        {
          <>
            {userPower === "Manager" ? (
              <>
                <AllPendingAssetRequest></AllPendingAssetRequest>
                <TopMostRequestedAsset></TopMostRequestedAsset>
              </>
            ) : (
              <>
                {userPower === "Employee" ? (
                  <>
                    <MyPendingRequest></MyPendingRequest>
                    <MyMonthlyRequest></MyMonthlyRequest>
                    {/* <ImportantNoticed></ImportantNoticed> */}
                    <TrackYourProgres></TrackYourProgres>
                  </>
                ) : (
                  // if user and userPower not exist
                  <>
                    {/* banner section */}
                    <Banner></Banner>
                    <HomePageCompo></HomePageCompo>
                  </>
                )}
              </>
            )}
          </>
        }
      </section>
    </div>
  );
};

export default Home;
