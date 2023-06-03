import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-bg_regis_login bg-cover bg-no-repeat bg-bottom min-h-[calc(100vh-160px)] overflow-x-hidden">
      <div className="mt-[50px] flex justify-center items-center">
        <form className="bg-white shadow-md rounded w-1/2 px-8 pt-6 pb-8 mb-4">
          <div className="font-bold text-[#2F311B] text-[24px] mb-6 flex justify-center">
            Create Your Account
          </div>
          <div>
            <div>
              <div className="text-[16px] text-[#808194]">Username</div>
              <input
                className="shadow border rounded-lg w-full py-3.5 px-3 text-[16px] text-gray-700 leading-tight focus:outline-none mb-4"
                id="name"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <div className="text-[16px] text-[#808194]">Password</div>
              <input
                className="shadow border rounded-lg w-full py-3.5 px-3 text-[16px] text-gray-700 leading-tight focus:outline-none mb-4"
                id="name"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <div className="text-[16px] text-[#808194]">Confirm Password</div>
              <input
                className="shadow border rounded-lg w-full py-3.5 px-3 text-[16px] text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-[#868358] text-white text-[16px] px-20 py-2 rounded-md font-roboto">
              Register
            </button>
          </div>
          <div className="flex item-center mt-4">
            <p className="mr-[4px] text-[16px]">Already have an accout?</p>
            <Link to="/login" className="text-[16px] text-[#868358]">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
