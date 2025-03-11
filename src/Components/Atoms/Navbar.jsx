import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleNotificationsClick = () => {
    navigate("/notifications");
  };

  return (
    <div className="flex justify-between item-center bg-[#f7f7fc] p-3 lg:px-5">
      <div>
        <h1 className="text-2xl font-bold">MOONSEA</h1>
      </div>
      <div className="flex gap-3 p-2">
        <button onClick={handleSearchClick} className="relative">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button onClick={handleNotificationsClick} className="relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="bg-red-500 w-2 h-2 rounded-full top-0 right-0 absolute"></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;