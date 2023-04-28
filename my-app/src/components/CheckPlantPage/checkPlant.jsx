import React from "react";
import BgCheckPlant from "../../assets/bg_check_plant.svg";
import Logo from "../../assets/logo_brown.svg";

const CheckPlant = () => {
  return (
    <div className="bg-bg_check_plant bg-cover bg-no-repeat bg-center min-h-[calc(100vh-160px)] overflow-x-hidden">
      <div className="flex justify-center">
        <img src={Logo} alt="logo" className="scale-[0.6]" />
      </div>
      <div className="flex flex-col items-center w-1/2 pt-20">
        <div className="text-[#2F311B] text-[40px] font-roboto font-medium">
          Check Your Plant Here
        </div>
        <div>
          <button className="bg-[#868358] text-white text-[18px] px-14 py-2 mt-4 mr-16 rounded-md font-roboto">
            Upload Image
          </button>
          <button className="bg-[#868358] text-white text-[18px] px-14 py-2 mt-4 rounded-md font-roboto">
            Take Picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckPlant;
