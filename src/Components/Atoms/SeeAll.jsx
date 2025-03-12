import React, { useState, useEffect } from "react";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";
import { useNavigate } from "react-router-dom";

function PopularProducts() {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  const products = [
    {
      id: 201,
      name: "Wall Mounted Ceramic Toilet - Oval Beige Commode",
      price: "₹ 19,999.00",
      image: "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=1100",
    },
    {
      id: 601,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image: "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
    },
    {
      id: 10,
      name: "Western Floor Mounted One Piece Water Closet",
      price: "₹ 8,999.00",
      image: "https://www.inart.co.in/cdn/shop/products/31FkMwfcdvL.jpg?v=1665142203&width=493",
    },
    {
      id: 213,
      name: "Ceramic Rimless Western Toilet Seat Commode",
      price: "₹ 8,400.00",
      image: "https://www.inart.co.in/cdn/shop/files/close_3.jpg?v=1729869573&width=493",
    },
    {
      id: 501,
      name: "Wall-Mounted Ceramic Urinal - White",
      price: "₹ 12,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EPJeBRMbHKsvoiQdxocRha4YwqVOFnvKQzM-eQ1pIqnWUhr2tN0wU2l2&s=10",
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
      price: "₹ 20,000*",
      image:
        "https://www.inart.co.in/cdn/shop/products/H27ebd8c69e9a40669f05cb6f69e6a0e0j.jpg?v=1665134886&width=493",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full lg:px-10 flex flex-col gap-4 bg-[#f7f7fc]">
      <CategorySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium">
        New and Popular Products
      </span>
      <div className="p-4 mb-14 flex justify-center items-center">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isFavorite = favorites.some((fav) => fav.id === product.id);
              return (
                <div key={product.id} className="rounded-xl text-center flex flex-col items-center">
                  <div className="relative w-full h-40 lg:h-72">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full cursor-pointer">
                      <FavoriteIcon isActive={isFavorite} onToggle={() => toggleFavorite(product)} />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mt-2">{product.name}</h3>
                  <p className="text-gray-600 mt-1">{product.price}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
}

export default PopularProducts;
