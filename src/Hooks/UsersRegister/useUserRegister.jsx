import usePublicApi from "../PublicApi/usePublicApi";
import handleUserRegisterData from "./userRegisterData";

const useUserRegister = () => {
  const publicApi = usePublicApi();

  const handleRegisterUsers = async () => {
    const usersRegisterData = handleUserRegisterData();

    const res = await publicApi.post("/users", usersRegisterData);
    return res.data;
  };

  return handleRegisterUsers;
};

export default useUserRegister;
