import React, { useEffect, useState } from "react";
import Navbar from "../Components/Atoms/Navbar";
import ScrollNav from "../Components/Atoms/ScrollNav";
import Carousel from "../Components/Atoms/Carousel";
import NewArrival from "../Components/Atoms/NewArrival";
import Populerproducts from "../Components/Atoms/PopulerProducts";

function Home() {
  const [showMobileOnlyPopup, setShowMobileOnlyPopup] = useState(false);

  useEffect(() => {
    // Show popup only if screen is larger than mobile AND popup hasn't been shown before in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenMobileOnlyPopup");

    if (window.innerWidth > 768 && !hasSeenPopup) {
      setShowMobileOnlyPopup(true);
      sessionStorage.setItem("hasSeenMobileOnlyPopup", "true");
    }
  }, []);

  return (
    <div className="bg-[#f7f7fc] mb-14 h-full">
      <Navbar />
      <ScrollNav />
      <Carousel />
      <div id="new-arrivals" className="lg:p-4 lg:px-40 scroll-mt-0">
        <NewArrival />
      </div>
      <div>
        <Populerproducts />
      </div>

      {showMobileOnlyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white pt-6 rounded-lg shadow-lg w-80 text-center">
            <p className="text-xl font-semibold px-6 mb-4">
              This website is made for mobile devices only.
            </p>
            <p className="text-sm text-gray-600 px-6 mb-4">
              Please view this site on a mobile device or reduce your browser window width for the best experience.
            </p>
            <button
              className="text-blue-600 font-medium w-full py-4 rounded-b-2xl border-t border-gray-300 hover:bg-gray-100"
              onClick={() => setShowMobileOnlyPopup(false)}
            >
              Continue Anyway
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
