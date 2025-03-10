import React from "react";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";

function SeeAll() {
  const products = [
    {
      id: 1,
      name: "InArt Wall Mounted Ceramic Toilet",
      price: "₹ 19,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=1100",
    },
    {
      id: 2,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
    },
    {
      id: 3,
      name: "Water Closet European Ceramic Western Toilet Commode S-Trap Oval White OPD033",
      price: "₹ 8,490.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/file_5d1725bf87f00_3.jpg?v=1676542065&width=493",
    },
    {
      id: 4,
      name: "InArt Ceramic Wall Hung or Wall Mounted Toilet",
      price: "₹ 16,559.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Hffeae181af904e6c80bd1991de63563cY.jpg_960x960_8f1206b1-32e4-4e50-86d7-26ca1ba8f45f.webp?v=1686210241&width=360",
    },
    {
      id: 5,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
    },
    {
      id: 6,
      name: "Ceramic Wall Mount Small Urinal Pot for Gents UP001",
      price: "₹ 6,499*",
      image:
        "https://www.inart.co.in/cdn/shop/products/31KIxLvdtiL.jpg?v=1665139918",
    },
    {
      id: 7,
      name: "Ceramic P-Trap Floor Mounted European Water Closet",
      price: "₹ 6,999.00*",
      image:
        "https://www.inart.co.in/cdn/shop/files/LOGO-01_19adfcc5-042f-449e-8e19-779b76da324f.jpg?v=1727180275&width=493",
    },
    {
      id: 8,
      name: "Brass Bathroom Floor Water Drain with Trap",
      price: "₹ 20,000*",
      image:
        "https://www.inart.co.in/cdn/shop/products/H27ebd8c69e9a40669f05cb6f69e6a0e0j.jpg?v=1665134886&width=493",
    },
  ];

  return (
    <>
      <div className=" bg-[#f7f7fc]  p-4 pb-16">
        <div className="flex justify-center items-center">
        <Link to="/">
        <span
          className="material-symbols-outlined flex justify-center items-center cursor-pointer left-5 top-8 absolute md:text-2xl">
          arrow_back
        </span>
        </Link>
        <div className="flex justify-center lg:justify-center md:flex-col items-center p-4">
          <span className="font-medium md:text-2xl">
            New & Trending Products
          </span>
        </div>
        </div>
        <div className="bg-[#f7f7fc] w-full  gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-xl text-center flex flex-col items-center"
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
                <h3 className="text-sm font-medium mt-2 md:text-lg">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-1 md:text-sm">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SeeAll;
