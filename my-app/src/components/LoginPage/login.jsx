import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../../App";

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    textChange: "Login",
  });

  const navigate = useNavigate();
  const { username, password, textChange } = formData;
  const handleInput = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    if (username && password) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .post("http://localhost:8081/auth/login/", formData)
        .then((res) => {
          console.log(res.data)
          if (!res.data.err) {
            toast.success(`Welcome ${res.data}!`);
            setTimeout(() => {
              navigate("/");
            }, 1000);
            setLoggedIn(true);
          } else {
            toast.error(res.data.err)
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      toast.error("Please fill all data");
    }
  };

  return (
    <div className="bg-bg_regis_login bg-cover bg-no-repeat bg-bottom min-h-[calc(100vh-160px)] overflow-x-hidden">
      <div className="mt-[93px] flex justify-center items-center">
        <ToastContainer />
        <form
          className="bg-white shadow-md rounded w-1/2 px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-[#2F311B] text-[24px] mb-6 flex justify-center">
            Login To Your Account
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
                className="shadow border rounded-lg w-full py-3.5 px-3 text-[16px] text-gray-700 leading-tight focus:outline-none"
                name="password"
                onChange={handleInput("password")}
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#868358] text-white text-[16px] px-20 py-2 rounded-md font-roboto hover:transform hover:scale-105 hover:rotate-4 transition-all duration-700"
            >
              Login
            </button>
          </div>
          <div className="flex item-center mt-4">
            <p className="mr-[4px] text-[16px]">Don't have an accout?</p>
            <Link to="/register" className="text-[16px] text-[#868358]">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
