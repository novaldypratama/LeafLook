import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_white.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#2F311B]">
      <div className="flex justify-between items-center py-4 px-6">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div>
          <div className="flex flex-row space-x-14 px-6">
            <Link to="/check-plant-page">
              <button className="text-white font-roboto text-[15px]">CHECK PLANT</button>
            </Link>
            <Link to="/">
              <button className="text-white font-roboto text-[15px]">MY PLANT</button>
            </Link>
            <Link to="/register">
              <button className="text-white font-roboto text-[15px] border-solid rounded-md px-2 border-2 border-white">REGISTER</button>
            </Link>
            <Link to="/login">
              <button className="bg-white text-[#2F311B] rounded-md px-4 font-roboto text-[15px]">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
