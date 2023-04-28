import React from "react";
import Logo from "../assets/logo_white.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#2F311B]">
      <div className="flex justify-between items-center py-4 px-6">
        <img src={Logo} alt="logo" />
        <div>
          <div className="flex flex-row space-x-14 px-6">
            <div className="text-white font-roboto text-[15px]">CHECK PLANT</div>
            <div className="text-white font-roboto text-[15px]">GET TO KNOW</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
