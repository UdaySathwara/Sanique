import React, { useState, useEffect } from "react";
import { Search, X, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearches, setLastSearches] = useState([
    "Wash Basins",
    "Bath Tubs",
    "Water Closets",
    "Accessories",
  ]);
  const [showPopularSearches, setShowPopularSearches] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [showAllLastSearches, setShowAllLastSearches] = useState(false); // New state for expanding last searches

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowPopularSearches(e.target.value === "");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery && !lastSearches.includes(searchQuery)) {
      setLastSearches((prevSearches) => [searchQuery, ...prevSearches]);
    }
    setSearchQuery("");
    setShowPopularSearches(true);
  };

  // Add this function to handle the Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
  };

  const handleSearchClick = (path) => {
    navigate(path);
  };

  const toggleShowAllLastSearches = () => {
    setShowAllLastSearches((prev) => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState("black");

  const colors = ["black", "gray", "lightgreen", "darkgray"];

  const popularSearches = [
    {
      name: "Premium Water Closets",
      tag: "New",
      searches: "1.9k",
      img: "https://www.inart.co.in/cdn/shop/products/71tIgHNUPSL.jpg?v=1704092471&width=493",
      path: "/detail-water-closet",
    },
    {
      name: "Luxury Dual-Person Bathtub - Elegant Design",
      tag: "New",
      searches: "2.1k",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR499JXojwFJnTtr0kX0PcnyFOTkFMVDiI2rDvila5zB5_BIs_BazCrM8k&s=100",
      path: "/bath-tubs",
    },
    {
      name: "Table Top Wash Basin Design 40.5 x 40.5 CM Blue Mexican Design DW312",
      tag: "Popular",
      searches: "3.5k",
      img: "https://www.inart.co.in/cdn/shop/products/DSC0175.png?v=1679146190&width=493",
      path: "/wash-basins",
    },
    {
      name: "Premium Water Closets",
      tag: "New",
      searches: "1.2k",
      img: "https://www.inart.co.in/cdn/shop/products/71tIgHNUPSL.jpg?v=1704092471&width=493",
      path: "/detail-water-closet",
    },
  ];

  const products = [
    {
      id: 201,
      name: "Wall Mounted Ceramic Toilet - Oval Beige Commode with Soft Close Duroplast Seat, Easy Clean, Sleek Design for Bathrooms",
      price: "₹ 19,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=1100",
      path: "/detail-wall-hungs",
    },
    {
      id: 601,
      name: "Wall Mount Corner Basin Gold Color",
      price: "₹ 7,560.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51FZSaKUsfL.jpg?v=1665139438&width=360",
      path: "/detail-wash-basin",
    },
    {
      id: 10,
      name: "Western Floor Mounted One Piece Water Closet Ceramic Western Toilet Commode European Toilets P-Trap OPT044",
      price: "₹ 8,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/31FkMwfcdvL.jpg?v=1665142203&width=493",
      path: "/detail-water-closet",
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
      id: 501,
      name: "Wall-Mounted Ceramic Urinal - White",
      price: "Rs. 12,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EPJeBRMbHKsvoiQdxocRha4YwqVOFnvKQzM-eQ1pIqnWUhr2tN0wU2l2&s=10",
      path: "/detail-urinal",
    },
    {
      id: 414,
      name: "Contemporary Floating Bathtub - Gloss White",
      price: "Rs. 45,499.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSte7eaSXtiQi8C6FtMZVZVKj3SVXLCjr7l9faZhNPHikjomqf6k0ZJLQ0&s=10",
      path: "/detail-bath-tubs",
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
      id: 101,
      name: "Ceramic Counter or Table Top Wash Basin Gold 60x35 CM DW150",
      searches: "9.2k",
      image:
        "https://www.inart.co.in/cdn/shop/files/SANTUMGOLD.png?v=1690975749&width=493",
    },
    {
      id: 102,
      name: "Ceramic Counter or Table Top Wash Basin 60x40 CM Rose Gold DW101",
      searches: "6.5k",
      image:
        "https://www.inart.co.in/cdn/shop/products/51zL7IE00wL.jpg?v=1665136557",
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
      id: 1,
      name: "Ceramic Floor-Mounted European Water Closet",
      price: "₹ 7,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/close_4_4e299bd6-d8eb-4531-92db-036bf5103001.png?v=1729687653&width=493",
      path: "/detail-water-closet",
    },
    {
      id: 2,
      name: "Ceramic One Piece Western Toilet Commode",
      price: "₹ 11,760.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/61In0Kiq2UL._SL1500_37e9eb02-cc1a-4883-a6c8-7e73421f7504.jpg?v=1737609741&width=493",
      path: "/detail-water-closet",
    },
    {
      id: 3,
      name: "Ceramic P-Trap Floor Mounted European Water Closet | Contemporary Western Toilet",
      price: "₹ 6,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/01_-_Copy_8a5e7916-d35d-4382-98c4-ca7fbab2dea0.jpg?v=1727180267&width=493",
      path: "/detail-water-closet",
    },
    {
      id: 401,
      name: "Modern Freestanding Acrylic Bathtub - White",
      price: "Rs. 35,999.00",
      image: "https://m.media-amazon.com/images/I/718leFgoVTL.jpg",
      path: "/detail-bath-tubs",
    },
    {
      id: 402,
      name: "Luxury Soaking Bathtub - Black Matte Finish",
      price: "Rs. 42,500.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQzIbmERx-JxSVIsoS56cGFVqIU_eYKvHoisDGR_Qhra3CpTm2_LCnm8&s=10",
      path: "/detail-bath-tubs",
    },
    {
      id: 403,
      name: "Oval Freestanding Bathtub - Glossy White",
      price: "Rs. 38,000.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Sef9-42kL7qBNpoqshze52pNccQWlwvfPw&s",
      path: "/detail-bath-tubs",
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
  ];

  // Filter products based on search query
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [searchQuery]);

  return (
    <div className="p-4 w-full min-h-screen bg-[#f7f7fc] mb-14">
      <div className="relative w-full">
        {/* Search Bar */}
        <div className="flex items-center gap-4 py-2">
          <span
            className="material-symbols-outlined ml-2 xl:hidden"
            onClick={() => navigate(-1)}
          >
            arrow_back_ios
          </span>
          <form className="flex items-center gap-2 border border-blue-500 rounded-2xl px-4 py-2 w-full">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search...."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress} // <--- Updated event handler
              className="flex-1 outline-none text-sm bg-transparent p-1"
            />
            <button
              type="button"
              className="p-1 rounded-md"
              onClick={() => setIsOpen(true)}
            >
              <Filter className="w-5 h-5 text-gray-500" />
            </button>
          </form>
        </div>

        {/* Bottom Sheet */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 "
                onClick={() => setIsOpen(false)}
              ></div>

              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="fixed bottom-0 left-0 w-full bg-[#f7f7fc] rounded-t-2xl p-5 shadow-lg"
              >
                {/* Header */}
                <div className="flex items-center justify-between pt-4">
                  <span
                    className="material-symbols-outlined ml-2"
                    onClick={() => setIsOpen(false)}
                  >
                    arrow_back_ios
                  </span>
                  <h2 className="text-lg font-semibold md:text-2xl">
                    Filter By
                  </h2>
                  <span className="w-6"></span>
                </div>

                {/* Price Slider */}
                <div className="mt-4">
                  <label className="block text-sm font-medium md:text-xl">
                    Price
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>₹ 500</span>
                    <span>₹ {price}</span>
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mt-4">
                  <label className="block text-sm font-medium md:text-xl">
                    Color
                  </label>
                  <div className="flex items-center gap-7 mt-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  className="w-full mt-8 py-2 px-4 mb-16 bg-indigo-500 text-white hover:bg-[#f7f7fc] hover:text-indigo-500 border hover:border-indigo-500 rounded-md text-center  transition-all duration-200 md:w-56" 
                  onClick={() => setIsOpen(false)}
                >
                  Apply Filter
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Last Search */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="font-medium text-lg">Last Search</span>
          <span
            className="text-blue-500 text-base cursor-pointer"
            onClick={toggleShowAllLastSearches}
          >
            {showAllLastSearches ? "See Less" : "See All"}
          </span>
        </div>

        <div className="flex gap-3 flex-wrap sm:gap-2 mt-2 overflow-x-auto">
          {lastSearches
            .slice(0, showAllLastSearches ? lastSearches.length : 3)
            .map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white border border-gray-300 text-sm rounded-xl flex items-center gap-2 text-gray-600 sm:text-xs sm:px-2 sm:py-1 whitespace-nowrap"
              >
                {item}
                <X
                  size={16}
                  className="cursor-pointer hover:text-red-500 transition-all duration-200"
                  onClick={() => handleRemoveLastSearch(item)}
                />
              </span>
            ))}
        </div>
      </div>

      {/* Popular Search */}
      {showPopularSearches && (
        <div className="mt-6">
          <h2 className="font-medium text-lg">Popular Search</h2>
          <div className="mt-2 space-y-4">
            {popularSearches.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-all hover:scale-[1.01] cursor-pointer"
                onClick={() => handleSearchClick(item.path)}
              >
                <div className="w-14 h-14 bg-gray-300 rounded-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      {item.searches} Search Today
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.tag === "New"
                        ? "bg-orange-200 text-orange-700"
                        : "bg-green-200 text-green-700"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {!showPopularSearches && searchResults.length > 0 && (
        <div className="mt-6">
          <h2 className="font-medium text-lg">Search Results</h2>
          <div className="mt-2 space-y-4">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-all hover:scale-[1.01] cursor-pointer"
                onClick={() => navigate(product.path)}
              >
                <div className="w-14 h-14 bg-gray-300 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{product.name}</h3>
                  <p className="text-xs text-gray-500">
                    {product.searches} Search Today
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results Found */}
      {!showPopularSearches && searchResults.length === 0 && (
        <div className="mt-6">
          <p className="text-center text-gray-600">No products found</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
