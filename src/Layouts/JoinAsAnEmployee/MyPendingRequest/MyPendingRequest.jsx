import useMyRequestedDataLoadingApi from "../../../Hooks/MyRequestedAssetsDataLoadingApi/useMyRequestedDataLoadingApi";
import myPendingRequestHandle from "../../../Hooks/MyRequestedAssetsDataLoadingApi/mypendingRequests";

const MyPendingRequest = () => {
  const [resultData] = useMyRequestedDataLoadingApi();

  const { myPendingRequestArr } = myPendingRequestHandle(resultData);

    // console.log(myPendingRequestArr);

  return (
    <div className="mt-20 w-[95%] mx-auto border border-base-200 md:h-[500px] overflow-y-scroll p-5 rounded-lg ">
      <h2 className="text-3xl font-Poppins font-bold ">
        My Pending Requests Awaiting Actions and Approvals
      </h2>

      <div className=" px-2 bg-black bg-opacity-80 text-white lg:w-[400px] rounded-md mt-3  mb-3 text-2xl flex items-center gap-2 py-2 ">
        <p className="text-3xl font-bold ">Total Pending Requst :</p>
        <p className="text-2xl font-bold">{myPendingRequestArr.length}</p>
      </div>

      <div>
        <div className="overflow-x-auto grid grid-cols-3 gap-3 ">
          {myPendingRequestArr?.map((item, index) => (
            <>
              <div key={index} className="card w-full bg-base-100  shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> <span className="text-xl font-bold ">Asset Name: </span> {item?.assetName}</h2>
                  <p className="text-xl"> <span className="text-xl font-bold ">Request Date:</span> {item?.requestDate}</p>
                  <p className="text-xl"> <span className="text-xl font-bold ">Request Status:</span> <span className="uppercase text-yellow-500"> {item?.requestStatus}</span> </p>
                  <div className="card-actions justify-end">
                    <button className="btn ">Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPendingRequest;
