import useAxiosSecure from "../../../Hooks/AxiousSecureApi/useAxiosSecure";
import searchTextNameHook from "../../../Hooks/RequestedAssetsApi/searchTextName";
import useRequestedAssetsApi from "../../../Hooks/RequestedAssetsApi/useRequestedAssetsApi";

const AllRequestForAssets = () => {
  const [requestedData, refetch] = useRequestedAssetsApi();
  const axiousSecuresApi = useAxiosSecure();

  console.log(requestedData);

  const handleSearchAssets = (e) => {
    e.preventDefault();
    const searchTextName = e.target.Search.value;
    searchTextNameHook(searchTextName);
    refetch();
    e.target.reset();
  };

  const handleAssetRequestApproved = (id) => {
    console.log(id);
    axiousSecuresApi.put(`/`)
  }

  return (
    <div className="w-[98%] mx-auto">
      {/* search bar section */}
      <div className="mt-5">
        <form
          onSubmit={handleSearchAssets}
          className="flex items-center px-4 gap-2"
        >
          <label className="input w-full lg:w-[40%] input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              name="Search"
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

      {/* displaying all the requested assets */}
      <div className="overflow-x-auto mt-8 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Email of requester</th>
              <th>Name of requester</th>
              <th>Request Date</th>
              <th>Additional note</th>
              <th className="text-yellow-500">Status</th>
              <th>Approve Button</th>
              <th>Reject Button</th>
            </tr>
          </thead>
          <tbody>
            {requestedData.length >= 1 &&
              requestedData?.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{item?.assetName}</td>
                    <td>{item?.assetType}</td>
                    <td>{item?.requestEmail}</td>
                    <td>{item?.requestName}</td>
                    <td>{item?.requestDate}</td>
                    <td>{item?.noteData}</td>
                    <td className="text-yellow-500">{item?.requestStatus}</td>
                    <td>
                      <button onClick={ () => handleAssetRequestApproved(item?._id)} className=" px-1 py-1 rounded-md bg-blue-700 text-white "> Apporve request</button>
                    </td>
                    <td>
                      <button className=" px-1 py-1 rounded-md bg-red-700 text-white ">Reject request</button>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequestForAssets;
