import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import useAssetsSearchApi from "../../../Hooks/AssetsSearchApi/useAssetsSearchApi";
import searhTextUpdate from "../../../Hooks/AssetsSearchApi/searchTextUpdataState";
import { useEffect, useState } from "react";
import handlePaginationPage from "../../../Hooks/PaginationCount/paginationPage";
import handleSortingArr from "../../../Hooks/AssetsDataSorting/assetsSorting";
import sortingAssetsDataStore from "../../../Hooks/HandleSortingAssetsData/sortingAssetsData";
import useAxiosSecure from "../../../Hooks/AxiousSecureApi/useAxiosSecure";
import Swal from "sweetalert2";
// import useHRManagerRouteProtected from "../../../Hooks/HrManagerRouteProceted/useHRManagerRouteProtected";

const AssetList = () => {
  const [resultData, refetch] = useAssetsSearchApi();
  const { register, handleSubmit, reset } = useForm();
  const { assetsData, total } = resultData;
  const totalPages = Math.ceil(total / 10);
  const [pages, setPages] = useState(0);
  const axiousSecures = useAxiosSecure();

  // const paymentPro = useHRManagerRouteProtected();

  useEffect(() => {
    // return paymentPro
  },[])

  const onSubmit = (data) => {
    const { assetName } = data;
    searhTextUpdate(assetName);
    sortingAssetsDataStore(1);
    handleSortingArr(1);
    handlePaginationPage(1);
    refetch();
    reset();
  };

  // handle sorting assets list
  const handleSorting = (e) => {
    // console.log(e.target.value);
    handleSortingArr(e.target.value);
    sortingAssetsDataStore(1);
    refetch();
  };

  // handle previous page
  const handlePreviousPage = () => {
    if (pages > 0) {
      const newPage = pages - 1;
      handlePaginationPage(newPage);
      setPages(newPage);
      sortingAssetsDataStore(1);
      refetch();
    }
  };

  const handleNextPage = () => {
    if (totalPages - 1 > pages) {
      const newPage = pages + 1;
      handlePaginationPage(newPage);
      setPages(newPage);
      sortingAssetsDataStore(1);
      refetch();
    }
  };

  //   console.log(assetsData);
  const handleSortingAsset = (e) => {
    sortingAssetsDataStore(e.target.value);
    handleSortingArr(1);
    refetch();
  };

  //   handle asset delete method
  const handleDeleteAsset = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecures
          .delete(`/assets/${id}`)
          .then((res) => {
            console.log(res);
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleAssetUpdate = (id) => {
    // axiousSecures.put(`/assets/${id}`)
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(error => {
    //     console.log(error);
    // })
  };

  return (
    <div className=" mt-5 w-[95%] mx-auto ">
      {/* searh bar and sorting section */}
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

        <div className="w-full">
          <select
            onChange={handleSortingAsset}
            className="select select-primary w-full max-w-xs"
          >
            <option disabled selected>
              Sort Assets by productQuantity
            </option>

            <option>Less than 20</option>
            <option>20 up</option>
          </select>
        </div>

        {/* assets filter section */}
        <select
          onChange={handleSorting}
          className="select select-primary w-full max-w-xs"
        >
          <option disabled selected>
            choose the filter option
          </option>
          <option>Available</option>
          <option>Not-available</option>
          <option>Returnable</option>
          <option>Non-returnable</option>
        </select>
      </div>

      {/* asset list section */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Quantity</th>
                <th>Date Added</th>
                <th>Update Product</th>
                <th>Delete Product</th>
              </tr>
            </thead>
            <tbody>
              {assetsData?.map((item, index) => (
                <tr key={index}>
                  <td>{item?.productName}</td>
                  <td>{item?.returnable ? "Returnable" : "Non-returnable"}</td>
                  <td>{item?.productQuantity}</td>
  
                  <td>{item?.date}</td>
                  <td className="">
                    <button onClick={() => handleAssetUpdate(item._id)} className="bg-blue-500 text-white px-1 py-1 rounded-md">Update</button>
                  </td>
                    <td  className="">
                      <button onClick={() => handleDeleteAsset(item._id)} className="bg-red-500 text-white px-1 py-1 rounded-md">Delete</button>
                    </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssetList;
