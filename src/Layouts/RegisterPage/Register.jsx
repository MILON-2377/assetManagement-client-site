import { useForm } from "react-hook-form";
import useAuthProvider from "../../Hooks/AuthProviderHooks/useAuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {

    const {userRegister} = useAuthProvider();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        
        const {email, password} = data;

        userRegister(email, password)
        .then(res => {
            console.log(res);
            Swal.fire({
                title: "Register!",
                text: "Your account register succssfully!",
                icon: "success"
              });
        })
        .catch(error => {
            console.log(error);
        })
    }

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
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="first name"
                {...register("firstName", {required: true})}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="last name"
                {...register("lastName", {required: true})}
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
                {...register("email", {required: true})}
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
                {...register("password", {required: true})}
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
               <Link to='/login' className="btn  ">LogIn</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
