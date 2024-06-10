import { useEffect, useState } from "react";
import useUserDataLoadingApi from "../../../Hooks/UsersDataLoadApi/useUserDataLoadingApi";
import affiliatedUsers from "../../../Hooks/UsersDataLoadApi/unAffiliatedUsersDataStore";
import makeUsersEmployee from "../../../Hooks/UsersDataLoadApi/makeUsersEmployee";
import useMakeUsersToEmployee from "../../../Hooks/UsersDataLoadApi/useMakeUsersToEmployee";
import { useLocation } from "react-router-dom";

const AddAnEmployee = () => {
  const location = useLocation();
  const [isLimitActive, setIsLimitActive] = useState(false);
  const [userData, refetch] = useUserDataLoadingApi();
  const [selectEmpoyee, setSelectEmployee] = useState([]);
  const makeEmployee = useMakeUsersToEmployee();

  const { employees,userdata } = userData;

  // console.log(userdata);
  console.log(employees);


  useEffect(() => {
    affiliatedUsers("affiliated");
    refetch();
  }, [(location.pathname === "/addAnEmployee")]);

  //   make the user to employee
  const handleMakeEmployee = (id) => {
    const inFo = {
      companyName: userdata?.companyName,
      companyLogo: userdata?.companyLogo,
      companyId: userdata.email,
    }
    makeUsersEmployee({...inFo,id});
    makeEmployee()
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

    // selected users to make employee
    const handleSelectUers = () => {
      const inFo = {
        companyName: userdata?.companyName,
        companyLogo: userdata?.companyLogo,
        companyId: userdata?.email,
      }

      makeUsersEmployee({...inFo,selectEmpoyee});

      makeEmployee()
      .then(res => {
        console.log(res);
        setSelectEmployee([]);
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
          <div>
            <button
              onClick={() => setIsLimitActive(!isLimitActive)}
              className="btn bg-black text-white font-semibold "
            >
              Increase the limit{" "}
            </button>
          </div>
        </div>
      </div>

      {/* packages section  */}
      <section
        className={
          isLimitActive
            ? " lg:w-[80%] lg:border border-yellow-300 mt-9 px-3 transition-all mx-auto py-5 flex lg:flex-row flex-col items-center gap-5 "
            : "hidden"
        }
      >
        <div className="card transition-all hover:scale-110 w-full bg-base-200 text-primary-content">
          <div className="card-body text-blue-700 font-Poppins ">
            <h2 className="card-title">Package 1: 5 Members for $5</h2>
            <p>
              Enhance your team with this entry-level package, perfect for small
              groups and startups. Add up to 5 members to your team for just $5.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-slate-800 text-white ">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card transition-all hover:scale-110 w-full bg-base-200 text-primary-content">
          <div className="card-body text-blue-700 font-Poppins ">
            <h2 className="card-title">Package 2: 10 Members for $8</h2>
            <p>
              Grow your team efficiently with this cost-effective package,
              providing a great value for expanding your workforce. For only $8,
              you can include up to 10 members in your team.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-slate-800 text-white ">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card transition-all hover:scale-110 w-full bg-base-200 text-primary-content">
          <div className="card-body text-blue-700 font-Poppins ">
            <h2 className="card-title">Package 3: 20 Members for $15</h2>
            <p>
              Maximize your team capacity with this comprehensive package,
              offering the best value for larger teams.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-slate-800 text-white ">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* all unaffiliated users displaying section */}
      <div className=" w-[98%] lg:w-[95%] mx-auto ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                </th>
                <th>Name</th>
                <th>Member Type</th>
                <th>Make Employee</th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((item, index) => (
                <>
                  <tr key={index}>
                    <th>
                      <label onChange={() => setSelectEmployee([...selectEmpoyee, item.email ]) } >
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.employeeImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item?.fullName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>

                    <th>
                      <button
                        onClick={() => handleMakeEmployee(item.email)}
                        className="btn btn-ghost btn-xs"
                      >
                        {" "}
                        Add an employee{" "}
                      </button>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full flex items-center justify-center">
          <button onClick={handleSelectUers} className="btn">Add selected employee</button>
        </div>
      </div>
    </div>
  );
};

export default AddAnEmployee;
