import React from "react";
import Disease1 from "../../assets/potato-early-blight.JPG";
import Disease2 from "../../assets/potato-late-blight.JPG";
import Disease3 from "../../assets/pepper-bell-bacterial-spot.JPG";
import Arrow from "../../assets/arrow.svg";

const PlantDisease = () => {
  //Dumy data
  const potato = Disease1
  const tomato1 = Disease2
  const tomato2 = Disease3

  const disease = [
    {
      title: "Potato Early Blight",
      photo: potato,
      description:
        "Penyakit yang disebabkan oleh patogen jamur Alternaria solani. Gejala yang dialami biasanya dimulai sebagai bintik-bintik kecil berwarna coklat tua pada daun bagian bawah tanaman. Bintik-bintik ini mungkin memiliki cincin konsentris.",
    },
    {
      title: "Potato Late Blight",
      photo: tomato1,
      description:
        "Penyakit yang disebabkan oleh patogen oomycete phytophthora infestans. Gejala yang dialami yakni menyerang dedaunan dan umbi tanaman kentang. Penyakit ini menyebabkan lesi gelap yang terendam air pada daun, yang dengan cepat meluas dan berubah warna menjadi cokelat.",
    },
    {
      title: "Pepper Bell Bacterial Spot",
      photo: tomato2,
      description:
        "Penyakit yang disebabkan oleh bakteri Xanthomonas campestris pv. vesicatoria. Penyakit ini memiliki gejala daun yang dimulai dengan bintik-bintik kecil. Bercak-bercak ini awalnya mungkin berwarna hijau tua dan berminyak, namun lama-kelamaan akan berubah menjadi coklat atau hitam.",
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
              <img className="w-full" src={el.photo} alt="plant disease" />
              <div className="flex flex-col items-center">
                <div className="mt-12 text-[22px] font-semibold text-[#2F311B]">
                  {el.title}
                </div>
                <div className="mt-6 mb-12 px-6 text-justify text-[16px] text-[#2F311B]">
                  {el.description}
                </div>
              </div>
              {/* <div className="flex item-center justify-end px-6 mb-6">
                <div className="text-[#45485F] text-[12px] pt-0.5 mr-2">
                  Learn More
                </div>
                <img src={Arrow} alt="arrow" />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlantDisease;
