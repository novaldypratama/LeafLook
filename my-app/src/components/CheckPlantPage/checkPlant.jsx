import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const CheckPlant = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showedImage, setShowedImage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [confidence, setConfidence] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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

      const response = await fetch(
        "https://kelompok-alfath.azurewebsites.net/predict",
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data.predict);
      setPrediction(data.predict);
      setConfidence(data.confidence);
    }
  };

  // cek apakah selectedImage masuk
  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    let stream = null;

    const enableCamera = async () => {
      try {
        if (isCameraActive) {
          stream = await navigator.mediaDevices.getUserMedia({
            video: isCameraActive,
          });

          // Use the stream to set the video source
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } else {
          // Turn off camera
          if (videoRef.current) {
            videoRef.current.srcObject = null;
          }
        }
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };

    enableCamera();

    return () => {
      if (stream && stream.getTracks) {
        stream.getTracks().forEach((track) => {
          track.stop(); // Stop all tracks of the stream
        });
      }
    };
  }, [isCameraActive]);

  const handleTakeImageClick = async () => {
    setIsDeleted(false);
    try {
      if (isCameraActive) {
        // Stop the camera stream
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());

        setSelectedImage(tracks);
        setIsCameraActive(false);
      } else {
        // Start the camera stream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        // Update the video source and play it
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        setIsCameraActive(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleStopCamera = () => {
    setSelectedImage(null);
    setShowedImage(null);
    setIsCameraActive(false);
  };

  const handleCaptureImageClick = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set the canvas size to match the video frame
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw the video frame on the canvas
    context.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.videoWidth,
      videoRef.current.videoHeight
    );

    // Convert the canvas image to a data URL
    const dataUrl = canvas.toDataURL("image/png");

    // Set the captured image as the selected image
    // setSelectedImage(dataUrl);
    setShowedImage(dataUrl);
    setIsCameraActive(false);
  };

  const handleRemoveImageClick = () => {
    setSelectedImage(null);
    setShowedImage(null);
    setIsDeleted(true);
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
              <div className="flex flex-row items-center">
                <button
                  onClick={handleTakeImageClick}
                  className="bg-[#868358] text-white text-[18px] px-2 py-1 mt-4 mx-2 rounded-md font-roboto hover:transform hover:scale-105 hover:rotate-4 transition-all duration-700"
                >
                  Access Camera
                </button>
                <button
                  onClick={handleCaptureImageClick}
                  className="bg-[#868358] text-white text-[18px] px-2 py-1 mt-4 mx-2 rounded-md font-roboto hover:transform hover:scale-105 hover:rotate-4 transition-all duration-700"
                >
                  Take Picture
                </button>
                <button
                  onClick={handleStopCamera}
                  className="bg-[#868358] text-white text-[18px] px-2 py-1 mt-4 mx-2 rounded-md font-roboto hover:transform hover:scale-105 hover:rotate-4 transition-all duration-700"
                >
                  Stop Camera
                </button>
                <button
                  onClick={handleRemoveImageClick}
                  className="bg-[#868358] text-white text-[18px] px-2 py-1 mt-4 mx-2 rounded-md font-roboto hover:transform hover:scale-105 hover:rotate-4 transition-all duration-700"
                >
                  Remove Image
                </button>
              </div>
              <button
                onClick={handleFormSubmit}
                className="bg-[#868358] text-white text-[18px] px-10 py-1 mt-4 rounded-md font-roboto hover:transform hover:scale-105 hover:rotate-4 transition-all duration-700"
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
              className="flex flex-col justify-center items-center shadow-md rounded-md w-80% mx-auto w-[400px] h-[400px]"
            />
          ) : (
            <div className="h-64 flex items-center justify-center">
              <video
                ref={videoRef}
                className="bg-white flex flex-col w-full h-full items-center shadow-md rounded-md"
                autoPlay
              ></video>
            </div>
          )}

          {isCameraActive && isDeleted !== true && (
            <div className="relative h-full">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
              ></canvas>
            </div>
          )}

          {prediction !== null ? (
            <div className="flex flex-col items-center p-4 bg-white text-[#868358] text-[18px] px-10 py-1 mt-4 rounded-md shadow-md font-roboto">
              <h2 className="text-2xl font-bold mb-2">
                Prediction: {prediction}
              </h2>
              <h2 className="text-lg">Confidence: {confidence}%</h2>
            </div>
          ) : (
            <p className="p-4 bg-white text-[#868358] text-[18px] mt-4 mb-[px] items-center shadow-md rounded-md font-roboto">
              Prediksi belum dilakukan
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default CheckPlant;
