import React from "react";
import Disease from "../../assets/disease_2.svg";
import Arrow from "../../assets/arrow.svg";

const DiseaseCard = () => {
  return (
    <div>
      <div className="flex items-center border-2 border-[#4A612B] rounded-xl mx-12 mt-8">
        <img className="object-cover h-80 rounded-xl" src={Disease} alt="" />
        <div className="flex flex-col justify-between px-8 text-[#2F311B] font-roboto">
          <div className="font-semibold text-[54px] mb-1">x%</div>
          <div className="font-semibold text-[32px] mb-2">Disease A</div>
          <div className="text-[20px] mb-2">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </div>
          <div className="flex item-center justify-end px-6">
            <div className="text-[#45485F] text-[20px] pt-0.5 mr-2">
              Learn More
            </div>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>

      <div className="flex items-center border-2 border-[#4A612B] rounded-xl mx-12 mt-8">
        <img className="object-cover h-80 rounded-xl" src={Disease} alt="" />
        <div className="flex flex-col justify-between px-8 text-[#2F311B] font-roboto">
          <div className="font-semibold text-[54px] mb-1">x%</div>
          <div className="font-semibold text-[32px] mb-2">Disease A</div>
          <div className="text-[20px] mb-2">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </div>
          <div className="flex item-center justify-end px-6">
            <div className="text-[#45485F] text-[20px] pt-0.5 mr-2">
              Learn More
            </div>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>

      <div className="flex items-center border-2 border-[#4A612B] rounded-xl mx-12 my-8">
        <img className="object-cover h-80 rounded-xl" src={Disease} alt="" />
        <div className="flex flex-col justify-between px-8 text-[#2F311B] font-roboto">
          <div className="font-semibold text-[54px] mb-1">x%</div>
          <div className="font-semibold text-[32px] mb-2">Disease A</div>
          <div className="text-[20px] mb-2">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </div>
          <div className="flex item-center justify-end px-6">
            <div className="text-[#45485F] text-[20px] pt-0.5 mr-2">
              Learn More
            </div>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseCard;
