import { IoIosSearch } from "react-icons/io";
import useAssetsLoading from "../../../Hooks/AssetsDataLoader/useAssetsLoading";
import AssetsDisplayCompo from "./components/AssetsDisplayCompo";
import useAssetsSearchApi from "../../../Hooks/AssetsSearchApi/useAssetsSearchApi";
import { useForm } from "react-hook-form";
import searhTextUpdate from "../../../Hooks/AssetsSearchApi/searchTextUpdataState";

const RequestForAnAssets = () => {
  const [assets] = useAssetsLoading();
  const [assetsData, refetch] = useAssetsSearchApi();

  // console.log(assetsData);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { assetName } = data;
    searhTextUpdate(assetName);
    // console.log(name[0]);
    refetch();
    reset();
  };

  return (
    <div>
      {/* assets search and filter sections 
        TODO: Search and filter items functinality should apply on the server side
        */}
      <div className=" w-full flex items-center justify-evenly">
        {/* search section */}
        <fieldset className="w-full space-y-1 text-gray-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative w-full ">
              <span className="absolute inset-y-0 left-0 text-xl flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="px-1 focus:outline-none focus:ring"
                >
                  <IoIosSearch className="text-black text-xl "></IoIosSearch>
                </button>
              </span>
              <input
                type="search"
                {...register("assetName", { required: true })}
                placeholder="Search..."
                className="w-full h-[46px] border border-purple-400 py-2 pl-10 text-sm rounded-md focus:outline-none bg-base-200 text-blue-950 "
              />
            </div>
          </form>
        </fieldset>

        {/* assets filter section */}
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            What is the best TV show?
          </option>
          <option>Available</option>
          <option>Returnable</option>
          <option>Non returnable</option>
        </select>
      </div>

      {/* assets list section */}
      <section className="grid font-Poppins grid-cols-2 lg:grid-cols-4 ">
        {assetsData.length > 0
          ? assetsData.map((item) => (
              <AssetsDisplayCompo
                key={item._id}
                assetsData={item}
              ></AssetsDisplayCompo>
            ))
          : assets?.map((item) => (
              <AssetsDisplayCompo
                key={item._id}
                assetsData={item}
              ></AssetsDisplayCompo>
            ))}
      </section>
    </div>
  );
};

export default RequestForAnAssets;
