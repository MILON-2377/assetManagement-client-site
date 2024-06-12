import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";
import Employee from "./NormalEmployee/Employee";
import HRManager from "./HRmanager/HRManager";
import HRmanagerNavlinks from "./HRmanager/components/HRmanagerNavlinks";
import EmployeeNavlinks from "./NormalEmployee/components/EmployeeNavlinks";
import useUserDataLoadingApi from "../../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import { useEffect, useState } from "react";
import NavCompoMid from "./NavCompoForMediumDe/NavCompoMid";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  const { logOut, user } = useAuthProvider();
  const [userData, refetch] = useUserDataLoadingApi();
  const navigate = useNavigate();

  // toggle navbar menu icons
  const [isMenuActive, setIsMenuActive] = useState(false);

  const userPower = userData?.userType;

  useEffect(() => {
    refetch();
  }, [user]);

  const handleUsrLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMenuToggle = (t) => {
    setIsMenuActive(() => t);
  };

  useEffect(() => {
    console.log(isMenuActive);
  }, [isMenuActive]);

  return (
    <div className="navbar font-Poppins flex items-center text-white justify-evenly bg-[#2C3E50] ">
      <div className="navbar-start lg:hidden ">
        <>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div
              onClick={() => handleMenuToggle(true)}
              className=" hover:bg-slate-700 px-3 flex items-center justify-items-center py-2 hover:rounded-md  "
            >
              {/* Page content here */}
              <label htmlFor="my-drawer">
                <MdMenuOpen className="text-white hover:text-gray-300 cursor-pointer text-3xl"></MdMenuOpen>
              </label>
            </div>
            <div className={isMenuActive ? "drawer-side z-20 " : "hidden"}>
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu px-4 py-5 w-80 min-h-full flex flex-col gap-2 bg-gray-800 text-base-content">
                <li
                  onClick={() => handleMenuToggle(false)}
                  className="text-white -mt-2 flex items-end justify-end "
                >
                  <span className="text-[35px] ">x</span>
                </li>
                <div className="divider divider-primary  text-white "></div>
                <NavCompoMid></NavCompoMid>
              </ul>
            </div>
          </div>
        </>
      </div>

      {/* this title section is for larges device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex items-center justify-center gap-5 menu-horizontal px-1">
          {user ? (
            <>
              {(userPower === "Manager" && (
                <>
                  <HRManager></HRManager>
                </>
              )) ||
                (userPower === "Employee" && (
                  <>
                    <Employee></Employee>
                  </>
                ))}
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-white hover:text-gray-300"
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/joinAnEmployee"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-white hover:text-gray-300"
                }
              >
                <li>Join as Employee</li>
              </NavLink>
            </>
          )}
        </ul>
      </div>

      {/*  */}
      {/* logo and name section */}
      <div>
        <a className="btn btn-ghost text-2xl">AssetTrackr</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-Poppins flex items-center justify-center gap-5 menu-horizontal px-1">
          {user ? (
            <>
              {userPower === "Manager" ? (
                <>
                  <div className="flex items-center">
                    <HRmanagerNavlinks></HRmanagerNavlinks>
                    <div className="drawer w-[65px] drawer-end">
                      <input
                        id="my-drawer-4"
                        type="checkbox"
                        className="drawer-toggle"
                      />
                      <div className="drawer-content">
                        {/* Page content here */}
                        <label
                          htmlFor="my-drawer-4"
                          className=" float-right h-[60px] w-[60px] rounded-full border-2 "
                        >
                          <img
                            src={user?.photoURL}
                            className="w-full rounded-full h-full object-cover "
                          />
                        </label>
                      </div>
                      <div className="drawer-side">
                        <label
                          htmlFor="my-drawer-4"
                          aria-label="close sidebar"
                          className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                          <h2 className="text-2xl font-bold text-center ">
                            {userData?.userdata?.companyName}
                          </h2>
                          <li>
                            <a>
                              {" "}
                              <span className="font-bold text-[18px] ">
                                Name:
                              </span>
                              <span className="text-blue-700 uppercase font-semibold">
                                {user?.displayName}
                              </span>
                            </a>
                          </li>
                          <li>
                            <Link to="/employeProfile" className="font-bold">
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleUsrLogOut}
                              className="font-bold"
                            >
                              LogOut
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                userPower === "Employee" && (
                  <>
                    <div className="flex items-center justify-between ">
                      <div className=" w-[250px] gap-5 flex items-center ">
                        <EmployeeNavlinks></EmployeeNavlinks>
                      </div>
                      <div className="drawer w-[80px] drawer-end">
                        <input
                          id="my-drawer-4"
                          type="checkbox"
                          className="drawer-toggle"
                        />
                        <div className="drawer-content">
                          {/* Page content here */}
                          <label
                            htmlFor="my-drawer-4"
                            className=" float-right h-[60px] w-[60px] rounded-full border-2 "
                          >
                            <img
                              src={user?.photoURL}
                              className="w-full rounded-full h-full object-cover "
                            />
                          </label>
                        </div>
                        <div className="drawer-side">
                          <label
                            htmlFor="my-drawer-4"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                          ></label>
                          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li>
                              <a>
                                {" "}
                                <span className="font-bold text-[18px] ">
                                  Name:
                                </span>
                                <span className="text-blue-700 uppercase font-semibold">
                                  {user?.displayName}
                                </span>
                              </a>
                            </li>
                            <li>
                              <Link to="/employeProfile" className="font-bold">
                                Profile
                              </Link>
                            </li>
                            <li>
                              <button
                                onClick={handleUsrLogOut}
                                className="font-bold"
                              >
                                LogOut
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}
            </>
          ) : (
            <>
              <NavLink
                to="/joinAnHRManager"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-white hover:text-gray-300"
                }
              >
                <li>Join as HR Manager</li>
              </NavLink>
              <NavLink
                to="/login"
                className="btn bg-[#007BFF] hover:bg-[#0056b3] active:bg-[#004085] text-[16px] text-white "
              >
                LogIn
              </NavLink>
            </>
          )}
        </ul>
      </div>

      {/* login button section for medium and small devices */}
      <div className=" lg:hidden navbar-end ">
        {user ? (
          <>
            {/* drawer open from left side */}
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className=" float-right h-[60px] w-[60px] rounded-full border-2 "
                >
                  <img
                    src={user?.photoURL}
                    className="w-full rounded-full h-full object-cover "
                  />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>
                      {" "}
                      <span className="font-bold text-[18px] ">Name:</span>
                      <span className="text-blue-700 uppercase font-semibold">
                        {user?.displayName}
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link to="/employeProfile" className="font-bold">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleUsrLogOut} className="font-bold">
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn bg-[#007BFF] hover:bg-[#0056b3] active:bg-[#004085] text-[16px] text-white "
            >
              LogIn
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
