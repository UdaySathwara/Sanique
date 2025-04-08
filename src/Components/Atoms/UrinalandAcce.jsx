import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";

function UrinalandAcce() {
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
      id: 501,
      name: "Wall-Mounted Ceramic Urinal - White",
      price: "Rs. 12,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EPJeBRMbHKsvoiQdxocRha4YwqVOFnvKQzM-eQ1pIqnWUhr2tN0wU2l2&s=10",
      path: "/detail-urinal",
    },
    {
      id: 502,
      name: "Water-Saving Sensor Urinal - Modern Design",
      price: "Rs. 18,999.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gmm_4zF969tNgu4iGvXGgoHh-UqnMbrmgjSyS0_zplNxhMlq52ufFzo&s=10",
      path: "/detail-urinal",
    },
    {
      id: 503,
      name: "Stainless Steel Robe Hook",
      price: "Rs. 500.00",
      image:
        "https://www.ivas.homes/images/products/bath-fittings/bath-accessories/full-brass-9912-series/robe-hook-gold.webp",
      path: "/detail-hook",
    },
    {
      id: 504,
      name: "Smart LED Mirror with Anti-Fog Feature",
      price: "Rs. 15,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7s-ZaD4UUw_hEwPwscRUYlGdxVrEVupLNzBLoPHJ43Skbi3gu1jdljo&s=10",
      path: "/detail-mirror",
    },
    {
      id: 505,
      name: "Soap Dish Metal - Stainless Steel",
      price: "Rs. 500.00",
      image:
        "https://www.ivas.homes/images/products/bath-fittings/bath-accessories/full-brass-9912-series/soap-dish-metal-black.webp",
      path: "/detail-soap-dish",
    },
    {
      id: 506,
      name: "SHOWER PANEL ALUMINUM S/L DIV. 3BJET,RS,HS SPOUT",
      price: "Rs. 6,999.00",
      image:
        "https://www.ivas.homes/images/products/bath-fittings/shower-panels/IM10062160.webp",
      path: "/detail-shower",
    },
    {
      id: 507,
      name: "Automatic Flushing Urinal - Stainless Steel",
      price: "Rs. 22,000.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSCNd2jMfYfqWI3Sa-6IP3mtoX3Hi6QUFqj1NA-3bXNWLytqLipHIY6I&s=10",
      path: "/detail-urinal",
    },
    {
      id: 508,
      name: "Dual-Flush Eco-Friendly Urinal",
      price: "Rs. 15,999.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWVShKD6aerMxxX3SG2nOGQ5Cih2ng9Vsoo4cdHjvbfMpYYgX4lP6w2U&s=10",
      path: "/detail-urinal",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full lg:px-10 min-h-screen flex flex-col gap-4 bg-[#f7f7fc]">
      <CategorySearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium">
        Urinal and Accessories
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
                        e.stopPropagation();
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
        )}
      </div>
    </div>
  );
}

export default UrinalandAcce;
