import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around items-center bg-[#f7f7fc] w-full fixed bottom-0 h-16 p-2 border-t ">
      <button
        className="flex flex-col items-center hover:text-[#8686fc]"
        onClick={() => navigate("/")}
      >
        <span className="material-symbols-outlined">home</span>
        <span className="hover:text-[#8686fc] text-xs">Home</span>
      </button>

      <button
        className="flex flex-col items-center hover:text-[#8686fc]"
        onClick={() => navigate("/products")}
      >
        <span className="material-symbols-outlined">inventory_2</span>
        <span className="hover:text-[#8686fc] text-xs">Products</span>
      </button>

      <button
        className="flex flex-col items-center hover:text-[#8686fc]"
        onClick={() => navigate("/favorites")}
      >
        <span className="material-symbols-outlined">favorite</span>
        <span className="hover:text-[#8686fc] text-xs">Favorite</span>
      </button>

      <button
        className="flex flex-col items-center hover:text-[#8686fc]"
        onClick={() => navigate("/profile")}
      >
        <span className="material-symbols-outlined">person</span>
        <span className="hover:text-[#8686fc] text-xs">Profile</span>
      </button>
    </div>
  );
}

export default Footer;
