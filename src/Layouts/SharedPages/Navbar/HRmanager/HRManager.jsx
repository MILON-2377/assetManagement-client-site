import { NavLink } from "react-router-dom";

const HRManager = () => {
  return (
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
        to="/assetList"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>Asset List</li>
      </NavLink>
      <NavLink
        to="/addAnAsset"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>Add an Asset</li>
      </NavLink>
    </>
  );
};

export default HRManager;
