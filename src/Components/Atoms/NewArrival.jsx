import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

function NewArrival() {
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: 201,
      name: "Wall Mounted Ceramic Toilet - Oval Beige Commode with Soft Close Duroplast Seat, Easy Clean, Sleek Design for Bathrooms",
      price: "₹ 19,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=1100",
    },
    {
      id: 601,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
    },
    {
      id: 10,
      name: "Western Floor Mounted One Piece Water Closet Ceramic Western Toilet Commode European Toilets P-Trap OPT044",
      price: "₹ 8,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/31FkMwfcdvL.jpg?v=1665142203&width=493",
    },
    {
      id: 213,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Color DWH011",
      price: "₹ 8,400.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/close_3.jpg?v=1729869573&width=493"
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
      <div className="flex justify-between lg:justify-center md:flex-col items-center p-4">
        <span className="font-medium md:text-2xl">New Arrivals</span>
        <Link
          to="/see-all"
          className="text-xs text-blue-500 font-medium md:text-base"
        >
          See All
        </Link>
      </div>
      <div className="max-h-screen bg-[#f7f7fc] w-full px-4 gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const isFavorite = favorites.some((fav) => fav.id === product.id);
            return (
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
                <p className="text-gray-600 mt-1 md:text-sm">{product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewArrival;
