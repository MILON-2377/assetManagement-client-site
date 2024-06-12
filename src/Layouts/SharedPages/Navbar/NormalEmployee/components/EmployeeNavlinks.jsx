import { NavLink } from "react-router-dom";

const EmployeeNavlinks = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>My Team</li>
      </NavLink>
      <NavLink
        to="/requestForAssets"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>Request for an Asset</li>
      </NavLink>

      {/* user profile  */}
    </>
  );
};

export default EmployeeNavlinks;
