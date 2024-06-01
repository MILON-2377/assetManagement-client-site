import { IoIosSearch } from "react-icons/io";
import useAssetsLoading from "../../../Hooks/AssetsDataLoader/useAssetsLoading";
import AssetsDisplayCompo from "./components/AssetsDisplayCompo";

const RequestForAnAssets = () => {


    const [assets] = useAssetsLoading();


  return (
    <div>
      {/* assets search and filter sections 
        TODO: Search and filter items functinality should apply on the server side
        */}
      <div className=" w-full flex items-center justify-evenly">
        {/* search section */}
        <fieldset className="w-full space-y-1 text-gray-100">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <IoIosSearch className="text-black text-xl"></IoIosSearch>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-base-200 text-blue-950 "
            />
          </div>
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
        {
            assets?.map(item => <AssetsDisplayCompo key={item._id} assetsData={item} ></AssetsDisplayCompo>)
        }
      </section>
    </div>
  );
};

export default RequestForAnAssets;
