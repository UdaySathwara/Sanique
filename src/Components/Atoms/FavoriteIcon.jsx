import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function FavoriteIcon() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="p-2 rounded-full transition-all duration-300"
    >
      <Heart
        className={`w-4 h-4 ${isActive ? "fill-red-500 text-red-500" : "text-gray-400"}`}
      />
    </button>
  );
}
