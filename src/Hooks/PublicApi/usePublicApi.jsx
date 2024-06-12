import axios from "axios";

const axiousPublic = axios.create({
    baseURL: "https://b9a12-server-side-milon-2377.vercel.app/",
})

const usePublicApi = () => {
    return axiousPublic;
};

export default usePublicApi;