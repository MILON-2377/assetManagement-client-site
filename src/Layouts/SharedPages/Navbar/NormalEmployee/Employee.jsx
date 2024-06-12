import { NavLink } from "react-router-dom";

const Employee = () => {
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
        to="/myRequestedAssets"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>My Assets</li>
      </NavLink>
    </>
  );
};

export default Employee;
