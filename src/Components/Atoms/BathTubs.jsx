import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";
import { Bath } from "lucide-react";

function BathTubs() {
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
      id: 401,
      name: "Modern Freestanding Acrylic Bathtub - White",
      price: "Rs. 35,999.00",
      image: "https://m.media-amazon.com/images/I/718leFgoVTL.jpg",
      path: "/detail-bath-tubs"
    },
    {
      id: 402,
      name: "Luxury Soaking Bathtub - Black Matte Finish",
      price: "Rs. 42,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQzIbmERx-JxSVIsoS56cGFVqIU_eYKvHoisDGR_Qhra3CpTm2_LCnm8&s=10",
      path: "/detail-bath-tubs"
    },
    {
      id: 403,
      name: "Oval Freestanding Bathtub - Glossy White",
      price: "Rs. 38,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Sef9-42kL7qBNpoqshze52pNccQWlwvfPw&s",
      path: "/detail-bath-tubs"
    },
    {
      id: 404,
      name: "Rectangular Deep Soaking Bathtub - Premium Design",
      price: "Rs. 50,999.00",
      image: "https://m.media-amazon.com/images/I/81Pv+TSBd5L._AC_UF894,1000_QL80_.jpg",
      path: "/detail-bath-tubs"
    },
    {
      id: 405,
      name: "Clawfoot Vintage Bathtub - Antique Gold Finish",
      price: "Rs. 55,000.00",
      image: "https://images.stockcake.com/public/5/3/9/539115cc-352e-48c7-b202-b79ec400e7b7_large/elegant-vintage-bath-stockcake.jpg",
      path: "/detail-bath-tubs"
    },
    {
      id: 406,
      name: "Japanese Style Wooden Soaking Tub",
      price: "Rs. 47,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAyUneMLI7Zd_1WpQZNzxrV0waa6xgtkz8sikS0NgNUUo755UuQpFIDOV&s=10",
      path: "/detail-bath-tubs"
    },
    {
      id: 407,
      name: "Minimalist Acrylic Bathtub - Matte Grey",
      price: "Rs. 40,999.00",
      image: "https://i5.walmartimages.com/asr/94082c8f-6710-4185-b08d-d50b88ae3541.9585f149a6d7af69ef9d41db8fcc1c25.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      path: "/detail-bath-tubs"
    },
    {
      id: 408,
      name: "Spa-Style Jetted Bathtub - Luxury Comfort",
      price: "Rs. 62,999.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSHclaPKEGJMRZkA0TzkHZNdtwEAMv5YrqjgxZkS6rXtt0ZhJZZFod0aH&s=10",
      path: "/detail-bath-tubs"
    },
    {
      id: 409,
      name: "Freestanding Round Bathtub - Elegant White",
      price: "Rs. 48,000.00",
      image: "https://m.media-amazon.com/images/I/612U7+GPqyL.jpg",
      path: "/detail-bath-tubs"
    },
    {
      id: 410,
      name: "Modern Oval Bathtub - Soft Curves & Smooth Finish",
      price: "Rs. 39,500.00",
      image: "https://image.made-in-china.com/2f0j00UMEhmtHjnOzy/Vanity-Art-67-Inch-Freestanding-Acrylic-Bathtub-Modern-Stand-Alone-Soaking-Tub.webp",
      path: "/detail-bath-tubs"
    },
    {
      id: 411,
      name: "Smart LED Bathtub with Hydrotherapy Features",
      price: "Rs. 75,999.00",
      image: "https://s.alicdn.com/@sc04/kf/H5d4029556f1e498c9179c6bba87b3a0fr.jpg_720x720q50.jpg",
      path: "/detail-bath-tubs"
    },
    {
      id: 412,
      name: "Marble Finish Bathtub - Luxury Collection",
      price: "Rs. 68,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmC_RNPbuR7ec8EDcdKi_bD8NVx33bz2x8GByz30kwJ2Ras0cW3epcTcHg&s=10",
      path: "/detail-bath-tubs"
    },
    {
      id: 413,
      name: "Compact Space-Saving Bathtub - White Ceramic",
      price: "Rs. 33,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMTd5UyoJlvo_D1JSraCD5ckpAwwh1ak5prdt7hAgzFabOdkTMIWFf7pP&s=10",
      path: "/detail-bath-tubs"
    },
    {
      id: 414,
      name: "Contemporary Floating Bathtub - Gloss White",
      price: "Rs. 45,499.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte7eaSXtiQi8C6FtMZVZVKj3SVXLCjr7l9faZhNPHikjomqf6k0ZJLQ0&s=10",
      path: "/detail-bath-tubs"
    },
    {
      id: 415,
      name: "Freestanding Copper Bathtub - Antique Finish",
      price: "Rs. 80,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFt6WyY7waCN5k_WdRv0hKWjTi_S46aHftmYYuyY2bkzNATD9UBjJFGhuC&s=10",
      path: "/detail-bath-tubs"
    },
    {
      id: 416,
      name: "Luxury Dual-Person Bathtub - Elegant Design",
      price: "Rs. 95,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR499JXojwFJnTtr0kX0PcnyFOTkFMVDiI2rDvila5zB5_BIs_BazCrM8k&s=10",
      path: "/detail-bath-tubs"
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
        Bath Tubs
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
            Try searching with a different keyword or go back to browse products.
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

export default BathTubs
