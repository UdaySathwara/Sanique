import React from "react";
import FavoriteIcon from "./FavoriteIcon";

function PopularProducts() {
  const products = [
    {
      id: 1,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image: "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
    },
    {
      id: 2,
      name: "Ceramic Wall Mount Small Urinal Pot for Gents UP001",
      price: "₹ 6,499*",
      image:
        "https://www.inart.co.in/cdn/shop/products/31KIxLvdtiL.jpg?v=1665139918",
    },
    {
      id: 3,
      name: "Ceramic P-Trap Floor Mounted European Water Closet",
      price: "₹ 6,999.00*",
      image:
        "https://www.inart.co.in/cdn/shop/files/LOGO-01_19adfcc5-042f-449e-8e19-779b76da324f.jpg?v=1727180275&width=493",
    },
    {
      id: 4,
      name: "Brass Bathroom Floor Water Drain with Trap",
      price: "₹ 20,000*",
      image:
        "https://www.inart.co.in/cdn/shop/products/H27ebd8c69e9a40669f05cb6f69e6a0e0j.jpg?v=1665134886&width=493",
    },
  ];

  return (
<div className="bg-[#f7f7fc] w-full px-4 pb-4">
  <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 grid-auto-rows">
    {products.map((product, index) => (
      <div
        key={product.id}
        className={`rounded-xl flex flex-col ${
          index === 2 || index === 1 ? "row-span-2 h-80 lg:h-56" : "h-44 mb-20 lg:h-56"
        }`}
      >
        <div className="relative w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full shadow">
            <FavoriteIcon />
          </button>
        </div>
        <h3 className="text-sm font-medium mt-2 text-center">{product.name}</h3>
        <p className="text-gray-600 text-sm text-center">{product.price}</p>
      </div>
    ))}
  </div>
</div>

  );
}

export default PopularProducts;
