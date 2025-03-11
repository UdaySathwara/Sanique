import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Atoms/Navbar";

function Products() {
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
      image: "https://www.inart.co.in/cdn/shop/files/4-fotor-2024012012735.png?v=1708513953&width=493",
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
      name: "Accessories",
      image: "https://www.queobathrooms.com/QueoBathroomImages/BlogImage/a-comprehensive-guide-to-washbasin-sizes.jpg",
      products: 32,
      path: "/urinals-accessories",
    },
  ];

  return (
    <div className="bg-[#f7f7fc] pb-14 w-full flex flex-col gap-4 min-h-screen">
        <Navbar />
      <div>
        <h1 className="text-2xl font-medium text-center pb-2 lg:text-3xl">Products</h1>
      </div>
      <div className="flex pb-2 px-3 md:px-10 flex-col gap-2 lg:gap-7 lg:grid lg:grid-cols-2 lg:px-20">
        {category.map((item, index) => (
          <div key={index} className="relative w-full h-full cursor-pointer" onClick={() => navigate(item.path)}>
            <img
              src={item.image}
              alt="Sanitary Ware"
              className="w-full h-52 rounded-2xl object-cover lg:h-40"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-4 items-center bg-black bg-opacity-30 rounded-2xl text-black">
              <p className="text-xl font-bold ">{item.name}</p>
              <span className="text-xs font-medium ">{item.products} Products</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;