import React from "react";
import Disease1 from "../../assets/disease_1.svg";
import Arrow from "../../assets/arrow.svg";

const PlantDisease = () => {
  //Dumy data
  const disease = [
    {
      title: "Disease A",
      description:
        "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Disease B",
      description:
        "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Disease C",
      description:
        "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];

  return (
    <div>
      <div className="text-[#2F311B] text-[40px] font-roboto font-semibold mt-12 mb-7 flex justify-center">
        Plant Disease
      </div>
      <div className="flex flex-row justify-between mx-48">
        {disease.map((el, index) => {
          return (
            <div className="max-w-xs border-2 border-[#4A612B] rounded-3xl font-roboto">
              <img className="w-full" src={Disease1} alt="plant disease" />
              <div className="flex flex-col items-center">
                <div className="mt-12 text-[22px] font-semibold text-[#2F311B]">
                  {el.title}
                </div>
                <div className="mt-6 mb-12 px-6 text-justify text-[16px] text-[#2F311B]">
                  {el.description}
                </div>
              </div>
              <div className="flex item-center justify-end px-6 mb-6">
                <div className="text-[#45485F] text-[12px] pt-0.5 mr-2">
                  Learn More
                </div>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlantDisease;
