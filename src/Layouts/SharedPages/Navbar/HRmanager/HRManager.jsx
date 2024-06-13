import { NavLink } from "react-router-dom";

const HRManager = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
            : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/assetList"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
            : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
        }
      >
        <li>Asset List</li>
      </NavLink>
      <NavLink
        to="/addAnAsset"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
            : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
        }
      >
        <li>Add an Asset</li>
      </NavLink>
    </>
  );
};

export default HRManager;
