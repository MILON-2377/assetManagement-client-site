import { NavLink } from "react-router-dom";

const HRmanagerNavlinks = () => {
  return (
    <>
      <NavLink
        to="/allRequesForAsset"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>All Requests</li>
      </NavLink>
      <NavLink
        to="/customrequest"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>Custom Requests List</li>
      </NavLink>
      <NavLink
        to="/myEmpoyeeList"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>My Employee List</li>
      </NavLink>
      <NavLink
        to="/addAnEmployee"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold"
            : "text-white hover:text-gray-300"
        }
      >
        <li>Add an Employee</li>
      </NavLink>
    </>
  );
};

export default HRmanagerNavlinks;
