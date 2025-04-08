import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "../Components/Atoms/FavoriteIcon";
import CategorySearch from "../Components/Atoms/CategorySearch";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);

    const handleFavoritesUpdate = () => {
      setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    };

    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);
    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
    };
  }, []);

  const toggleFavorite = (product) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const filteredFavorites = favorites.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full lg:px-10 flex flex-col gap-4 bg-[#f7f7fc] min-h-screen mb-14">
      <CategorySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h2 className="text-xl font-medium flex justify-center items-center">My Favorites</h2>
      {filteredFavorites.length === 0 ? (
        <p className="text-gray-600 text-center">No favorites found!</p>
      ) : (
        <div className="p-4 flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFavorites.map((product) => (
              <div
                key={product.id}
                className="rounded-xl text-center flex flex-col items-center cursor-pointer"
                onClick={() => navigate(product.path)}
              >
                <div className="relative w-full h-40 lg:h-72">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md" />
                  <div
                    className="absolute -top-2 -right-2 bg-white rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product);
                    }}
                  >
                    <FavoriteIcon isActive={true} />
                  </div>
                </div>
                <h3 className="text-sm font-medium mt-2">{product.name}</h3>
                <p className="text-gray-600 mt-1">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
