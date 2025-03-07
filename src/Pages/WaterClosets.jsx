import React from "react";
import CategorySearch from "../Components/Atoms/CategorySearch";
import FavoriteIcon from "../Components/Atoms/FavoriteIcon";

function WaterClosets() {
  const products = [
    {
      id: 1,
      name: "Ceramic Floor-Mounted European Water Closet with Soft Close Hydraulic Seat Cover and Flush Tank, White One Piece",
      price: "₹ 7,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/close_4_4e299bd6-d8eb-4531-92db-036bf5103001.png?v=1729687653&width=493",
    },
    {
      id: 2,
      name: "Ceramic One Piece Western Toilet Commode - European Commode Water Closet With Soft Close Seat Cover ",
      price: "₹ 11,760.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/61In0Kiq2UL._SL1500_37e9eb02-cc1a-4883-a6c8-7e73421f7504.jpg?v=1737609741&width=493",
    },
    {
      id: 3,
      name: "Ceramic P-Trap Floor Mounted European Water Closet | Contemporary Western Toilet | 67x37x74 cm | White OPT050",
      price: "₹ 6,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/01_-_Copy_8a5e7916-d35d-4382-98c4-ca7fbab2dea0.jpg?v=1727180267&width=493",
    },
    {
      id: 4,
      name: "Ceramic One Piece Western Toilet Commode - European Commode Water Closet With Soft Close Seat Cover",
      price: "₹ 11,750.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/S9e1a3fa44595422dbb5e7ddc7b0afa36o.jpg_960x960_97e2d6a5-abca-412c-ba32-8b8d072a67de.webp?v=1722490383&width=493",
    },
    {
      id: 5,
      name: "Premium Water Closet - Western Commode with Durable Seat, Ideal WC for Modern Bathrooms",
      price: "₹ 14,299.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/71tIgHNUPSL.jpg?v=1704092471&width=493",
    },
    {
      id: 6,
      name: "Western Floor Mounted One Piece Water Closet Ceramic Western Toilet Commode",
      price: "₹ 6,970.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51z46y8zQaL._SL1256.jpg?v=1665142207&width=493",
    },
    {
      id: 7,
      name: "Western Floor Mounted One Piece Water Closet Ceramic Western Toilet Commode European Toilets P-Trap OPT028",
      price: "₹ 7,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/untitled_41bc96d5-6936-46c3-acdd-676ccce04e43.png?v=1728972697&width=493",
    },
    {
      id: 8,
      name: "Western Floor Mounted One Piece Water Closet Ceramic Western Toilet Commode European Toilets P-Trap OPT043",
      price: "₹ 8,499.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/01-Copy_cccf1572-562a-4729-822d-f4e07f1fbc9e.jpg?v=1727179129&width=493",
    },
    {
      id: 9,
      name: "Ceramic One Piece Western Toilet Commode - European Commode Water Closet With Soft Close Seat Cover P Trap Black Glossy OPT048",
      price: "₹ 9,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/41NFus0Gd_L._SL1300_dce92f8b-0907-405d-87ad-c1de4a69aed3.jpg?v=1683094915&width=493",
    },
    {
      id: 10,
      name: "Western Floor Mounted One Piece Water Closet Ceramic Western Toilet Commode European Toilets P-Trap OPT044",
      price: "₹ 8,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/31FkMwfcdvL.jpg?v=1665142203&width=493",
    },
  ];
  return (
    <div>
      <CategorySearch />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium">
        Water Closets
      </span>
      <div className="p-4 mb-14 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-xl text-center flex flex-col items-center"
            >
              <div className="relative w-full h-40 lg:h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full">
                  <FavoriteIcon />
                </div>
              </div>
              <h3 className="text-sm font-medium mt-2">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WaterClosets;
