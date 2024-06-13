import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import handleUserRegisterData from "../../Hooks/UsersRegister/userRegisterData";
import useUserRegister from "../../Hooks/UsersRegister/useUserRegister";
import { useLocation, useNavigate } from "react-router-dom";
import paymentPriceArr from "../../Hooks/PaymentPrice/paymentPrice";

const JoinAnHRManager = () => {
  const { register, handleSubmit, reset } = useForm();
  const { userRegister } = useAuthProvider();
  const registerUser = useUserRegister();
  const navigate = useNavigate();
  const location = useLocation();

  //   console.log(user);

  const onSubmit = (data) => {
    // console.log(data);
    const { email, password, dateOfBirth, fullName, companyLogo, companyName } =
      data;
    const userType = "Manager";
    const userData = {
      fullName,
      email,
      dateOfBirth,
      companyLogo,
      companyName,
      userType,
    };

    const price = paymentPriceArr();

    // console.log(data);
    userRegister(email, password)
      .then(() => {
        handleUserRegisterData(userData);
        registerUser()
          .then((res) => {
            // console.log(res);
            if (res.acknowledged) {
              if (price) {
                navigate("/payment");
              } else {
                navigate("/packagesCard");
              }

              reset();
            } else {
              Swal.fire({
                title: `Hello ${fullName}! ${res.message} `,
                text: "Please login!",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-xl w-full p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            HR Manager Registration
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Welcome to the HR Manager Registration page. Join our team of
            dedicated professionals and lead with excellence. Complete the form
            below to get started on your journey towards making a significant
            impact in our organization.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  className="form-input mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  {...register("companyName", { required: true })}
                  className="form-input mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="companyLogo"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Logo URL
                </label>
                <input
                  type="text"
                  {...register("companyLogo", { required: true })}
                  className="form-input mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="form-input mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="form-input mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  {...register("dateOfBirth", { required: true })}
                  className="form-input mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 w-full rounded-md shadow-sm hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    // <div
    //   style={{
    //     backgroundImage:
    //       "url('https://img.freepik.com/premium-vector/add-user-concept-illustration_86047-676.jpg?w=900')",
    //   }}
    //   className="hero min-h-screen bg-cover bg-center bg-no-repeat bg-base-200"
    // >
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-5xl font-bold">HR Manager Registration</h1>
    //       <p className="py-6">
    //         Welcome to the HR Manager Registration page. Join our team of
    //         dedicated professionals and lead with excellence. Complete the form
    //         below to get started on your journey towards making a significant
    //         impact in our organization.
    //       </p>
    //     </div>
    //     <div className="card h-[500px] shrink-0 w-full lg:max-w-[60%] shadow-2xl bg-base-100">
    //       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    //         <div className="flex gap-5 h-full items-center justify-between w-full ">
    //           <div className="w-full ">
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Full Name</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="full name"
    //                 {...register("fullName", { required: true })}
    //                 className="input w-full input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Company Name</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="company name"
    //                 {...register("companyName", { required: true })}
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Company Logo</span>
    //               </label>
    //               <input
    //                 type="text"
    //                 placeholder="logo URL"
    //                 {...register("companyLogo", { required: true })}
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //           </div>

    //           <div className="w-full ">
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Email</span>
    //               </label>
    //               <input
    //                 type="email"
    //                 placeholder="email"
    //                 {...register("email", { required: true })}
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Password</span>
    //               </label>
    //               <input
    //                 type="password"
    //                 placeholder="password"
    //                 {...register("password", { required: true })}
    //                 className="input input-bordered"
    //                 required
    //               />
    //             </div>
    //             <div className="form-control">
    //               <label className="label">
    //                 <span className="label-text">Date of birth</span>
    //               </label>
    //               <input
    //                 type="date"
    //                 {...register("dateOfBirth", { required: true })}
    //                 className="input input-bordered"
    //                 required
    //               />
    //               {/* <label className="label">
    //             <a href="#" className="label-text-alt link link-hover">
    //               Forgot password?
    //             </a>
    //           </label> */}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary">Sign Up</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default JoinAnHRManager;
