import React from "react";
import Disease1 from "../../assets/disease_1.svg";

const TeamMember = () => {
  //Dumy data
  const member = [
    {
      name: "Alfath Nuurlathif S",
      nim: "20/460538/TK/51127",
    },
    {
      name: "Alfath Nuurlathif S",
      nim: "20/460538/TK/51127",
    },
    {
      name: "Alfath Nuurlathif S",
      nim: "20/460538/TK/51127",
    },
  ];
  return (
    <div className="mb-12">
      <div className="text-[#2F311B] text-[40px] font-roboto font-semibold mt-12 mb-7 flex justify-center">
        Our Team
      </div>
      <div className="flex flex-row justify-between mx-48">
        {member.map((el, index) => {
          return (
            <div className="max-w-xs border-2 border-[#4A612B] rounded-3xl font-roboto">
              <img className="w-full" src={Disease1} alt="plant disease" />
              <div className="flex flex-col items-center">
                <div className="mt-12 text-[22px] font-semibold text-[#2F311B]">
                  {el.name}
                </div>
                <div className="mt-6 mb-12 px-6 text-justify text-[16px] text-[#2F311B]">
                  {el.nim}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMember;
