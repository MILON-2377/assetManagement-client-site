import { useEffect } from "react";
import useMyRequestedDataLoadingApi from "../../../Hooks/MyRequestedAssetsDataLoadingApi/useMyRequestedDataLoadingApi";
import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";
import searhTextUpdate from "../../../Hooks/AssetsSearchApi/searchTextUpdataState";
import handleSortingArr from "../../../Hooks/AssetsDataSorting/assetsSorting";
import useAxiosSecure from "../../../Hooks/AxiousSecureApi/useAxiosSecure";
import Swal from "sweetalert2";
import isUserLoggedIN from "../../../Hooks/UsersDataLoadApi/isUserLoggedIn";
import { Link } from "react-router-dom";

const MyRequestedAssets = () => {
  const { user } = useAuthProvider();
  const [myRequestedData, refetch] = useMyRequestedDataLoadingApi();
  const axiousSecureApi = useAxiosSecure();

  const userLogger = isUserLoggedIN();

  useEffect(() => {
    console.log(userLogger)
    refetch();
  }, [user, userLogger]);

  // search items and filter handle
  const handleSearchItems = (e) => {
    e.preventDefault();
    const searchTexts = e.target.search.value;
    searhTextUpdate(searchTexts);
    handleSortingArr(1);
    refetch();
    e.target.reset();
    // console.log(searchTexts);
  };

  // filter assets
  const filterAssetsHandle = (e) => {
    // console.log(e.target.value);
    handleSortingArr(e.target.value);
    searhTextUpdate(1);
    refetch();
  };

  console.log(myRequestedData);

  const handleReturnAsset = (id) => {
    // console.log(id === "665b55f5e7d2b2d8f03f6b27")
    axiousSecureApi
      .put(`/requestAssets/${id}`)
      .then((res) => {
        console.log(res);
        res.data &&
          Swal.fire({
            title: "Asset Returned Status!",
            text: `${res.data.message}`,
            icon: "success",
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-full flex items-center gap-5 justify-between">
        {/* search section to search items by its names */}
        <div className="w-full">
          <form
            onSubmit={handleSearchItems}
            className="flex w-full items-center gap-2"
          >
            <label className="input lg:w-full w-full input-bordered flex items-center gap-2">
              <input
                type="text"
                name="search"
                className="grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button className="btn">Search</button>
          </form>
        </div>

        {/* filter items by pending approved returnable non returnable */}
        <div className="w-full">
          <select
            onChange={filterAssetsHandle}
            className="select select-bordered w-full "
          >
            <option disabled selected>
              Filter items by....
            </option>
            <option>pending</option>
            <option>Approved</option>
            <option>Returnable</option>
            <option>Non-returnable</option>
          </select>
        </div>
      </div>

      {/* assets displaying section */}
      <section>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Asset Name</th>
                <th>Asset Type</th>
                <th>Request Date</th>
                <th className=" text-yellow-500 ">Request Status</th>
                <th>Approval Date</th>
                <th className=" font-Poppins font-extrabold text-red-500 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="font-Poppins">
              {myRequestedData.length > 0 &&
                myRequestedData?.map((item, index) => (
                  <>
                    <tr key={index}>
                      <th>{item?.assetName}</th>
                      <td>{item?.assetType}</td>
                      <td>{item?.requestDate}</td>
                      <td className=" ">
                        <p className=" py-1 rounded-full bg-yellow-500 text-white text-center ">
                          {item?.requestStatus.toUpperCase()}
                        </p>
                      </td>
                      <td>
                        {item?.requestApprovalDate
                          ? item?.requestApprovalDate
                          : "[]"}
                      </td>
                      <td>
                        {item?.requestStatus && (
                          <>
                            {(item.requestStatus === "pending" && (
                              <>
                                <button className="btn">
                                  Cancle asset request
                                </button>
                              </>
                            )) ||
                              (item?.requestStatus.toLowerCase() ===
                              "approved" && (item?.assetType.toLowerCase() === "returnable" || item?.assetType.toLowerCase() === "returned" ) ? (
                                <>
                                  <button
                                    disabled={item?.assetType.toLowerCase() === "returned" && true }
                                    onClick={() => handleReturnAsset(item._id)}
                                    className="btn"
                                  >
                                    Return Asset
                                  </button>
                                </>
                              ) : (
                                <>
                                  <Link to='/printeAssetPage' className="btn">Printe Asset</Link>
                                </>
                              ))}
                          </>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyRequestedAssets;
