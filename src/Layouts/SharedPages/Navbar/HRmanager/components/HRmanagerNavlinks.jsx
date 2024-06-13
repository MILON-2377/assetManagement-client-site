import { NavLink } from "react-router-dom";

const HRmanagerNavlinks = () => {
  return (
    <>
      <NavLink
        to="/allRequesForAsset"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
            : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
        }
      >
        <li>All Requests</li>
      </NavLink>
      <NavLink
        to="/customrequest"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
            : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
        }
      >
        <li>Custom Requests List</li>
      </NavLink>
      <NavLink
        to="/myEmpoyeeList"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
            : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
        }
      >
        <li>My Employee List</li>
      </NavLink>
      <NavLink
        to="/addAnEmployee"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
            : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
        }
      >
        <li>Add an Employee</li>
      </NavLink>
    </>
  );
};

export default HRmanagerNavlinks;
