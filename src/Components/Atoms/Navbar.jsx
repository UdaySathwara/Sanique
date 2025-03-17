import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationPanel from "../../Pages/Notification";

function Navbar() {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleNotificationsClick = () => {
    setIsNotificationOpen(true);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center bg-[#f7f7fc] p-3 lg:px-5 border-b-2">
        <h1 className="text-2xl font-bold">
          <img src="https://www.mooncera.com/admin/upload/gallery/product_02-11-23-11-37-48-am_moon%20profile-01.png" alt="logo" 
          className="w-32 h-8 ml-2  mix-blend-multiply bg-[#f7f7fc]"
          onClick={() => navigate("/")}/>
        </h1>
        <div className="flex gap-3 p-2">
          <button onClick={handleSearchClick} className="relative">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button onClick={handleNotificationsClick} className="relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="bg-red-500 w-2 h-2 rounded-full top-1 right-1 absolute"></span>
          </button>
        </div>
      </div>

      {/* Notification Panel */}
      <NotificationPanel isOpen={isNotificationOpen} setIsOpen={setIsNotificationOpen} />
    </div>
  );
}

export default Navbar;
