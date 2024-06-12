import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="font-Poppins">
      <div className="carousel h-[600px] w-full">
        <div
          id="item1"
          className="carousel-item flex items-center justify-center bg-center bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/people-silhouettes-american-stock-market-index-s-p-500-spx_1085052-1629.jpg?w=1380')",
          }}
        >
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <div className="card-body flex items-center justify-center text-blue-600 ">
            <h2 className="card-title text-2xl text-center mx-auto font-Poppins font-semibold ">
              Effortlessly Manage Your Company Assets with AssetTrackr
            </h2>

            <div className="card-actions">
              <NavLink
                to="/joinAnHRManager"
                className="btn bg-black text-white hover:bg-black hover:bg-opacity-70 "
              >
                Join as HR Manager
              </NavLink>
            </div>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item flex items-center justify-center bg-center bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/digital-assets-business-management-system-concept_53876-121226.jpg?t=st=1717880524~exp=1717884124~hmac=8f36a61b5413813c0f38251724432369ba00686b147a1331bd22f51fff7e0ff4&w=1380')",
          }}
        >
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <div className="card-body flex items-center justify-center text-blue-600 ">
            <h2 className="card-title text-2xl font-Poppins font-semibold ">
              Join as an Employee
            </h2>
            <p className="text-xl">
              Be a part of our dynamic team and grow with us. Discover new
              opportunities and make an impact.
            </p>
            <div className="card-actions">
              <NavLink
                to="/joinAnEmployee"
                className="btn bg-black text-white hover:bg-black hover:bg-opacity-70 "
              >
                Join as Employee
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
