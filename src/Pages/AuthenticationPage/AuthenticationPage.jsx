import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthenticationForm } from "../../Components/Authentication/AuthenticationForm";
import { signUp, logIn } from "./../../Redux/Reducers-Redux/authSlice";
const AuthenticationPage = () => {
  
  const [details, setDetails] = useState({
    email: "",
    password: "",
    showPassword: false,
    isSignupForm: false
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(logIn(details));
    navigate("/")
  }

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(signUp(details));
    navigate("/")
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Why to register on Prabhandh?
          </h1>
          <p className="leading-relaxed mt-4">
            Business solution which helps you manage your machines and helps you
            keep your machines occupied .So you can generate the best ROI on
            your business.
          </p>
        </div>

        {details.isSignupForm && (
          <AuthenticationForm
            formName={"Sign-Up"}
            details={details}
            setDetails={setDetails}
          >

            <button
              className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={signupHandler}
            >
              Sign-Up
            </button>
          </AuthenticationForm>
        )}
        {!details.isSignupForm && (
          <AuthenticationForm
            formName={"Log-In"}
            details={details}
            setDetails={setDetails}
          >
            <button
              className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={loginHandler}
            >
              Login
            </button>
          </AuthenticationForm>
        )}
      </div>

    </section>
  );
};

export default AuthenticationPage;
