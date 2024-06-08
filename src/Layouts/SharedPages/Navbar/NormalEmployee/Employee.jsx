import { NavLink } from "react-router-dom";

const Employee = () => {
  return (
    <>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink to="/myRequestedAssets">
        <li>My Assets</li>
      </NavLink>
    </>
  );
};

export default Employee;
