import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGoogle,
} from "react-icons/fa";
import { setAuthToken } from "../../../API/Auth";

const SocialLogin = () => {
  const { user, logInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handlGoogleLogin = (event) => {
    event.preventDefault();

    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        setAuthToken(user);
        toast.success("Successfully Logged In");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Failed to Logged In");
      });
  };
  return (
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
  );
};

export default SocialLogin;
