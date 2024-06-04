import { NavLink } from "react-router-dom";

const HRManager = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " px-3 py-2 text-black font-Poppins bg-base-200 rounded-md "
            : " px-3 py-2 text-black "
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink to='/assetList'
        className={({ isActive }) =>
          isActive
            ? " px-3 py-2 text-black font-Poppins bg-base-200 rounded-md "
            : " px-3 py-2 text-black "
        }
      >
        <li>Asset List</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " px-3 py-2 text-black font-Poppins bg-base-200 rounded-md "
            : " px-3 py-2 text-black "
        }
      >
        <li>Add an Asset</li>
      </NavLink>
    </>
  );
};

export default HRManager;
