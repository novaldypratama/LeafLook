import React from "react";
import Picture from "../../assets/get_to_know.svg";

const GetToKnow = () => {
  return (
    <div className="text-[#2F311B] font-roboto min-h-[100vh-80px] overflow-x-hidden">
      <img className="w-screen" src={Picture} alt="picture" />
      <div className="flex justify-center text-[36px] font-semibold mt-4 mb-6">
        Get To Know
      </div>
      <div className="px-16 mb-10">
        <div className="text-[28px] font-semibold">Disease A</div>
        <div className="text-[20px]">
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
