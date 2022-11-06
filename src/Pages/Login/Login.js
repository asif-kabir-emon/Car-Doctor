import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import login from "../../assets/images/login/login.svg";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { logInWithEP } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useTitle("Login");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEP(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        setErrorMessage("");
        fetch(`https://genius-car-server-beige.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            toast.success("Successfully Logged In");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error("Failed to Logged In");
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid md:grid-cols-2 gap-10">
        <div className="text-center lg:text-left">
          <img src={login} className="w-3/4" alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-full ">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <p className="text-sm text-center text-red-600 my-2">
              {errorMessage}
            </p>
            <form onSubmit={handleLogin}>
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
                  value="Sign In"
                />
              </div>
            </form>
            <p className="text-center mt-4">Or Sign Up with</p>
            <SocialLogin></SocialLogin>
            <p className="text-center">
              Don't have an account?
              <Link to="/register" className="text-red-600 ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
