import axios from "axios";


const secureAxiosApi = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {
    return secureAxiosApi;
};

export default useAxiosSecure;