import React from "react";
import Alfath from "../../assets/Alfath.jpg";
import Valdy from "../../assets/Valdy.jpg";
import Laili from "../../assets/Laili.jpg";

const TeamMember = () => {
  //Dumy data
  const member1 = Valdy
  const member2 = Alfath
  const member3 = Laili

  const member = [
    {
      name: "M. Novaldy Pratama H.", 
      photo: member1,
      nim: "20/463606/TK/51598",
    },
    {
      name: "Alfath Nuurlathif S",
      photo: member2,
      nim: "20/460538/TK/51127",
    },
    {
      name: "Laili Rofi'ah",
      photo: member3,
      nim: "20/463604/TK/51596",
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
              <img className="w-max-12 rounded-3xl" src={el.photo} alt="member picture" />
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
