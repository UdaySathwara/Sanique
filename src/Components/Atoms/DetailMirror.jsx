import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BlueImg from "../../assets/BlueLedMirror.png";

const DetailMirror = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("White");

  const images = {
    White:
      "https://www.elitebathroomware.co.nz/cdn/shop/products/IMG_0627FOcopy.jpg?v=1741719781",
    Blue:
      BlueImg,
    Pink:
      "https://ledmirror.in/wp-content/uploads/2021/06/Hccad1571d681477595fa045068762bd1O.jpg",
    Gold: "https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lsnwexdu0crx42_tn",
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
            Smart LED Mirror with Anti-Fog Feature - {selectedColor}
            </h3>
            <div className="flex items-center text-yellow-500">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
              <span className="text-gray-500 ml-2">(69 Reviews)</span>
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
                  selectedColor === "Blue" ? "ring-2 ring-gray-500" : ""
                }`}
                style={{ backgroundColor: "Blue" }}
                onClick={() => setSelectedColor("Blue")}
              ></div>

              <div
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  selectedColor === "Pink" ? "ring-2 ring-gray-500" : ""
                }`}
                style={{ backgroundColor: "Pink", border: "1px solid gray" }}
                onClick={() => setSelectedColor("Pink")}
              ></div>

              <div
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  selectedColor === "Gold" ? "ring-2 ring-gray-500" : ""
                }`}
                style={{ backgroundColor: "Gold" }}
                onClick={() => setSelectedColor("Gold")}
              ></div>
            </div>
          </div>

          <div className="mt-2">
            <h4 className="text-md font-medium text-gray-700">Description</h4>
            <p className="text-gray-600 mt-2 text-sm lg:text-base">
            Enhance your bathroom with our Premium LED Mirror Collection. Designed for both style and functionality, our LED mirrors feature sleek, modern designs with high-quality finishes in White, Black, Pink, and Gold. Crafted with durable, easy-to-clean materials, these mirrors provide superior illumination, elegant aesthetics, and long-lasting performance.
            </p>
          </div>
        </div>
        <div className="mb-14"></div>
      </div>
    </div>
  );
};

export default DetailMirror;
