import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

function PopularProducts() {
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: 601,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
    },
    {
    id: 501,
      name: "Wall-Mounted Ceramic Urinal - White",
      price: "Rs. 12,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EPJeBRMbHKsvoiQdxocRha4YwqVOFnvKQzM-eQ1pIqnWUhr2tN0wU2l2&s=10",
    },
    {
      id: 414,
      name: "Contemporary Floating Bathtub - Gloss White",
      price: "Rs. 45,499.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte7eaSXtiQi8C6FtMZVZVKj3SVXLCjr7l9faZhNPHikjomqf6k0ZJLQ0&s=10",
    },
    {
      id: 602,
      name: "Brass Bathroom Floor Water Drain with Trap",
      price: "₹ 20,000.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/H27ebd8c69e9a40669f05cb6f69e6a0e0j.jpg?v=1665134886&width=493",
    },
  ];

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const syncFavorites = () => {
      setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    };

    window.addEventListener("favoritesUpdated", syncFavorites);
    return () => window.removeEventListener("favoritesUpdated", syncFavorites);
  }, []);

  const toggleFavorite = (product) => {
    let updatedFavorites;
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <>
      <div className="flex justify-between bg-[#f7f7fc] lg:justify-center md:flex-col items-center p-4">
        <span className="font-medium md:text-2xl">Popular Products</span>
        <Link
          to="/see-all"
          className="text-xs text-blue-500 font-medium md:text-base"
        >
          See All
        </Link>
      </div>
      <div className="bg-[#f7f7fc] w-full px-4 max-h-screen">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 grid-auto-rows lg:px-40 pb-14">
          {products.map((product, index) => {
            const isFavorite = favorites.some((fav) => fav.id === product.id);
            return (
              <div
                key={product.id}
                className={`rounded-xl flex flex-col text-center ${
                  index === 1 || index === 2
                    ? "row-span-2 h-96 md:h-44 lg:h-72"
                    : "h-44 mb-20 md:h-44 lg:h-72"
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full cursor-pointer"
                    onClick={() => toggleFavorite(product)}
                  >
                    <FavoriteIcon isActive={isFavorite} />
                  </div>
                </div>
                <h3 className="text-sm font-medium mt-2 md:text-lg">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-sm">
                  {product.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PopularProducts;
