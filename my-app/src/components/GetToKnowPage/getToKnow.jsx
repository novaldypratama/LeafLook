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
          A web app for plant disease identification through image processing is 
          an innovative solution that can assist farmers and agricultural experts 
          in identifying crop diseases quickly and accurately. LeafLook uses machine 
          learning algorithms and computer vision techniques to analyze the images and 
          make accurate predictions. Users can take a picture or upload images of diseased 
          plants and receive immediate feedback on the type of disease affecting the crops.
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
