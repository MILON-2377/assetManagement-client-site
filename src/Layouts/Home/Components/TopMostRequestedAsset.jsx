import { useEffect, useState } from "react";
import useRequestedAssetsApi from "../../../Hooks/RequestedAssetsApi/useRequestedAssetsApi";

const TopMostRequestedAsset = () => {
  const { data } = useRequestedAssetsApi(
    `/requestAssets?pending=pending&topMostReq=topMostReq`,
    "ReqData"
  );

  const [topMostReqData, setTopMostReqData] = useState([]);

  useEffect(() => {
    if (data) {
      setTopMostReqData(data.allReqData);
    }
  }, [data]);

  return (
    <div className="top-requested-items-section mt-10 w-[95%] mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Top Most Requested Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topMostReqData?.slice(0, 4).map((item, index) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-medium text-gray-900">{item?.assetName}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Requests: {index}
            </p>
            <p className="text-sm text-gray-600">{item?.noteData}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMostRequestedAsset;
