import { NavLink } from "react-router-dom";

const EmployeeNavlinks = () => {
  return (
    <>
      <NavLink>
        <li>My Team</li>
      </NavLink>
      <NavLink to="/joinAnEmployee">
        <li>Request for an Asset</li>
      </NavLink>

      {/* user profile  */}
    </>
  );
};

export default EmployeeNavlinks;
