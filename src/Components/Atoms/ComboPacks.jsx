import React, { useState, useEffect } from "react";
import CategorySearch from "./CategorySearch";
import FavoriteIcon from "./FavoriteIcon";

function ComboPacks() {
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
      id: 301,
      name: "Luxury Bathtub & Basin Combo - White Acrylic",
      price: "Rs. 55,999.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTWSAJwgRmhkP7QoY_Bcm9J14kPs6HsB9hPzivWRTaA&s",
    },
    {
      id: 302,
      name: "Modern Freestanding Bathtub & Sink Set - Black Matte",
      price: "Rs. 65,500.00",
      image: "https://img-va.myshopline.com/image/store/1616580841581/cj1-383-2.png?w=2000&h=2000",
    },
    {
      id: 303,
      name: "Oval Soaking Tub & Matching Vanity Basin",
      price: "Rs. 58,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuKhv5jREL_7lui_GJ2KZKqcfBHRPVTLme9g0pKm2meJaNwhRJ9sWZSg&s=10",
    },
    {
      id: 304,
      name: "Rectangular Deep Soaking Tub with Pedestal Basin",
      price: "Rs. 70,999.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQlmk6VSj4xYw48xQimhHPrYgIOm2m2Y8vDQo14aDIZGpeXFJ_fFE646r&s=10",
    },
    {
      id: 305,
      name: "Antique Clawfoot Bathtub & Victorian Sink Set",
      price: "Rs. 85,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx_WvDSl9b0JOiKlToqCV7RI2VvjWsEqluQ&s",
    },
    {
      id: 306,
      name: "Japanese Wooden Bathtub & Bamboo Basin Set",
      price: "Rs. 77,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4i_r51lEtio-2ovJHF7NpYG9FeKZ6VWDH4nRikZFzx-PyJ_C-Y9dSoKv&s=10",
    },
    {
      id: 307,
      name: "Minimalist Matte Grey Bathtub & Floating Sink",
      price: "Rs. 60,999.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuQLbydXmXCST65Q40CddILjy9FZQBWhOuYxKnJOP0SJfulT3JjZKAwQ&s=10",
    },
    {
      id: 308,
      name: "Luxury Spa-Style Bathtub with Designer Basin",
      price: "Rs. 92,999.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZTyLzgR1DdVcGYHsJpi3DmHx1yBKn3oPjEeX4ElAqJ8dYsigePv6enSu&s=10",
    },
    {
      id: 309,
      name: "Freestanding Round Bathtub & Circular Basin",
      price: "Rs. 78,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkwIPYJqZ2aMNaDVWlY84e-4pUa_U-n4LL5Yw5rDF_GldC-uUzGDHfsc5&s=10",
    },
    {
      id: 310,
      name: "Elegant Oval Bathtub with Matching Vanity Set",
      price: "Rs. 69,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uvu4jkL2IJ-2-mRVu-SBgjmu9TCj-dxsYR-PdNyMWUJD3vvPDCSepFU&s=10",
    },
    {
      id: 311,
      name: "Smart LED Bathtub & Modern Basin Duo",
      price: "Rs. 99,999.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6cCGkvn1pH57sT5hdMAhMYY3a_DBK4F5D2Z_7q0u2APQE03x7jRflCJI&s=10",
    },
    {
      id: 312,
      name: "Marble Finish Bathtub with Classic Basin",
      price: "Rs. 88,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JvKhp9-IKB_4HbhZHNe16m8T9nGjHIjNel_P-K6z6QqHmKN_w0hcHQo&s=10",
    },
    {
      id: 313,
      name: "Space-Saving Compact Bathtub & Sink Set",
      price: "Rs. 53,500.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGRtAu0gTH6JGE2f3g3quNCke4s_6nSRIURW9VGRhIQ2PBlSg2wVpm1V6&s=10",
    },
    {
      id: 314,
      name: "Floating Contemporary Bathtub & Basin Combo",
      price: "Rs. 65,499.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9UOs4MRmCS-4azrWIYWJ_N54ujlqcPdMFFAjVugrECuBctbu9azPgFc&s=10",
    },
    {
      id: 315,
      name: "Freestanding Copper Bathtub with Golden Basin",
      price: "Rs. 98,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2dTbXcaJo6BrxZKNPVMCAIVbFLSYUF_AlDuU06nRj-0l72vDqZchNexN&s=10",
    },
    {
      id: 316,
      name: "Luxury Dual-Person Bathtub & Twin Sinks",
      price: "Rs. 1,10,000.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZ8BBy1IY063nxzhGeYRodU0D2ybfIY3aCyQmSLUO5i5FdLfAg5kHl_Q&s=10f",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full lg:px-10 min-h-screen flex flex-col gap-4 bg-[#f7f7fc]">
      <CategorySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium">
        Combo Packs
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
          <p className="text-center text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
}

export default ComboPacks;