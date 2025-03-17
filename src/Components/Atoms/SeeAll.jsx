import React, { useState, useEffect } from "react";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";
import { useNavigate } from "react-router-dom";

function PopularProducts() {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);

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
      name: "Wall Mounted Ceramic Toilet - Oval Beige Commode with Soft Close Duroplast Seat, Easy Clean, Sleek Design for Bathrooms",
      price: "₹ 19,999.00",
      image: "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=1100",
      path: "/detail-wall-hungs",
    },
    {
      id: 601,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image: "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
      path: "/detail-wash-basin",
    },
    {
      id: 10,
      name: "Western Floor Mounted One Piece Water Closet Ceramic Western Toilet Commode European Toilets P-Trap OPT044",
      price: "₹ 8,999.00",
      image: "https://www.inart.co.in/cdn/shop/products/31FkMwfcdvL.jpg?v=1665142203&width=493",
      path: "/detail-water-closet",
    },
    {
      id: 213,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Color DWH011",
      price: "₹ 8,400.00",
      image: "https://www.inart.co.in/cdn/shop/files/close_3.jpg?v=1729869573&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 501,
      name: "Wall-Mounted Ceramic Urinal - White",
      price: "Rs. 12,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EPJeBRMbHKsvoiQdxocRha4YwqVOFnvKQzM-eQ1pIqnWUhr2tN0wU2l2&s=10",
      path: "/detail-urinal",
    },
    {
      id: 414,
      name: "Contemporary Floating Bathtub - Gloss White",
      price: "Rs. 45,499.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte7eaSXtiQi8C6FtMZVZVKj3SVXLCjr7l9faZhNPHikjomqf6k0ZJLQ0&s=10",
      path: "/detail-bath-tubs",
    },
    {
      id: 506,
      name: "SHOWER PANEL ALUMINUM S/L DIV. 3BJET,RS,HS SPOUT",
      price: "Rs. 6,999.00",
      image: "https://www.ivas.homes/images/products/bath-fittings/shower-panels/IM10062160.webp",
      path: "/detail-shower",
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
                <div
                  key={product.id}
                  className="rounded-xl text-center flex flex-col items-center cursor-pointer"
                  onClick={() => navigate(product.path)}
                >
                  <div className="relative w-full h-40 lg:h-72">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div
                      className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent navigation when clicking the favorite icon
                        toggleFavorite(product);
                      }}
                    >
                      <FavoriteIcon isActive={isFavorite} />
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
