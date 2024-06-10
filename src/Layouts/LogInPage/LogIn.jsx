import { Link, useNavigate } from "react-router-dom";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const LogIn = () => {
  const { userLogIn, googleLogIn } = useAuthProvider();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;

    userLogIn(email, password)
      .then(() => {
        // console.log(res);
        Swal.fire({
          title: "User LogIn!",
          text: "Welcome to our site!",
          icon: "success",
        });
        navigate("/");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login with google
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
          navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1717882217~exp=1717885817~hmac=256a9a42014c38669b160ffe9d8944a1b9e8f78db7d95cb67f82182b1a062a46&w=740')",
      }}
      className="hero bg-cover bg-no-repeat bg-center min-h-screen bg-base-200"
    >
      <div className="hero-content w-[90%] lg:w-[50%] flex-col lg:flex-row-reverse">
        
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full ">
            <div className="form-control w-full ">
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
            <div className="form-control mt-6">
              <button className="btn bg-black text-white ">Login</button>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGoogleLogIn} className="btn ">
                Google
              </button>
            </div>
            <div className="form-control mt-6">
              <Link to="/register" className="btn">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
