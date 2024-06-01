import axios from "axios";

const axiousPublic = axios.create({
    baseURL: "http://localhost:5000",
})

const usePublicApi = () => {
    return axiousPublic;
};

export default usePublicApi;