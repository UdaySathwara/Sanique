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
      <div className="lg:p-4 lg:px-40 ">
        <NewArrival />
      </div>
      <div>
        <Populerproducts />
      </div>
    </div>
  );
}

export default Home;
