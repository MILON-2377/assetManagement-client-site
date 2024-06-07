import { useEffect } from "react";
import useUserDataLoadingApi from "../../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import affiliatedUsers from "../../../Hooks/UsersDataLoadApi/unAffiliatedUsersDataStore";
import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";
import { useLocation } from "react-router-dom";
import makeUsersEmployee from "../../../Hooks/UsersDataLoadApi/makeUsersEmployee";
import useMakeUsersToEmployee from "../../../Hooks/UsersDataLoadApi/useMakeUsersToEmployee";

const MyEmployeeList = () => {
  const { user } = useAuthProvider();
  const [userData, refetch] = useUserDataLoadingApi();
  const makeEmployee = useMakeUsersToEmployee();

  const location = useLocation();

  const { myEmployees, userdata } = userData;

//   console.log(employees);

  useEffect(() => {
    const companyId = user?.email;
    affiliatedUsers(companyId);
    refetch();
  }, [location.pathname === "/myEmpoyeeList"]);


    // handle remove the employee from the team
    const handleRemoveEmployee = (id) => {
        const inFo = {id, action:"remove", companyId: userdata.email};
        makeUsersEmployee(inFo);
        makeEmployee()
        .then(res => {
            console.log(res);
            refetch();
        })
        .catch(error => {
            console.log(error);
        })
    }

  return (
    <div>
         <div className="bg-base-200 px-4 py-5 flex flex-col gap-5 ">
        <h1 className=" text-4xl font-semibold  ">
          Employee Management Dashboar
        </h1>
        <div className="flex items-ce justify-between">
          <div className=" flex w-full items-center  gap-6 ">
            <div className="flex items-center">
              <h2 className="text-xl font-Poppins font-bold">
                Current Empoyees :
              </h2>
              <p className=" ml-2 text-yellow-500 text-xl ">{userdata?.currentEmployees}</p>
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-Poppins font-bold">
                Package Limit :
              </h2>
              <p className="text-yellow-500 ml-2 text-xl ">{userdata?.packagesLimit}</p>
            </div>
          </div>
         
        </div>
      </div>

      {/* displaying the members of employing doing job */}
      <div className="overflow-x-auto mt-7 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Employee Profile</th>
              <th>Employee Name</th>
              <th>Employee Type</th>
              <th>Action Button</th>
            </tr>
          </thead>
          <tbody>
            {myEmployees?.map((item, index) => (
              <>
                <tr key={index}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>

                  <th>{item?.fullName}</th>
                  <th></th>
                  <th>
                    <button onClick={() => handleRemoveEmployee(item.email) } className="btn btn-ghost btn-xs">Remove from team</button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEmployeeList;
