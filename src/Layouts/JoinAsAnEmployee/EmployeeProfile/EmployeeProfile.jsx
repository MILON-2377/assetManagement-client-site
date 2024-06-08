import Swal from "sweetalert2";
import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";

const EmployeeProfile = () => {
  const { user, handleUpdateProfile } = useAuthProvider();

  const updateEmployeeProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // console.log(name);
    handleUpdateProfile(name)
      .then(() => {
        Swal.fire({
            title: "Profile Updated!",
            text: "Your profile information has been updated successfully",
            icon: "success"
          });
          e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className=" md:w-[80%] w-[95%] lg:w-[70%] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6">
            <h1 className="text-2xl font-bold mb-4 text-center ">
              Employee Profile
            </h1>

            <div className=" w-[150px] h-[150px] rounded-full ">
              <img
                src={user?.photoURL}
                className=" object-cover w-full h-full rounded-full "
              />
            </div>
            <p className="text-xl mt-2 font-bold">
              Name:{" "}
              <span className="text-blue-500 uppercase text-[16px]">
                {user?.displayName}
              </span>
            </p>
            <p className="text-xl font-bold">
              Name:{" "}
              <span className="text-blue-500 text-[16px]">{user?.email}</span>
            </p>
          </div>
          <form onSubmit={updateEmployeeProfile}>
            <div className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  readOnly
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                  placeholder={user?.email}
                />
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
