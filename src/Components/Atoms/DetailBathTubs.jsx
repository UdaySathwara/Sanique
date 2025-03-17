import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DetailBathTubs = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("White");

  const images = {
    White:
      "https://files.oaiusercontent.com/file-BgtYibtXSQZzdRkcL78V6J?se=2025-03-17T05%3A53%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3863d828-9fec-4c4b-8135-692291635242.webp&sig=IoPfLdvlBhR%2BZwp%2Bo16JvtogyCdB9DC3ghW75AlIuY4%3D",
    Black:
      "https://files.oaiusercontent.com/file-L6VNRZfWPTj3ftNLhE3btj?se=2025-03-17T06%3A23%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7f0cf2b2-9b20-4fe0-b11d-bba96022d98a.webp&sig=0An4V/fKUVhzfkHhks9B3jImEYBmX1ZIjgDr4WzDDP8%3D",
    Mocha:
      "https://files.oaiusercontent.com/file-6BXkoTdwgeA1zcC4S4u89P?se=2025-03-17T05%3A52%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D412f7510-447b-4a7a-b872-d0543b77407e.webp&sig=egltMcGvHj3fm2VHyWzG2bMmwmp5O1lF1iSGvfGxSzU%3D",
    Grey: "https://files.oaiusercontent.com/file-LTNRpN8wV6tFrvBKZUHJDE?se=2025-03-17T05%3A52%3A50Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9d518853-d3ee-4e6b-a06f-3289a33ea2c4.webp&sig=vUpSScJSEQriSD8Ln720ZMo/5PjdJ0TohXQ9/gUePZs%3D",
  };

  return (
    <div className="bg-[#f7f7fc] flex justify-center items-center">
      <div className="relative w-full min-h-screen flex flex-col lg:w-1/2">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center h-2/3 md:h-4/5 lg:h-4/5 w-full"
          style={{ backgroundImage: `url(${images[selectedColor]})` }}
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Top Section with Back Button and Title */}
        <div className=" flex items-center text-black z-10 justify-center pt-4">
          <span
            className="material-symbols-outlined text-xl cursor-pointer fixed top-4 left-4"
            onClick={() => navigate(-1)}
          >
            arrow_back_ios
          </span>
          <h2 className="text-xl font-semibold text-center flex-1">Product Details</h2>
        </div>

        {/* Spacer to push content down */}
        <div className="flex-grow"></div>

        {/* Product Details Card Fixed at Bottom */}
        <div className="relative w-full bg-[#f7f7fc] p-4 rounded-t-lg z-10">
          <div className="mt-2">
            <h3 className="text-lg font-medium text-gray-700">
            Modern Freestanding Acrylic Bathtub - {selectedColor}
            </h3>
            <div className="flex items-center text-yellow-500">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
              <span className="text-gray-500 ml-2">(109 Reviews)</span>
            </div>
          </div>

          <div className="mt-2">
            <h4 className="text-md font-medium text-gray-700">Color</h4>
            <div className="flex space-x-4 mt-2">
              <div className="flex space-x-2">
                <div
                  className={`w-6 h-6 rounded-full cursor-pointer ${
                    selectedColor === "White" ? "ring-2 ring-gray-500" : ""
                  }`}
                  style={{ backgroundColor: "White", border: "1px solid gray" }}
                  onClick={() => setSelectedColor("White")}
                ></div>
              </div>
              <div
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  selectedColor === "Black" ? "ring-2 ring-gray-500" : ""
                }`}
                style={{ backgroundColor: "Black" }}
                onClick={() => setSelectedColor("Black")}
              ></div>

              <div
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  selectedColor === "Mocha" ? "ring-2 ring-gray-500" : ""
                }`}
                style={{ backgroundColor: "#C19A6B", border: "1px solid gray" }}
                onClick={() => setSelectedColor("Mocha")}
              ></div>

              <div
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  selectedColor === "Grey" ? "ring-2 ring-gray-500" : ""
                }`}
                style={{ backgroundColor: "Grey" }}
                onClick={() => setSelectedColor("Grey")}
              ></div>
            </div>
          </div>

          <div className="mt-2">
            <h4 className="text-md font-medium text-gray-700">Description</h4>
            <p className="text-gray-600 mt-2 text-sm lg:text-base">
            Transform your bathroom into a sanctuary of relaxation with our Premium Bathtub Collection. Designed for elegance and comfort, our bathtubs feature sleek, freestanding designs with high-quality finishes in White, Black, Mocha, and Shark Grey. Crafted with durable, easy-to-clean surfaces, these bathtubs provide superior aesthetics and long-lasting performance.
            </p>
          </div>
        </div>
        <div className="mb-14"></div>
      </div>
    </div>
  );
};

export default DetailBathTubs
