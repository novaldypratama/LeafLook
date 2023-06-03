import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_brown.svg";

const Hero = () => {
  return (
    <div className="bg-home bg-cover bg-no-repeat bg-center min-h-[calc(100vh-80px)] overflow-x-hidden">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="logo" className="scale-[0.6]" />
        <div className="text-[#2F311B] text-[30px] font-roboto font-medium">
          Check Your Plant Disease For Free
        </div>
        <Link to="/check-plant-page">
          <button className="bg-[#868358] text-white text-[14px] px-14 py-2 mt-4 rounded-md font-roboto">
            Click Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;