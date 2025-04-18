import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationPanel from "../../Pages/Notification";
import Logo from "../../assets/icons8-dispenser-48.png";

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
      <div className="flex justify-between items-center bg-[#f7f7fc] py-3 px-1 lg:px-5 border-b-2">
        <h1
          className="text-2xl font-bold flex justify-center items-center hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="w-10 h-12 ml-2 bg-[#f7f7fc]" />
          <div className="flex flex-col mt-4">
            <span className="text-[#7479ff] text-base font-medium uppercase">
              Sanique
            </span>
            <span className="text-black text-[10px] font-normal uppercase -mt-3">
              Light up your bathroom
            </span>
          </div>
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
      <NotificationPanel
        isOpen={isNotificationOpen}
        setIsOpen={setIsNotificationOpen}
      />
    </div>
  );
}

export default Navbar;
