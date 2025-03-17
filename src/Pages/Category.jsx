import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Atoms/Navbar";
import ScrollNav from "../Components/Atoms/ScrollNav";

function Category() {
  const navigate = useNavigate();

  const category = [
    {
      name: "Water Closets",
      image:
        "https://media.istockphoto.com/id/1163155784/photo/toilet-bowl-on-white-background-copy-space-3d-illustration.jpg?s=612x612&w=0&k=20&c=K57zyZJ_gi1QfYqM5iyEk2a5i4aPYrPZMHjxrdgWbxE=",
      products: 65,
      path: "/water-closets",
    },
    {
      name: "Wash Basins",
      image:
        "https://ruheindia.com/cdn/shop/files/VIRGO_1_COMP.png?v=1728473033&width=640",
      products: 35,
      path: "/wash-basins",
    },
    {
      name: "Wall Hungs",
      image: "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=1100",
      products: 17,
      path: "/wall-hungs",
    },
    {
      name: "Combo packs",
      image: "https://m.media-amazon.com/images/I/718leFgoVTL.jpg",
      products: 26,
      path: "/combo-packs",
    },
    {
      name: "Bath Tubs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmC_RNPbuR7ec8EDcdKi_bD8NVx33bz2x8GByz30kwJ2Ras0cW3epcTcHg&s=100",
      products: 24,
      path: "/bath-tubs",
    },
    {
      name: "Urinals and Accessories",
      image: "https://www.cleanlink.com/resources/editorial/2019/24151-urinals.jpg",
      products: 32,
      path: "/urinals-accessories",
    },
  ];

  return (
    <div className="bg-[#f7f7fc] pb-14 w-full flex flex-col min-h-screen">
      <Navbar />
      <ScrollNav />
      <div className="flex pb-2 px-3 md:px-10 flex-col gap-2 lg:gap-7 lg:grid lg:grid-cols-2 lg:px-20 mt-2">
        {category.map((item, index) => (
          <div key={index} className="relative w-full h-full cursor-pointer" onClick={() => navigate(item.path)}>
            <img
              src={item.image}
              alt="Sanitary Ware"
              className="w-full h-32 rounded-2xl object-cover lg:h-40"
            />
            <div
              className={`absolute inset-0 flex flex-col justify-center p-8  bg-black bg-opacity-40 rounded-2xl ${
                index % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              <p className="text-xl font-bold text-gray-200">{item.name}</p>
              <span className="text-xs font-medium text-black">{item.products} Products</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;