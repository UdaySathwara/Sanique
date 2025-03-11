import React, { useState, useEffect } from "react";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";

function UrinalandAcce() {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Listen for updates when favorites change
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
    },
    {
      id: 502,
      name: "Stainless Steel Towel Rack with Hooks",
      price: "Rs. 4,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvo6JV_ai3GVHVyiTSiL6lHHFWS-ck4cPTi0GY_rNAKqwptMVRx8wQl7JL&s=10",
    },
    {
      id: 503,
      name: "Water-Saving Sensor Urinal - Modern Design",
      price: "Rs. 18,999.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Gmm_4zF969tNgu4iGvXGgoHh-UqnMbrmgjSyS0_zplNxhMlq52ufFzo&s=10",
    },
    {
      id: 504,
      name: "Automatic Soap Dispenser - Touchless",
      price: "Rs. 3,999.00",
      image:
        "//shopping.euronics.co.in/cdn/shop/files/ES06N-IMG2.jpg?v=1739431632&width=901",
    },
    {
      id: 505,
      name: "Compact Corner Urinal - Space-Saving Model",
      price: "Rs. 9,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5igKI8SY3AVIZr5UZFrWrUJFYvuY69dBaVUXy1zYAH8Cejke6IZok4HDG&s=10",
    },
    {
      id: 506,
      name: "Luxury Rain Shower Head - 12 Inch",
      price: "Rs. 6,999.00",
      image:
        "https://kohler.scene7.com/is/image/PAWEB/Template_PDP_PLP?$product_src=is{PAWEB/aaf67694_rgb}&$PDPDesktop$&fmt=jpg&fit=constrain,1&wid=700&hei=700",
    },
    {
      id: 507,
      name: "Automatic Flushing Urinal - Stainless Steel",
      price: "Rs. 22,000.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSCNd2jMfYfqWI3Sa-6IP3mtoX3Hi6QUFqj1NA-3bXNWLytqLipHIY6I&s=10",
    },
    {
      id: 508,
      name: "Smart LED Mirror with Anti-Fog Feature",
      price: "Rs. 15,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7s-ZaD4UUw_hEwPwscRUYlGdxVrEVupLNzBLoPHJ43Skbi3gu1jdljo&s=10",
    },
    {
      id: 509,
      name: "Designer Urinal - Contemporary Black Finish",
      price: "Rs. 20,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxSUm5w0rqR5kVHNrwkdyIamh1AuxkZDycnmEH6vbJntbhUapKG7eFDsp&s=10",
    },
    {
      id: 510,
      name: "Wall-Mounted Toilet Paper Holder - Matte Black",
      price: "Rs. 1,499.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSwyuTTt_QTYZUI_RClzHn6jhYn8tqRleDYFKfiOt9k8f7IqQlHcohgU0&s=10",
    },
    {
      id: 511,
      name: "Dual-Flush Eco-Friendly Urinal",
      price: "Rs. 15,999.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWVShKD6aerMxxX3SG2nOGQ5Cih2ng9Vsoo4cdHjvbfMpYYgX4lP6w2U&s=10",
    },
    {
      id: 512,
      name: "Luxury Gold Finish Basin Faucet - Modern Design",
      price: "Rs. 8,000.00",
      image:
        "https://images.stockcake.com/public/4/0/2/402a315c-ac3f-4141-8a78-116288e2acd0_medium/gold-faucet-flow-stockcake.jpg",
    },
    {
      id: 513,
      name: "Motion Sensor Bathroom Night Light",
      price: "Rs. 2,999.00",
      image: "https://hivagi.in/cdn/shop/files/1002.jpg?v=1722071217&width=900",
    },
    {
      id: 514,
      name: "Multipurpose Bathroom Shelf - Tempered Glass",
      price: "Rs. 5,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRnVeObWW7vtRN6b2umQWKzxK2NLCto9c1zgyqwdKHtmOgIPpHc2bVl2TTaF6-54wP0AFchCaIbnUk40YPqheclrw-7q_YuaX04db0F50",
    },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen lg:px-10 flex flex-col gap-4 bg-[#f7f7fc]">
      <CategorySearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium">
        Urinals and Accessories
      </span>
      <div className="p-4 mb-14 flex justify-center items-center">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isFavorite = favorites.some((fav) => fav.id === product.id);
              return (
                <div
                  key={product.id}
                  className="rounded-xl text-center flex flex-col items-center"
                >
                  <div className="relative w-full h-40 lg:h-72">
                    <img
                      src={product.image.startsWith("https") ? product.image : `https:${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full cursor-pointer">
                      <FavoriteIcon
                        isActive={isFavorite}
                        onToggle={() => toggleFavorite(product)}
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mt-2">{product.name}</h3>
                  <p className="text-gray-600 mt-1">{product.price}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}

export default UrinalandAcce;