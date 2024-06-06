import { useState } from "react";
import handlePaginationPage from "../../../Hooks/PaginationCount/paginationPage";
import useAssetsSearchApi from "../../../Hooks/AssetsSearchApi/useAssetsSearchApi";

const TopMostRequestedAsset = () => {
  const [resultData, refetch] = useAssetsSearchApi();
  const { total, assetsData } = resultData;
  const totalPages = Math.ceil(total / 10);
  const [pages, setPages] = useState(0);

  // console.log(total);

  const handlePreviousPage = () => {
    if (pages > 0) {
      const newPage = pages - 1;
      handlePaginationPage(newPage);
      setPages(newPage);
      refetch();
    }
  };

  const handleNextPage = () => {
    if (totalPages - 1 > pages) {
      const newPage = pages + 1;
      handlePaginationPage(newPage);
      console.log(newPage);
      setPages(newPage);
      refetch();
    }
  };

  return (
    <section className="flex mb-20 mt-20 w-[95%] mx-auto lg:flex-row flex-col-reverse items-center gap-5 justify-between  ">
      <div className=" lg:flex-1 w-full shadow-xl flex flex-col gap-2 p-6 border border-yellow-300 ">
        <h1 className="text-2xl font-Poppins font-semibold text-blue-600 ">
          Limited stock items
        </h1>
        <div className="divider w-full divider-warning font-Poppins ">
          {" "}
          Assets List
        </div>

        <div className="w-full flex flex-col gap-5 ">
          <div className="w-full grid grid-cols-3 font-bold font-Poppins text-white ">
            <div className=" px-3 py-2 text-blue-800 ">Product Name</div>
            <div className=" px-3 py-2 text-blue-800 ">Product Quantity</div>
            <div className=" px-3 py-2 text-blue-800 ">Product Category</div>
          </div>
          <div className="w-full font-Poppins h-[320px] py-5 px-3 text-purple-600 rounded-lg shadow-2xl bg-base-100 flex flex-col gap-2  ">
            {assetsData?.map((item) => (
              <>
                <div key={item._id} className="grid grid-cols-3">
                  <div className=" py-2 text-center px-3 bg-base-200 ">
                    {item.productName}
                  </div>
                  <div className=" py-2 text-center px-3 bg-base-200 ">
                    {item.productQuantity}
                  </div>
                  <div className=" py-2 text-center px-3 bg-base-200 ">
                    {item.returnable ? "Returnable" : "Non-returnable"}
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="w-full flex items-center justify-between px-10 ">
            <button
              onClick={handlePreviousPage}
              className="btn text-pink-500 font-Poppins font-semibold "
            >
              Previous Page
            </button>
            <button
              onClick={handleNextPage}
              className="btn text-pink-500 font-Poppins font-semibold "
            >
              Next page
            </button>
          </div>
        </div>
      </div>
      <div
        className="lg:w-[40%] flex items-center justify-center  w-full bg-cover bg-center bg-no-repeat h-[400px] "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/hand-drawn-bank-drawing-doodle-illustration_23-2150591914.jpg?t=st=1717619041~exp=1717622641~hmac=509a33b7a8f72ed289137a9a2210d8d0fdd289dbda0d23e76d6e3e72728daa73&w=740')",
        }}
      >
        <h1 className=" text-yellow-500 text-6xl font-Poppins font-bold ">
          Top most requested assets
        </h1>
      </div>
    </section>
  );
};

export default TopMostRequestedAsset;
