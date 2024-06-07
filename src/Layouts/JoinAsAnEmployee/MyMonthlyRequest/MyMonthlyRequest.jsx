import myPendingRequestHandle from "../../../Hooks/MyRequestedAssetsDataLoadingApi/mypendingRequests";
import useMyRequestedDataLoadingApi from "../../../Hooks/MyRequestedAssetsDataLoadingApi/useMyRequestedDataLoadingApi";

const MyMonthlyRequest = () => {
  const [resultData] = useMyRequestedDataLoadingApi();

  const { monthlyRequstArr } = myPendingRequestHandle(resultData);

  console.log(monthlyRequstArr);

  return (
    <div className="mt-20 font-Poppins w-[95%] mb-20 bg-slate-600 mx-auto p-5 shadow-2xl bg-base-200 ">
      <div className="flex items-center gap-2 ">
        <h2 className="text-3xl text-white font-bold font-Poppins ">
          My Monthly Requests:{" "}
        </h2>
        <p className="text-xl font-Poppins text-base-100 ">
          Stay Updated with Your Recent Activities
        </p>
      </div>

      <div className="w-full mt-5 ">
        <div className=" w-full flex flex-col gap-2 h-full ">
          {monthlyRequstArr?.map((item, index) => (
            <>
              <div key={index} className=" px-4 py-2 flex items-center justify-between  bg-base-200 ">
                <p className=" uppercase ">{item?.assetName}</p>
                <p className="text-center">{item?.assetType}</p>
                <p>{item?.requestDate}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMonthlyRequest;
