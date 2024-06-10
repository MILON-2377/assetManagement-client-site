import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";
import Employee from "./NormalEmployee/Employee";
import HRManager from "./HRmanager/HRManager";
import HRmanagerNavlinks from "./HRmanager/components/HRmanagerNavlinks";
import EmployeeNavlinks from "./NormalEmployee/components/EmployeeNavlinks";
import useUserDataLoadingApi from "../../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import { useEffect } from "react";

const Navbar = () => {
  const { logOut, user } = useAuthProvider();
  const [userData, refetch] = useUserDataLoadingApi();
  const navigate = useNavigate();

  const userPower = userData?.userType;

  console.log(userData.userdata);

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

  return (
    <div className="navbar font-Poppins flex items-center justify-evenly bg-base-100">
      <div className="navbar-start lg:hidden ">
        <div className="dropdown ">
          {/* this is for medium devices */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] px-4 py-4 shadow bg-base-100 gap-2 rounded-box w-52"
          >
            {user ? (
              <>
                {userPower === "Manager" ? (
                  <>
                    <HRManager></HRManager>
                    <HRmanagerNavlinks></HRmanagerNavlinks>
                  </>
                ) : (
                  userPower === "Employee" && (
                    <>
                      <Employee></Employee>
                      <EmployeeNavlinks></EmployeeNavlinks>
                    </>
                  )
                )}
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 bg-base-200 rounded-md text-black font-Poppins "
                      : " px-3 py-2  rounded-md text-black "
                  }
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 bg-base-200 rounded-md text-black font-Poppins "
                      : " px-3 py-2  rounded-md text-black "
                  }
                  to="/joinAnEmployee"
                >
                  <li>Join as Employee</li>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 bg-base-200 rounded-md text-black font-Poppins "
                      : " px-3 py-2  rounded-md text-black "
                  }
                  to="/joinAnHRManager"
                >
                  <li>Join as HR Manager</li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
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
              <NavLink>
                <li>Home</li>
              </NavLink>
              <NavLink to="/joinAnEmployee">
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
                          <h2 className="text-2xl font-bold text-center ">{userData?.userdata?.companyName}</h2>
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
              <NavLink to="/joinAnHRManager">
                <li>Join as HR Manager</li>
              </NavLink>
              <Link
                to="/login"
                className="btn font-Poppins bg-black text-white "
              >
                LogIn
              </Link>
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
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn bg-black hover:bg-black hover:bg-opacity-70 text-white "
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
