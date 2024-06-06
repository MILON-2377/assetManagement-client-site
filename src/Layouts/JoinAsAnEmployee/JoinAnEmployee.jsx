import { useForm } from "react-hook-form";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import handleUserRegisterData from "../../Hooks/UsersRegister/userRegisterData";
import useUserRegister from "../../Hooks/UsersRegister/useUserRegister";
import Swal from "sweetalert2";

const JoinAnEmployee = () => {
  const { register, handleSubmit } = useForm();
  const { userRegister, googleLogIn } = useAuthProvider();
  const registerUser = useUserRegister();

  const Manager = false;
  const Affiliated = "not affiliated";
  const memberType = "Normal employee";
  const companyName = "";
  const companyLogoImage = "";

  //   console.log(user);

  const onSubmit = (data) => {
    const { email, password, dateOfBirth, fullName } = data;
    const usersData = {
      fullName,
      email,
      dateOfBirth,
      Manager,
      Affiliated,
      memberType,
      companyName,
      companyLogoImage,
    };

    userRegister(email, password)
      .then(() => {
        // console.log(res);
        handleUserRegisterData(usersData);
        registerUser()
          .then((res) => {
            // console.log(res);
            if (res.acknowledged) {
              Swal.fire({
                title: `Hello ${fullName}!`,
                text: "Welcome to our asset managemanet webiste!",
                icon: "success",
              });
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

  //  user sign Up with google
  const googleSignUp = () => {
    googleLogIn()
      .then((res) => {
        const fullName = res.user.displayName;
        const email = res.user.email;

        const usersRegisterData = {
          fullName,
          email,
          Manager,
          Affiliated,
          memberType,
          companyName,
          companyLogoImage,
        };

        // user data store the another js hook
        handleUserRegisterData(usersRegisterData);

        // user register to use hook
        registerUser()
          .then((res) => {
            // console.log(res);
            if (res.acknowledged) {
              Swal.fire({
                title: `Hello ${fullName}!`,
                text: "Welcome to our asset managemanet webiste!",
                icon: "success",
              });
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                {...register("fullName", { required: true })}
                className="input input-bordered"
                required
              />
            </div>

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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="form-control mt-6">
            <button onClick={googleSignUp} className="btn btn-primary">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinAnEmployee;
