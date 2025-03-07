import React from "react";

function Navbar(props) {
  return (
    <div className="flex justify-between item-center bg-[#f7f7fc] p-3">
        <div>
          <h1 className="text-2xl font-bold">MOONSEA</h1>
        </div>
        <div className="flex gap-3 p-2">
          <span className="">
            <span className="material-symbols-outlined">search</span>
          </span>
          <span className="">
            <span className="material-symbols-outlined">notifications</span>
          </span>
          <span className="bg-red-500 w-2 h-2 rounded-full top-6 right-6 absolute"></span>
        </div>
      </div>
  );
}

export default Navbar;
