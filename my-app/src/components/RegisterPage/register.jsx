import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    retype_password: "",
    textChange: "Register",
  });

  const navigate = useNavigate();
  const { username, password, retype_password, textChange } = formData;
  const handleInput = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      if (password === retype_password) {
        setFormData({ ...formData, textChange: "Submitting" });
        axios
          .post("http://localhost:8081/auth/register/", formData)
          .then((res) => {
            if (res.status >= 200 && res.status < 300) {
              toast.success(res.data);
              setTimeout(() => {
                navigate("/login")
              }, 1000);
            } else {
              toast.error(res.data);
            }
          })
          .catch((err) => console.log(err));
      } else {
        toast.error("Password not same");
      }
    } else {
      toast.error("Please fill all data");
    }
  };

  return (
    <div className="bg-bg_regis_login bg-cover bg-no-repeat bg-bottom min-h-[calc(100vh-160px)] overflow-x-hidden">
      <div className="mt-[50px] flex justify-center items-center">
        <ToastContainer />
        <form
          className="bg-white shadow-md rounded w-1/2 px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-[#2F311B] text-[24px] mb-6 flex justify-center">
            Create Your Account
          </div>
          <div>
            <div>
              <div className="text-[16px] text-[#808194]">Username</div>
              <input
                className="shadow border rounded-lg w-full py-3.5 px-3 text-[16px] text-gray-700 leading-tight focus:outline-none mb-4"
                name="username"
                onChange={handleInput("username")}
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <div className="text-[16px] text-[#808194]">Password</div>
              <input
                className="shadow border rounded-lg w-full py-3.5 px-3 text-[16px] text-gray-700 leading-tight focus:outline-none mb-4"
                name="password"
                onChange={handleInput("password")}
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <div className="text-[16px] text-[#808194]">Confirm Password</div>
              <input
                className="shadow border rounded-lg w-full py-3.5 px-3 text-[16px] text-gray-700 leading-tight focus:outline-none"
                name="retype_password"
                onChange={handleInput("retype_password")}
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
            <Link to="/login" className="text-[16px] text-[#868358]">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
