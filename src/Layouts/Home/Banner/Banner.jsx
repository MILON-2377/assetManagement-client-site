const Banner = () => {
  return (
    <div>
      <div className="carousel h-[600px] w-full">
        <div
          id="item1"
          className="carousel-item flex items-center justify-center bg-center bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage:
              "url('https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg')",
          }}
        >
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <div className="card-body flex items-center justify-center text-blue-600 ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-black text-white hover:bg-black hover:bg-opacity-70 ">
                Join as HR Manager
              </button>
            </div>
          </div>
        </div>
        <div
          id="item1"
          className="carousel-item flex items-center justify-center bg-center bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage:
              "url('https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg')",
          }}
        >
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <div className="card-body flex items-center justify-center text-blue-600 ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-black text-white hover:bg-black hover:bg-opacity-70 ">
                Join as Employee
              </button>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 bg-slate-100 h-10 "></div>
        <div className="flex justify-center bg-yellow-200 lg:w-[30%] py-2 gap-2">
          <a href="#item1" className="btn btn-xs bg-pink-500 text-white ">
            1
          </a>
          <a href="#item2" className="btn bg-pink-500 text-white btn-xs">
            2
          </a>
          <a href="#item3" className="btn bg-pink-500 text-white btn-xs">
            3
          </a>
          <a href="#item4" className="btn bg-pink-500 text-white btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
