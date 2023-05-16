import React from "react";
import Disease2 from "../../assets/disease_2.svg";
import Logo from "../../assets/logo_brown.svg";

const Result = () => {
  return (
    <div className="bg-bg_result bg-cover bg-no-repeat bg-center min-h-[calc(100vh-160px)] overflow-x-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="font-roboto text-[#2F311B] text-[40px] mt-4">Your Result</div>
        <img src={Logo} alt="logo" className="scale-[0.6]" />
        <div className="mt-4">
          <button className="bg-[#868358] text-white text-[18px] px-14 py-2 mr-16 rounded-md font-roboto">
            Identification
          </button>
          <button className="bg-[#868358] text-white text-[18px] px-14 py-2 rounded-md font-roboto">
            Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
