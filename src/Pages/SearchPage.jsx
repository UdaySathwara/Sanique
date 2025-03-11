import React, { useState, useEffect } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowPopularSearches(e.target.value === "");
  };

  const handleRemoveLastSearch = (itemToRemove) => {
    setLastSearches(lastSearches.filter((item) => item !== itemToRemove));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery && !lastSearches.includes(searchQuery)) {
      setLastSearches([searchQuery, ...lastSearches]);
    }
    setSearchQuery("");
    setShowPopularSearches(true);
  };

  const handleSearchClick = (path) => {
    navigate(path);
  };

  const popularSearches = [
    {
      name: "Premium Water Closets",
      tag: "New",
      searches: "1.9k",
      img: "https://www.inart.co.in/cdn/shop/products/71tIgHNUPSL.jpg?v=1704092471&width=493",
      path: "/water-closets",
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
      path: "/water-closets",
    },
  ];

  const products = [
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
      id: 103,
      name: "Modern Table Top Wash Basin 41 x 34 CM Black Matt Marble Design DW212",
      searches: "6.10k",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC0079.png?v=1665140304&width=493",
    },
    {
      id: 104,
      name: "Table Top Wash Basin Design 40.5 x 40.5 CM Mexican Design DW236",
      searches: "7.5k",
      image:
        "https://www.inart.co.in/cdn/shop/files/Camera.006_54ffa75f-8a73-4cd2-a89a-f12385cb3358.png?v=1735541884&width=493",
    },
    {
      id: 105,
      name: "Modern Glass Table Top Wash Basin 34x34 CM Black Color Crystal Diamond Design GW001",
      searches: "14.3k",
      image:
        "https://www.inart.co.in/cdn/shop/products/Ha17e7fba834f488299972584c7e19021y.jpg_960x960_be2a63cb-aad3-4b06-9eab-a1b853f3e97d.jpg?v=1665492228&width=493",
    },
    {
      id: 106,
      name: "InArt Modern Table Top Wash Basin 41 x 41 CM Moroccan Design DW214",
      searches: "2.4k",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC0113.jpg?v=1676465540&width=493",
    },
    {
      id: 107,
      name: "Table Top Wash Basin Design Matt Black Gold Color 60 x 35 CM Counter Basin DW259",
      searches: "5.4k",
      image:
        "https://www.inart.co.in/cdn/shop/products/41N19PB5-rS.jpg?v=1672317398&width=493",
    },
    {
      id: 108,
      name: "Modern Table Top Wash Basin 40 x 40 CM Black Gold Design DW208",
      searches: "1.3k",
      image:
        "https://www.inart.co.in/cdn/shop/files/Camera.006_75f566d5-f2cf-4af7-abff-ac0eb6828a02.jpg?v=1736140048&width=493",
    },
    {
      id: 109,
      name: "Table Top Wash Basin Design 40.5 x 40.5 CM Blue Mexican Design DW312",
      searches: "7.9k",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC0175.png?v=1679146190&width=493",
    },
    {
      id: 110,
      name: "Modern Glass Table Top Wash Basin 39.5 x 39.5 CM Transparent Clear Crystal Diamond Design GW003",
      searches: "1.2k",
      image:
        "https://www.inart.co.in/cdn/shop/products/71W5sI-guNL._AC_SL1500.jpg?v=1673096492&width=493",
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
      {/* Search Bar */}
      <form
        className="flex items-center gap-2 border border-blue-500 rounded-2xl px-4 py-2"
        onSubmit={handleSearchSubmit}
      >
        <ArrowLeft className="w-5 h-5 text-gray-500" />
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-1 outline-none text-sm bg-transparent p-1"
        />
      </form>

      {/* Last Search */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="font-medium text-lg">Last Search</span>
          <span className="text-blue-500 text-sm cursor-pointer">See All</span>
        </div>
        <div className="flex gap-3 flex-wrap mt-2">
          {lastSearches.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white border border-gray-300 text-sm rounded-xl flex justify-center items-center gap-2 text-gray-600"
            >
              {item}
              <X
                size={16}
                className="cursor-pointer"
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
                className="flex items-center gap-3 p-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
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
                className="flex items-center gap-3 p-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
                onClick={() => handleSearchClick(`/product/${product.id}`)}
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
                  <p className="text-xs text-gray-500">{product.searches} Search Today</p>
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
