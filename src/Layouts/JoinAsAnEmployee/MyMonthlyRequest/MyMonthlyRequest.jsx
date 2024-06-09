import myPendingRequestHandle from "../../../Hooks/MyRequestedAssetsDataLoadingApi/mypendingRequests";
import useMyRequestedDataLoadingApi from "../../../Hooks/MyRequestedAssetsDataLoadingApi/useMyRequestedDataLoadingApi";

const MyMonthlyRequest = () => {
  const [resultData] = useMyRequestedDataLoadingApi();

  const { monthlyRequstArr } = myPendingRequestHandle(resultData);

//   console.log(monthlyRequstArr);

  return (
    <div className="mt-20 font-Poppins w-[95%] mb-20  mx-auto p-5 shadow-2xl  ">
      <div className="flex items-center gap-2 ">
        <h2 className="text-3xl font-bold font-Poppins px-5 ">
          My Monthly Requests{" "}
        </h2>
        
      </div>

      <div className="w-full mt-5 ">
        <div className={" w-full grid grid-cols-1 overflow-y-scroll h-[500px] lg:grid-cols-3 gap-2 px-4 "}>
          {monthlyRequstArr?.map((item, index) => (
            <>
              <div key={index} className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> <span className="text-xl font-bold  ">Asset Name:</span> {item?.assetName}</h2>
                  <p> <span className="text-xl font-bold  "> Request Date:</span> {item?.requestDate}</p>
                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
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

export default MyMonthlyRequest;
