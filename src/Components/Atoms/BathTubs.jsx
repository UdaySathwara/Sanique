import React from "react";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";

function BathTubs() {
  const products = [
    {
      id: 1,
      name: "Modern Freestanding Acrylic Bathtub - White",
      price: "Rs. 35,999.00",
      image: "https://m.media-amazon.com/images/I/718leFgoVTL.jpg",
    },
    {
      id: 2,
      name: "Luxury Soaking Bathtub - Black Matte Finish",
      price: "Rs. 42,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQzIbmERx-JxSVIsoS56cGFVqIU_eYKvHoisDGR_Qhra3CpTm2_LCnm8&s=10",
    },
    {
      id: 3,
      name: "Oval Freestanding Bathtub - Glossy White",
      price: "Rs. 38,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Sef9-42kL7qBNpoqshze52pNccQWlwvfPw&s",
    },
    {
      id: 4,
      name: "Rectangular Deep Soaking Bathtub - Premium Design",
      price: "Rs. 50,999.00",
      image: "https://m.media-amazon.com/images/I/81Pv+TSBd5L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 5,
      name: "Clawfoot Vintage Bathtub - Antique Gold Finish",
      price: "Rs. 55,000.00",
      image: "https://images.stockcake.com/public/5/3/9/539115cc-352e-48c7-b202-b79ec400e7b7_large/elegant-vintage-bath-stockcake.jpg",
    },
    {
      id: 6,
      name: "Japanese Style Wooden Soaking Tub",
      price: "Rs. 47,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAyUneMLI7Zd_1WpQZNzxrV0waa6xgtkz8sikS0NgNUUo755UuQpFIDOV&s=10",
    },
    {
      id: 7,
      name: "Minimalist Acrylic Bathtub - Matte Grey",
      price: "Rs. 40,999.00",
      image: "https://i5.walmartimages.com/asr/94082c8f-6710-4185-b08d-d50b88ae3541.9585f149a6d7af69ef9d41db8fcc1c25.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
    {
      id: 8,
      name: "Spa-Style Jetted Bathtub - Luxury Comfort",
      price: "Rs. 62,999.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSHclaPKEGJMRZkA0TzkHZNdtwEAMv5YrqjgxZkS6rXtt0ZhJZZFod0aH&s=10",
    },
    {
      id: 9,
      name: "Freestanding Round Bathtub - Elegant White",
      price: "Rs. 48,000.00",
      image: "https://m.media-amazon.com/images/I/612U7+GPqyL.jpg",
    },
    {
      id: 10,
      name: "Modern Oval Bathtub - Soft Curves & Smooth Finish",
      price: "Rs. 39,500.00",
      image: "https://image.made-in-china.com/2f0j00UMEhmtHjnOzy/Vanity-Art-67-Inch-Freestanding-Acrylic-Bathtub-Modern-Stand-Alone-Soaking-Tub.webp",
    },
    {
      id: 11,
      name: "Smart LED Bathtub with Hydrotherapy Features",
      price: "Rs. 75,999.00",
      image: "https://s.alicdn.com/@sc04/kf/H5d4029556f1e498c9179c6bba87b3a0fr.jpg_720x720q50.jpg",
    },
    {
      id: 12,
      name: "Marble Finish Bathtub - Luxury Collection",
      price: "Rs. 68,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmC_RNPbuR7ec8EDcdKi_bD8NVx33bz2x8GByz30kwJ2Ras0cW3epcTcHg&s=10",
    },
    {
      id: 13,
      name: "Compact Space-Saving Bathtub - White Ceramic",
      price: "Rs. 33,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMTd5UyoJlvo_D1JSraCD5ckpAwwh1ak5prdt7hAgzFabOdkTMIWFf7pP&s=10",
    },
    {
      id: 14,
      name: "Contemporary Floating Bathtub - Gloss White",
      price: "Rs. 45,499.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte7eaSXtiQi8C6FtMZVZVKj3SVXLCjr7l9faZhNPHikjomqf6k0ZJLQ0&s=10",
    },
    {
      id: 15,
      name: "Freestanding Copper Bathtub - Antique Finish",
      price: "Rs. 80,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFt6WyY7waCN5k_WdRv0hKWjTi_S46aHftmYYuyY2bkzNATD9UBjJFGhuC&s=10",
    },
    {
      id: 16,
      name: "Luxury Dual-Person Bathtub - Elegant Design",
      price: "Rs. 95,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR499JXojwFJnTtr0kX0PcnyFOTkFMVDiI2rDvila5zB5_BIs_BazCrM8k&s=10",
    },
  ];
  
  return (
    <div className="w-full lg:px-10 flex flex-col gap-4 bg-[#f7f7fc]">
      <CategorySearch />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium">
        Bath Tubs
      </span>
      <div className="p-4 mb-14 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-xl text-center flex flex-col items-center"
            >
              <div className="relative w-full h-40 lg:h-72">
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

export default BathTubs;
