import { useEffect, useState } from "react";
import useRequestedAssetsApi from "../../../Hooks/RequestedAssetsApi/useRequestedAssetsApi";
import LoadingPage from "../../../LoadingPage/LoadingPage";
import ErrorPage from "../../ErrorPage/ErrorPage";
import AllActionsMenuBtn from "./AllActionsBtn";

const AllPendingAssetRequest = () => {
  const { data, isLoading, error } = useRequestedAssetsApi(
    `/requestAssets?pending=pending&topMostReq=topMostReq`,
    "ReqData"
  );
  const [pendingAssets, setPendingAssets] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setPendingAssets(data.pendingData);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <>
      <div className="pending-requests-section w-[95%] mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Pending Requests
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Employee Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Item Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Request Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingAssets?.map((request) => (
                <tr key={request._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {request?.requestName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {request?.assetName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {request?.requestDate}
                  </td>
                  <td className="px-6 text-yellow-500 py-4 whitespace-nowrap text-sm ">
                    {request?.requestStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 relative">
                    <AllActionsMenuBtn request={request}></AllActionsMenuBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* limited stock section */}
      <section>
        <div className="limited-stock-items-section w-[95%] mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Limited Stock Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {limitedStockItems
              ?.filter((item) => item.quantity < 10)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllPendingAssetRequest;
