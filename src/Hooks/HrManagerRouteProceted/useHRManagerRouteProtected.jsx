import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUserDataLoadingApi from "../UsersDataLoadApi/useUserDataLoadingApi";

const useHRManagerRouteProtected = () => {
  const [userData] = useUserDataLoadingApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.userdata?.packagesLimit === 0 || userData?.userdata?.payment) {
      
        Swal.fire({
          title: "Payment Warning!!",
          text: "You must have to pay before access website page..",
          icon: "warning",
        });
      

      navigate("/packagesCard");
    }
  }, [userData, navigate]);
};

export default useHRManagerRouteProtected;
