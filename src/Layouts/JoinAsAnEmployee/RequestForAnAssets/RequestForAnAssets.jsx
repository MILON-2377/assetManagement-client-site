import { IoIosSearch } from "react-icons/io";
import AssetsDisplayCompo from "./components/AssetsDisplayCompo";
import useAssetsSearchApi from "../../../Hooks/AssetsSearchApi/useAssetsSearchApi";
import { useForm } from "react-hook-form";
import searhTextUpdate from "../../../Hooks/AssetsSearchApi/searchTextUpdataState";
import { useState } from "react";
import handlePaginationPage from "../../../Hooks/PaginationCount/paginationPage";
import handleSortingArr from "../../../Hooks/AssetsDataSorting/assetsSorting";

const RequestForAnAssets = () => {
  const [pages, setPages] = useState(0);
  const [resultData, refetch] = useAssetsSearchApi();

  const { total, assetsData } = resultData;
  const totalPages = Math.ceil(total / 10);

  const { register, handleSubmit, reset } = useForm();

  // handle search data base on searh text
  const onSubmit = (data) => {
    const { assetName } = data;
    searhTextUpdate(assetName);
    handleSortingArr(1);
    refetch();
    reset();
  };

  // handle pagination next page 
  const handleNextPage = () => {
    if (totalPages - 1> pages) {
      const newPage = pages + 1;
      handlePaginationPage(newPage);
      setPages(newPage);
      refetch();
    }
  };

  // handle pagination previous page
  const handlePreviousPage = () => {
    if (pages > 0) {
      const newPage = pages - 1;
      handlePaginationPage(newPage);
      setPages(newPage);
      refetch();
    }
  };

  // handle sorting data
  const handleSortingData = (e) => {
    // console.log(e.target.value);
    handleSortingArr(e.target.value);
    searhTextUpdate(1);
    refetch();
  }

  // console.log(resultData);

  return (
    <div>
      {/* assets search and filter sections 
        TODO: Search and filter items functinality should apply on the server side
        */}
      <div className=" w-full flex items-center gap-4 justify-evenly">
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

        {/* pagination section */}
        <div className="join w-full ">
          <div className="join grid grid-cols-2">
            <button
              onClick={handlePreviousPage}
              className="join-item btn btn-outline text-[14px] "
            >
              Previous page
            </button>
            <button
              onClick={handleNextPage}
              className="join-item btn btn-outline"
            >
              Next
            </button>
          </div>
          {/* {pages?.map((page, index) => {
            return (
              <button key={index} className="btn bg-blue-950 hover:bg-blue-950 hover:bg-opacity-75 text-white text-xl ">1</button>
            );
          })} */}
        </div>

        {/* assets filter section */}
        <select onChange={handleSortingData} className="select select-primary w-full max-w-xs">
          <option disabled selected>
            What is the best TV show?
          </option>
          <option>Available</option>
          <option>Not-available</option>
          <option>Returnable</option>
          <option>Non-returnable</option>
        </select>
      </div>

      {/* assets list section */}
      <section className="grid font-Poppins grid-cols-2 lg:grid-cols-4 ">
        {assetsData?.map((item) => (
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
