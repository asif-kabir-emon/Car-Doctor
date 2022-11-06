import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import register from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { setAuthToken } from "../../API/Auth";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useTitle("Register");
  const handleRegister = (event) => {
    event.preventDefault();
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setErrorMessage("");
        handleUpdateProfile(name);
        const user = result.user;
        setAuthToken(user);
        toast.success("Successfully Create Account");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error("Failed to Create Account");
      });
  };

  const handleUpdateProfile = (name) => {
    updateUserProfile({ displayName: name })
      .then(() => {
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid md:grid-cols-2 gap-10">
        <div className="text-center lg:text-left">
          <img src={register} className="w-3/4" alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-full ">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <p className="text-sm text-center text-red-600 my-2">
              {errorMessage}
            </p>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
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
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-0 bg-red-500 hover:bg-red-700 normal-case"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mt-3">Or Sign Up with</p>
            <SocialLogin></SocialLogin>
            <p className="text-center">
              Already have an account?
              <Link to="/login" className="text-red-500 ml-1">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
