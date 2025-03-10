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
        "https://wgassets.duravit.cloud/photomanager-duravit/file/8a8a818d8017c1c201801808a0b600bd/small_bathrooms_ds.jpg?derivate=width~450",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHadrY6wxCicHGHD2dBccNs_8kRBDV2Q3L2uRXhGsbEBcnhDDWkJhoCuM&s=10",
      products: 26,
      path: "/combo-packs",
    },
    {
      name: "Bath Tubs",
      image: "https://images.stockcake.com/public/5/3/9/539115cc-352e-48c7-b202-b79ec400e7b7_large/elegant-vintage-bath-stockcake.jpg",
      products: 24,
      path: "/bath-tubs",
    },
    {
      name: "Urinals and Accessories",
      image: "https://static9.depositphotos.com/1561500/1189/i/450/depositphotos_11899664-stock-photo-toilet-in-dark-and-lightbeam.jpg",
      products: 32,
      path: "/urinals-accessories",
    },
  ];

  return (
    <div className="bg-[#f7f7fc] pb-14 w-full flex flex-col gap-4 min-h-screen">
      <Navbar />
      <ScrollNav />
      <div className="flex pb-2 px-3 md:px-10 flex-col gap-2 lg:gap-7 lg:grid lg:grid-cols-2 lg:px-20">
        {category.map((item, index) => (
          <div key={index} className="relative w-full h-full cursor-pointer" onClick={() => navigate(item.path)}>
            <img
              src={item.image}
              alt="Sanitary Ware"
              className="w-full h-32 rounded-2xl object-cover lg:h-40"
            />
            <div
              className={`absolute inset-0 flex flex-col justify-center p-8 ${
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