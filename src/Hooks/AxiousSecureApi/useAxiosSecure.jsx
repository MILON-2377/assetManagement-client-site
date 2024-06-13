import axios from "axios";
import useAuthProvider from "../AuthProviderHooks/useAuthProvider";
import { useNavigate } from "react-router-dom";


const secureAxiosApi = axios.create({
    baseURL: "http://localhost:5000/",
})

const useAxiosSecure = () => {

    const {logOut} = useAuthProvider();
    const navigate = useNavigate();

    secureAxiosApi.interceptors.request.use((config) => {
        const token = localStorage.getItem("userToken");

        config.headers.authorization = `Bearer ${token}`;

        return config
    }, (error) => {
        return Promise.reject(error);
    });


    secureAxiosApi.interceptors.response.use((res) => {
        return res;
    }, (error) => {
        const status = error.res.status;

        if(status === 401 || status === 403) {
            logOut();
            return navigate("/login");
        }
    })



    return secureAxiosApi;
};

export default useAxiosSecure;