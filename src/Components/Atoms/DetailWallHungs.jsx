import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DetailWallHungs = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("White");

  const images = {
    White:
      "https://www.ivas.homes/images/products/sanitaryware/water-closets/wall-hung-closet/RONALDO-WHITE-IM10046961.webp",
    Black:
      "https://www.ivas.homes/images/products/sanitaryware/midnight-collection/midnight-glossy/francesca-glossy.webp",
    Mocha:
      "https://www.ivas.homes/images/products/sanitaryware/water-closets/wall-hung-closet/LORENZA-GLOSSY-IM10059925.webp",
    Grey: "https://www.ivas.homes/images/products/sanitaryware/water-closets/wall-hung-closet/LORENZA-GLOSSY-SHARK-GRAY-IM10037558.webp",
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
            className="material-symbols-outlined text-xl cursor-pointer fixed xl:top-6 left-4 top-4 md:left-8 xl:hidden"
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
            Ceramic Rimless {selectedColor} Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover
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
            This is a modern wall-hung toilet with a sleek, minimalist design. It features a smooth, seamless construction that enhances both aesthetics and hygiene by preventing dirt buildup. The wall-mounted design saves floor space, making it ideal for contemporary bathrooms, while the efficient flushing system ensures water conservation.
            </p>
          </div>
        </div>

        {/* Spacer to push content down */}
        <div className="mb-14"></div>
      </div>
    </div>
  );
};

export default DetailWallHungs;
