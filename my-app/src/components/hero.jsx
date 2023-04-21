import React from "react";
import Logo from "../assets/logo_brown.svg"

const Hero = () => {
    return  (
        <div className="bg-home bg-cover bg-no-repeat bg-center min-h-[calc(100vh-80px)] overflow-x-hidden">
            <div className="flex flex-col justify-center items-center">
                <img src={Logo} alt="logo" className="scale-[0.6]"/>
                <div className="text-[#2F311B] text-[30px]">
                Check Your Plant Disease For Free
                </div>
                <button className="bg-[#868358] text-white px-14 py-2 mt-4 rounded-md">
                    Click Here
                </button>
            </div>
        </div>
    );
};

export default Hero;