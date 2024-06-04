import useAxiosSecure from "../AxiousSecureApi/useAxiosSecure";


const useDeleteAsset = () => {

    const axiousSecures = useAxiosSecure();

    axiousSecures.delete("/users",)
};

export default useDeleteAsset;