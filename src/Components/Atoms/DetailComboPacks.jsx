import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DetailComboPacks = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("White");

  const images = {
    White:
      "https://files.oaiusercontent.com/file-8zppvZuPVzFFAow2Daj4VN?se=2025-03-17T05%3A55%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D910123dc-bb08-42ca-8510-ce73e3ec446b.webp&sig=PeakNxp50h5K4pMgOkEryfdoJUEnYUg5qkuDKNCf15k%3D",
    Black:
      "https://files.oaiusercontent.com/file-KRzEKDJDJjqHrih3ZVVeUu?se=2025-03-17T05%3A55%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D75570ad7-3ce8-43ad-9b2d-2a51c3a93675.webp&sig=o%2Bv5EpT73B1yiwNrFnzg8kfFv61dUIAQ6H9/4nS1N/k%3D",
    Mocha:
      "https://files.oaiusercontent.com/file-M7Fz5p43rTvPiMau12sSLd?se=2025-03-17T05%3A56%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc5c42369-1cdb-4b1d-8e98-c09ffe104888.webp&sig=W8k9LFauEtE4vrQuior6P8NemVeVhTDbAchsitpMWgY%3D",
    Grey: "https://files.oaiusercontent.com/file-7NspTGu2UhpFp3F8zBegWc?se=2025-03-17T05%3A56%3A16Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D976a5cbd-3eb4-4f98-983d-359e7039b992.webp&sig=reZ0oH5gKo3hEGmAlQUO9QuA5szHUfoilVnSH/oEcf0%3D",
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
            {selectedColor} Modern Bathtub Ideas for Your Bathroom
            </h3>
            <div className="flex items-center text-yellow-500">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
              <span className="text-gray-500 ml-2">(96 Reviews)</span>
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
            Upgrade your bathroom with our Premium Sanitary Combo Pack, designed for modern convenience and superior hygiene. This all-in-one set includes essential fixtures such as a sleek wall-hung toilet, a high-efficiency flushing system, a stylish basin, and durable fittings. Crafted with seamless, easy-to-clean surfaces, these components enhance both aesthetics and functionality.
            </p>
          </div>
        </div>
        <div className="mb-14"></div>
      </div>
    </div>
  );
};

export default DetailComboPacks;
