import { useEffect, useState } from "react";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import useUserDataLoadingApi from "../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import Banner from "./Banner/Banner";
import AllPendingAssetRequest from "./Components/AllPendingAssetRequest";
import TopMostRequestedAsset from "./Components/TopMostRequestedAsset";
import MyPendingRequest from "../JoinAsAnEmployee/MyPendingRequest/MyPendingRequest";
import MyMonthlyRequest from "../JoinAsAnEmployee/MyMonthlyRequest/MyMonthlyRequest";
import TrackYourProgres from "../JoinAsAnEmployee/TrackYourProgress/TrackYourProgres";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";
import LoadingPage from "../../LoadingPage/LoadingPage";
import HomePageCompo from "./homeWithOutUser/HomePageCompo";
import ErrorPage from "../ErrorPage/ErrorPage";
import sortingAssetsDataStore from "../../Hooks/HandleSortingAssetsData/sortingAssetsData";

const Home = () => {
  const { user } = useAuthProvider();
  const [userPower, setUserPower] = useState(null);
  const { data, error, isLoading } = useUserDataLoadingApi(user?.email);

  useEffect(() => {
    if (data) {
      setUserPower(data?.userType);
    }
    sortingAssetsDataStore("ltn10");
  }, [data]);

  useEffect(() => {
    if (data?.userData?.userdata?.Affiliated === "not affiliated") {
      swal(
        "Unaffiliated? Contact your HR manager for registration assistance. Let's kickstart your journey together!"
      );
    }
  }, []);

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <div className="">
      <Helmet>
        <title>Home || AssetTrackr</title>
      </Helmet>

      <section>
        {user && userPower ? (
          <>
            {userPower === "Manager" ? (
              <>
                <AllPendingAssetRequest></AllPendingAssetRequest>
                <TopMostRequestedAsset></TopMostRequestedAsset>
              </>
            ) : (
              <>
                {userPower === "Employee" && (
                  <>
                    {/* <MyPendingRequest></MyPendingRequest>
                    <MyMonthlyRequest></MyMonthlyRequest>
                    <TrackYourProgres></TrackYourProgres> */}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <Banner />
            <HomePageCompo />
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
