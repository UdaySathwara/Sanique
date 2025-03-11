import React from "react";
import { Heart } from "lucide-react";

export default function FavoriteIcon({ isActive, onToggle }) {
  return (
    <button
      onClick={onToggle} // Parent controls toggle behavior
      className="p-2 rounded-full transition-all duration-300"
    >
      <Heart
        className={`w-4 h-4 ${isActive ? "fill-red-500 text-red-500" : "text-gray-400"}`}
      />
    </button>
  );
}
