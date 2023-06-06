import React from "react";
import Picture1 from "../../assets/about_us_1.svg";
import Picture2 from "../../assets/about_us_2.svg";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[#2F311B] text-[40px] font-roboto font-semibold mt-7">
        About Us
      </div>
      <div className="grid grid-cols-2 items-center">
        <img src={Picture1} alt="Picture Plant" className="ml-32 scale-[0.8]" />
        <div className="flex flex-col justify-start">
          <div className="text-[#2F311B] text-[32px] font-roboto font-semibold">
            Check Plants
          </div>
          <div className="text-[#2F311B] text-[20px] font-roboto mr-48">
          Users can take a picture or upload images of diseased plants and 
          receive immediate feedback on the type of disease affecting the crops.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col ml-48">
          <div className="text-[#2F311B] text-[32px] font-roboto font-semibold h-full">
            Get To Know
          </div>
          <div className="text-[#2F311B] text-[20px] font-roboto ">
            A web app for plant disease identification through image processing that can 
            assists farmers and agricultural experts in identifying crop diseases quickly 
            and accurately. LeafLook uses machine learning algorithms and computer vision
            techniques to analyze the images and make accurate predictions.
          </div>
        </div>
        <img src={Picture2} alt="Picture Plant" className="mr-32 scale-[0.8]" />
      </div>
    </div>
  );
};

export default AboutUs;
