import useMyRequestedDataLoadingApi from "../../../Hooks/MyRequestedAssetsDataLoadingApi/useMyRequestedDataLoadingApi";
import myPendingRequestHandle from "../../../Hooks/MyRequestedAssetsDataLoadingApi/mypendingRequests";

const MyPendingRequest = () => {
  const [resultData] = useMyRequestedDataLoadingApi();

  const { myPendingRequestArr } = myPendingRequestHandle(resultData);

  //   console.log(myPendingRequestArr);

  return (
    <div className="mt-20 w-[95%] mx-auto border border-base-200 md:h-[500px] overflow-y-scroll p-5 rounded-lg ">
      <h2 className="text-3xl font-Poppins font-bold mb-5 ">
        My Pending Requests Awaiting Actions and Approvals
      </h2>
      
        <div className=" text-white text-2xl flex items-center gap-2 bg-slate-800 px-3 py-2 ">
          <p className="text-xl ">Total Pending Requst :</p>
          <p>{myPendingRequestArr.length}</p>
        </div>
      
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th> Product Name</th>
                <th>Product Type</th>
                <th>Requested Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myPendingRequestArr?.map((item, index) => (
                <>
                  <tr key={index}>
                    <th>{item?.assetName}</th>
                    <td>{item?.assetType}</td>
                    <td>{item?.requestDate}</td>
                    <td>{item?.requestStatus}</td>
                  </tr>
                </>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPendingRequest;
