import { NavLink } from "react-router-dom";

const HRmanagerNavlinks = () => {
  return (
    <>
      <NavLink
        to="/allRequesForAsset"
        className={({ isActive }) =>
          isActive
            ? " px-3 py-2 text-black font-Poppins bg-base-200 rounded-md "
            : " px-3 py-2 text-black "
        }
      >
        <li>All Requests</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? " px-3 py-2 text-black font-Poppins bg-base-200 rounded-md "
            : " px-3 py-2 text-black "
        }
      >
        <li>Custom Requests List</li>
      </NavLink>
      <NavLink
        to="/myEmpoyeeList"
        className={({ isActive }) =>
          isActive
            ? " px-3 py-2 text-black font-Poppins bg-base-200 rounded-md "
            : " px-3 py-2 text-black "
        }
      >
        <li>My Employee List</li>
      </NavLink>
      <NavLink
        to="/addAnEmployee"
        className={({ isActive }) =>
          isActive
            ? " px-3 py-2 text-black font-Poppins bg-base-200 rounded-md "
            : " px-3 py-2 text-black "
        }
      >
        <li>Add an Employee</li>
      </NavLink>
    </>
  );
};

export default HRmanagerNavlinks;
