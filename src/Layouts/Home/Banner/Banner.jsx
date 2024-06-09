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
            <h2 className="card-title text-2xl font-Poppins font-semibold ">
              Join Our Team
            </h2>
            <p className="text-xl font-normal ">
              Join Our Team Choose your path: Join as an HR Manager or as an
              Employee by clicking the buttons below.
            </p>
            <div className="card-actions">
              <NavLink to='/joinAnHRManager' className="btn bg-black text-white hover:bg-black hover:bg-opacity-70 ">
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
            <h2 className="card-title text-2xl font-Poppins font-semibold ">Join as an Employee</h2>
            <p className="text-xl">Be a part of our dynamic team and grow with us. Discover new opportunities and make an impact.</p>
            <div className="card-actions">
              <NavLink to='/joinAnEmployee' className="btn bg-black text-white hover:bg-black hover:bg-opacity-70 ">
                Join as Employee
              </NavLink >
            </div>
          </div>
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
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
