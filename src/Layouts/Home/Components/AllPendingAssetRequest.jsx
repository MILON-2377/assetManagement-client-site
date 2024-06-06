import { useEffect, useState} from "react";
import useRequestedAssetsApi from "../../../Hooks/RequestedAssetsApi/useRequestedAssetsApi";
import pendingAssetsRequests from "../../../Hooks/RequestedAssetsApi/allPendingAssetsRequest";
const AllPendingAssetRequest = () => {
  const [requestedData] = useRequestedAssetsApi();
  const [pendingAssets, setPendingAssets] = useState([]);

  // console.log(requestedData);
  useEffect(() => {
    const pendinsAssets = pendingAssetsRequests(requestedData);
    setPendingAssets(pendinsAssets);
    // console.log(pendinsAssets);
  },[requestedData]);

  // console.log(pendingAssets);


  return (
    <div className="mt-20 w-[95%] mx-auto ">
      <h1 className="text-4xl font-Poppins font-bold ">
        All Pending Requests made by employees
      </h1>

      {/* displaying pending request */}
      <div className="grid lg:grid-cols-3 mt-6 grid-cols-2 gap-4 ">
        {pendingAssets?.map((item, index) => (
          <>
            <div key={index} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-Poppins font-bold ">
                  {" "}
                  <span className="text-[25px]">Requester Name:</span>{" "}
                  <span className="text-blue-800">{item?.requestName}</span>
                </h2>
                <p className="text-[20px] font-Poppins font-bold ">
                  {" "}
                  <span className="text-[25px] font-bold font-Poppins ">
                    Asset Name:{" "}
                  </span>{" "}
                  <span className="text-pink-500">{item?.assetName}</span>{" "}
                </p>
                <p></p>
                <div className="card-actions justify-end">
                  <button className="btn bg-yellow-400 text-white text-xl ">
                    {item?.requestStatus}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllPendingAssetRequest;
