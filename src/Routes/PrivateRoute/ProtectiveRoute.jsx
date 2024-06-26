import { Navigate,} from "react-router-dom";
import useUserDataLoadingApi from "../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import useRefreshHandling from "../../Hooks/RefreshHandling/useRefreshHandling";
import { useEffect, useState } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";
// import Swal from "sweetalert2";

const fakeAuthCheck = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2200);
  });
};

const ProtectiveRoute = ({ children }) => {
  const [isAuthentiCate, setIsAuthentiCate] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [userData, refetch, isLoading] = useUserDataLoadingApi();
  const userPower = userData?.userType;
  const isRefresh = useRefreshHandling();
  // const location = useLocation();

  // console.log(userData);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await fakeAuthCheck();
      setIsAuthentiCate(auth);
      setLoadingPage(isLoading);
    };

    checkAuth();
    refetch();
  }, [isLoading]);

  useEffect(() => {
    if (isRefresh) {
      console.log("page is refresing");
    }
  }, [isRefresh]);

  if (loadingPage || isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  if (!isAuthentiCate) {
    return <Navigate to="/login"></Navigate>;
  }

  if (userPower === "Manager" || userPower === "Employee") {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default ProtectiveRoute;


// if (
    //   (userPower === "Manager" && userData?.userdata?.packagesLimit === 0) ||
    //   location.pathname !== "/payment"
    // ) {
    //   console.log(userData?.userdata);

    //   Swal.fire({
    //     title: "Payment Warning!!",
    //     text: "You must have to pay before access website page..",
    //     icon: "warning",
    //   });

    //   return <Navigate to="/packagesCard"></Navigate>;
    // }