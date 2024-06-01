import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const useAuthProvider = () => {
  return useContext(authContext);
};

export default useAuthProvider;
