import React, { useEffect, useState } from "react";
import axios from "axios";

const CheckPlant = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showedImage, setShowedImage] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setShowedImage(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });
      console.log(response)
      const data = await response.json();
      console.log(data.predict)
      setPrediction(data.predict);
      setConfidence(data.confidence)
    }
 };

  return (
    <div className="bg-bg_check_plant bg-cover bg-no-repeat bg-center min-h-[calc(100vh-160px)] overflow-x-hidden">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center h-[calc(100vh-160px)]">
          <div>
            <div className="flex flex-col items-center mb-4">
              <label
                htmlFor="fileInput"
                className="text-[#868358] font-bold block mb-2 text-[22px] font-roboto"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileInputChange}
                className="border p-2"
              />
              <button
                onClick={handleFormSubmit}
                className="bg-[#868358] text-white text-[18px] px-10 py-1 mt-4 rounded-md font-roboto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {showedImage !== null ? (
            <img
              src={showedImage}
              alt="Selected"
              className="w-80% mx-auto"
            />
          ) : (
            <div className="bg-gray-200 h-64 w-64 flex items-center justify-center">
              No image selected
            </div>
          )}
          {prediction !== null ? (
            <div className="flex flex-col">
              <h2>Prediction: {prediction}</h2>
              <h2>Confidence: {confidence}%</h2>
            </div>
          ) : (
            <p>prediksi belum dilakukan</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default CheckPlant;
