import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import handleUserRegisterData from "../../Hooks/UsersRegister/userRegisterData";
import useUserRegister from "../../Hooks/UsersRegister/useUserRegister";
import { useNavigate } from "react-router-dom";

const JoinAnHRManager = () => {
  const { register, handleSubmit, reset } = useForm();
  const { userRegister } = useAuthProvider();
  const registerUser = useUserRegister();
  const navigate = useNavigate();

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

    userRegister(email, password)
      .then(() => {
        handleUserRegisterData(userData);
        registerUser()
          .then((res) => {
            // console.log(res);
            if (res.acknowledged) {
              navigate("/packagesCard");
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
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/add-user-concept-illustration_86047-676.jpg?w=900')",
      }}
      className="hero min-h-screen bg-cover bg-center bg-no-repeat bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">HR Manager Registration</h1>
          <p className="py-6">
            Welcome to the HR Manager Registration page. Join our team of
            dedicated professionals and lead with excellence. Complete the form
            below to get started on your journey towards making a significant
            impact in our organization.
          </p>
        </div>
        <div className="card h-[500px] shrink-0 w-full lg:max-w-[60%] shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex gap-5 h-full items-center justify-between w-full ">
              <div className="w-full ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    {...register("fullName", { required: true })}
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="company name"
                    {...register("companyName", { required: true })}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company Logo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="logo URL"
                    {...register("companyLogo", { required: true })}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="w-full ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    {...register("password", { required: true })}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date of birth</span>
                  </label>
                  <input
                    type="date"
                    {...register("dateOfBirth", { required: true })}
                    className="input input-bordered"
                    required
                  />
                  {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinAnHRManager;
