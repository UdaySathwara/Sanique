import React from "react";
import { useNavigate } from "react-router-dom";

function CategorySearch({ onSearch }) {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="flex justify-center items-center m-2">
      <span
        className="material-symbols-outlined flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/category")} >
        arrow_back
      </span>
    <div className="flex items-center justify-center gap-3 p-3 border border-blue-500 rounded-xl w-full  lg:max-w-2xl lg:mx-auto m-3">

      {/* Search Icon */}
      <span className="material-symbols-outlined opacity-50 flex justify-center items-center">
        search
      </span>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search...."
        className="w-full outline-none bg-transparent text-black placeholder-black/60 text-sm"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
    </div>
    </div>
  );
}

export default CategorySearch;
