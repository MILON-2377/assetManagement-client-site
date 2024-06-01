import { useForm } from "react-hook-form";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import usePublicApi from "../../Hooks/PublicApi/usePublicApi";
import Swal from "sweetalert2";

const JoinAnEmployee = () => {
  const { register, handleSubmit } = useForm();
  const { userRegister, user, googleLogIn } = useAuthProvider();
  const employeeAxios = usePublicApi();

  //   console.log(user);

  const onSubmit = (data) => {
    // console.log(data);
    const { email, password, dateOfBirth, fullName } = data;
    const employeeData = { fullName, email, dateOfBirth };

    userRegister(email, password)
      .then((res) => {
        // console.log(res);
        employeeAxios
          .post("/employees", employeeData)
          .then((res) => {
            // console.log(res.u);
            Swal.fire({
              title: "Register!",
              text: "Your account register succssfully!",
              icon: "success",
            });
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
        const employeeData = { fullName, email };

        employeeAxios
          .post("/employees", employeeData)
          .then(() => {
            // console.log(res.u);
            Swal.fire({
              title: "Register!",
              text: "Your account register succssfully!",
              icon: "success",
            });
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
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
