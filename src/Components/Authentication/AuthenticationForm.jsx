import React from "react";

const AuthenticationForm = ({formName,children,details,setDetails}) => {
 
  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        {formName}
      </h2>
      <div className="relative mb-4">
        <label htmlFor="Email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="text"
          name="Email"
          className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="Password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type={details.showPassword ? "text" : "password"}
          name="password"
          className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => {
            setDetails({ ...details, password: e.target.value });
          }}
        />
      </div>
      <label htmlFor="showPassword" className="text-center">
        <input
          type="checkbox"
          name=""
          id=""
          className="mr-1 mb-3"
          placeholder="showPassword"
          onChange={() =>
            setDetails({ ...details, showPassword: !details.showPassword })
          }
          checked={details.showPassword}
        />
        Show password
      </label>

      {children}

      <p className="text-xs text-gray-500 mt-3 text-center">
        Welcome to Prabhandh best in className management and tracker app .
      </p>
      <p className="text-xs text-gray-500 mt-3 text-center">
        Already have a account?
      </p>
    </div>
  );
};

export{ AuthenticationForm};
