import { NavLink } from "react-router-dom";
import HRManager from "../HRmanager/HRManager";
import HRmanagerNavlinks from "../HRmanager/components/HRmanagerNavlinks";
import Employee from "../NormalEmployee/Employee";
import EmployeeNavlinks from "../NormalEmployee/components/EmployeeNavlinks";
import useAuthProvider from "../../../../Hooks/AuthProviderHooks/useAuthProvider";

const NavCompoMid = ({ userPower }) => {
  const { user } = useAuthProvider();

  return (
    <>
      {user ? (
        <>
          {userPower === "Manager" ? (
            <>
              <HRManager></HRManager>
              <HRmanagerNavlinks></HRmanagerNavlinks>
            </>
          ) : (
            userPower === "Employee" && (
              <>
                <Employee></Employee>
                <EmployeeNavlinks></EmployeeNavlinks>
              </>
            )
          )}
        </>
      ) : (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50  "
                : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300 "
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50 "
                : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300"
            }
            to="/joinAnEmployee"
          >
            Join as Employee
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold px-3 py-1 rounded-md bg-gray-50 "
                : "text-white hover:bg-gray-700 px-3 py-1 rounded-md hover:text-gray-300"
            }
            to="/joinAnHRManager"
          >
            Join as HR Manager
          </NavLink>
        </>
      )}
    </>
  );
};

export default NavCompoMid;
