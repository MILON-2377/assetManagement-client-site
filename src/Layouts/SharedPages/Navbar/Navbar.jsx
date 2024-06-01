import { NavLink } from "react-router-dom";
import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";

const Navbar = () => {
  const { logOut, user } = useAuthProvider();

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>

      {/* this title section is for larges device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex items-center justify-center gap-5 menu-horizontal px-1">
          <NavLink>
            <li>Home</li>
          </NavLink>
          <NavLink to="/joinAnEmployee">
            <li>Join as Employee</li>
          </NavLink>
          {/* <NavLink>
            <li>Join as Employee</li>
          </NavLink>
          <NavLink>
            <li>Home</li>
          </NavLink> */}

          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 32</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>

      {/*  */}
      {/* logo and name section */}
      <div>
        <a className="btn btn-ghost text-2xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-Poppins flex items-center justify-center gap-5 menu-horizontal px-1">
          <NavLink to='/joinAnHRManager'>
            <li>Join as HR Manager</li>
          </NavLink>
          <button className="btn font-Poppins bg-black text-white ">
            LogIn
          </button>
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
