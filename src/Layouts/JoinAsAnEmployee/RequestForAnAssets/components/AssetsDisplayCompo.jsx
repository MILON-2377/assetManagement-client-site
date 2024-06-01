const AssetsDisplayCompo = ({ assetsData }) => {
//   console.log(assetsData);
  const {
    assetImage,
    productName,
    productQuantity,
    productType,
    returnable,
    _id,
  } = assetsData;

  return (
    <div className=" h-[400px] bg-base-200 px-4 py-4 flex flex-col justify-between ">
      <div className="w-full h-[220px] ">
        <img
          src={assetImage}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary">
            {productQuantity ? "Available" : "Not-available"}
          </div>
        </h2>
        <div className="card-actions flex items-center justify-between ">
          <div className=" bg-base-100 px-3 py-2">
            {returnable ? "Returnable" : "Non-returnable"}
          </div>
        </div>
      </div>
      <div>
        {productQuantity > 0 ? (
          <>
            <button
              disabled={productQuantity > 0 ? false : true}
              className={
                productQuantity > 0
                  ? "bg-black  hover:bg-black hover:bg-opacity-70 text-white px-4 py-3 w-full "
                  : "disabled"
              }
            >
              Request for Asset
            </button>
          </>
        ) : (
          <>
            <button
              disabled={productQuantity > 0 ? false : true}
              className="bg-black  hover:bg-black hover:bg-opacity-70 text-white px-4 py-3 w-full "
            >
              Request for Asset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AssetsDisplayCompo;
