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
      <CategorySearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <h2 className="text-xl font-medium flex justify-center items-center">
        My Favorites
      </h2>
      {filteredFavorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10 text-center px-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9827/9827607.png"
            alt="No favorites"
            className="w-36 h-36 opacity-70 mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            No products found
          </h3>
          <p className="text-gray-500 mb-4">
            Try searching with a different keyword or go back to browse
            products.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-2 bg-blue-500/95 text-white rounded-lg shadow hover:bg-white hover:text-blue-500 border border-blue-500 hover:transition"
          >
            Explore Products
          </button>
        </div>
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
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                  />
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
