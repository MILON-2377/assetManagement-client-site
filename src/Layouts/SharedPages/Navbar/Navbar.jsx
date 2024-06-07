import { Link, NavLink } from "react-router-dom";
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
  // const Manager = true;

  const Manager = userData?.Manager;


  // console.log(Manager);

  useEffect(() => {
    refetch();
  }, [user]);

  const handleUsrLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar font-Poppins flex items-center justify-evenly bg-base-100">
      <div className="navbar-start lg:hidden ">
        <div className="dropdown">
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
            {user && Manager ? (
              <>
                <HRManager></HRManager>
                <HRmanagerNavlinks></HRmanagerNavlinks>
              </>
            ) : user ? (
              <></>
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
          {user && Manager ? (
            <>
              <HRManager></HRManager>
            </>
          ) : user ? (
            <>
              <Employee></Employee>
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
        <a className="btn btn-ghost text-2xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-Poppins flex items-center justify-center gap-5 menu-horizontal px-1">
          {user && Manager ? (
            <>
              <HRmanagerNavlinks></HRmanagerNavlinks>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleUsrLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : user ? (
            <>
              <EmployeeNavlinks></EmployeeNavlinks>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleUsrLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
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
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleUsrLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
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
