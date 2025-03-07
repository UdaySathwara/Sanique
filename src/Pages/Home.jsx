import React from "react";
import Navbar from "../Components/Atoms/Navbar";
import ScrollNav from "../Components/Atoms/ScrollNav";
import Carousel from "../Components/Atoms/Carousel";
import NewArrival from "../Components/Atoms/NewArrival";
import Populerproducts from "../Components/Atoms/Populerproducts";

function Home(props) {
  return (
    <div className="bg-[#f7f7fc] mb-14 h-full">
      <Navbar />
      <ScrollNav />
      <Carousel />
      <div className="flex justify-between lg:justify-center md:flex-col items-center p-4">
        <span className="font-medium md:text-2xl">New Arrivals</span>
        <span className="text-xs text-blue-500 font-medium md:text-xl">
          See All
        </span>
      </div>
      <div>
        <NewArrival />
      </div>
      <div className="flex justify-between bg-[#f7f7fc] lg:justify-center md:flex-col items-center p-4">
        <span className="font-medium md:text-2xl">Poupler Products</span>
        <span className="text-xs text-blue-500 font-medium md:text-xl">
          See All
        </span>
      </div>
      <div>
        <Populerproducts />
      </div>
    </div>
  );
}

export default Home;
