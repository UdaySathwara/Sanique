import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";

function WallHungs() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      name: "Wall Mounted Ceramic Toilet - Oval Beige Commode with Soft Close Duroplast Seat, Easy Clean, Sleek Design for Bathrooms",
      price: "₹ 19,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 202,
      name: "Rimless Ceramic Wall-Hung Toilet - White, Soft Close Seat Cover, P Trap Outlet",
      price: "₹ 6,500.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/4-fotor-2024012012735.png?v=1708513953&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 203,
      name: "Ceramic Wall Mounted, Wall Hung Rimfree, Rimless Western Toilet, Commode, Water Closet, EWC with Soft Close Seat Cover",
      price: "₹ 5,499.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/SIZESAREINMM-_1.png?v=1704262600&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 204,
      name: "Ceramic Wall Hung/Wall Mounted Water Closet with Hydraulic (Soft Close) Seat Cover (White)",
      price: "₹ 5,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/41dESe3t7IL.jpg?v=1704101014&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 205,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Close Seat Cover Pink Matt Finish",
      price: "₹ 23,000.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/41LZraWTByL.jpg?v=1702874099&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 206,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Seat Cover Gold",
      price: "₹ 25,670.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/01_-_Copy_b098e358-4f39-4de0-beee-aa17a796993a.jpg?v=1724994468&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 207,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Close Matt Grey Finish Seat Cover",
      price: "₹ 16,590.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Hc6c3286411a14a0c90e9100e3c522271r.png_960x960_04302d00-be43-436a-943d-3cf4ea869e85.webp?v=1686210241&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 208,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Seat Cover Matt Blue Color",
      price: "₹ 16,000.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC_2747.jpg?v=1672660894&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 209,
      name: "Ceramic Rimless Glossy Black Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover",
      price: "₹ 8,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/bathroom-wall-hung-closet-1000x1000.jpg?v=1665138856&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 210,
      name: "Ceramic Rimless Black Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover DWH002",
      price: "₹ 7,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/belmonte-ceramic-rimless-wall-mounted-wall-hung-western-toilet-retro-50cm-x-36cm-x-34cm-glossy-finish-full-black.jpg?v=1665138825&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 211,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Gold Color - InArt-Studio",
      price: "₹ 7,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/S5624eba828fc46f290fcf17eee41fe9fS.jpg?v=1665139100&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 212,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Color DWH012",
      price: "₹ 7,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51_B1EKc-oL._SL1257.jpg?v=1665139089&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 213,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Color DWH011",
      price: "₹ 8,400.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/close_3.jpg?v=1729869573&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 214,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover Leaf Pattern White Gold Color DWH007",
      price: "₹ 18,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/81iEL8XscSL._SL1500.jpg?v=1665138970&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 215,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover Stripe Pattern White Gold Color DWH008",
      price: "₹ 19,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/outputCamera1.png?v=1729253201&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 216,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover White Gold Color DWH010",
      price: "₹ 18,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/620BG.jpg?v=1665138873&width=493",
      path: "/detail-wall-hungs",
    },
    {
      id: 217,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover Golden Color DWH006",
      price: "₹ 24,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/41efSdcTedL.jpg?v=1665139423&width=493",
      path: "/detail-wall-hungs",
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
        Wall Hungs
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

export default WallHungs;
