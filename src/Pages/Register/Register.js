import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import register from "../../assets/images/login/login.svg";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGoogle,
} from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, logInWithGoogle } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        setErrorMessage("");
        handleUpdateProfile(name);
        toast.success("Successfully Create Account");
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

  const handlGoogleLogin = (event) => {
    event.preventDefault();

    logInWithGoogle()
      .then(() => {
        setErrorMessage("");
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error("Failed to Logged In");
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
            <div className="flex justify-center items-center my-1">
              <FaFacebookSquare className="text-3xl text-slate-600 mx-1"></FaFacebookSquare>
              <FaLinkedin className="text-3xl text-slate-600 mx-1"></FaLinkedin>
              <FaGithubSquare className="text-3xl text-slate-600 mx-1"></FaGithubSquare>
              <button>
                <FaGoogle
                  className="bg-slate-600 text-white p-1 rounded mx-1"
                  onClick={handlGoogleLogin}
                  style={{ fontSize: "26px" }}
                ></FaGoogle>
              </button>
            </div>
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
