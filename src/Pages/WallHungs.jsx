import React from "react";
import CategorySearch from "../Components/Atoms/CategorySearch";
import FavoriteIcon from "../Components/Atoms/FavoriteIcon";

function WallHungs() {
  const products = [
    {
      id: 1,
      name: "Wall Mounted Ceramic Toilet - Oval Beige Commode with Soft Close Duroplast Seat, Easy Clean, Sleek Design for Bathrooms",
      price: "₹ 19,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Untitled-2-fotor-20240122103459.png?v=1708575421&width=493",
    },
    {
      id: 2,
      name: "Rimless Ceramic Wall-Hung Toilet - White, Soft Close Seat Cover, P Trap Outlet ",
      price: "₹ 6,500.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/4-fotor-2024012012735.png?v=1708513953&width=493",
    },
    {
      id: 3,
      name: "Ceramic Wall Mounted, Wall Hung Rimfree, Rimless Western Toilet, Commode, Water Closet, EWC with Soft Close Seat Cover",
      price: "₹ 5,499.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/SIZESAREINMM-_1.png?v=1704262600&width=493",
    },
    {
      id: 4,
      name: "Ceramic Wall Hung/Wall Mounted Water Closet with Hydraulic (Soft Close) Seat Cover (White)",
      price: "₹ 5,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/41dESe3t7IL.jpg?v=1704101014&width=493",
    },
    {
      id: 5,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Close Seat Cover Pink Matt Finish",
      price: "₹ 23,000.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/41LZraWTByL.jpg?v=1702874099&width=493",
    },
    {
      id: 6,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Seat Cover Gold ",
      price: "₹ 25,670.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/01_-_Copy_b098e358-4f39-4de0-beee-aa17a796993a.jpg?v=1724994468&width=493",
    },
    {
      id: 7,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Close Matt Grey Finish Seat Cover",
      price: "₹ 16,590.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Hc6c3286411a14a0c90e9100e3c522271r.png_960x960_04302d00-be43-436a-943d-3cf4ea869e85.webp?v=1686210241&width=493",
    },
    {
      id: 8,
      name: "Ceramic Wall Hung or Wall Mounted Designer (Clean Rim) Rimless Water Closet Toilet with Soft Seat Cover Matt Blue Color",
      price: "₹ 16,000.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC_2747.jpg?v=1672660894&width=493",
    },
    {
      id: 9,
      name: "Ceramic Rimless Glossy Black Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover",
      price: "₹ 8,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/bathroom-wall-hung-closet-1000x1000.jpg?v=1665138856&width=493",
    },
    {
      id: 10,
      name: "Ceramic Rimless Black Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover DWH002",
      price: "Rs. 7,999.00",
      image: "https://www.inart.co.in/cdn/shop/products/belmonte-ceramic-rimless-wall-mounted-wall-hung-western-toilet-retro-50cm-x-36cm-x-34cm-glossy-finish-full-black.jpg?v=1665138825&width=493",
    },
    {
      id: 11,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Gold Color - InArt-Studio",
      price: "Rs. 7,999.00",
      image: "https://www.inart.co.in/cdn/shop/products/S5624eba828fc46f290fcf17eee41fe9fS.jpg?v=1665139100&width=493",
    },
    {
      id: 12,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Color DWH012",
      price: "Rs. 7,999.00",
      image: "https://www.inart.co.in/cdn/shop/products/51_B1EKc-oL._SL1257.jpg?v=1665139089&width=493",
    },
    {
      id: 13,
      name: "Ceramic Rimless Western Toilet Seat Commode Wall Mounted or Wall Hanging Commode with Soft Seat Cover Black Color DWH011",
      price: "Rs. 8,400.00",
      image: "https://www.inart.co.in/cdn/shop/files/close_3.jpg?v=1729869573&width=493",
    },
    {
      id: 14,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover Leaf Pattern White Gold Color DWH007",
      price: "Rs. 18,999.00",
      image: "https://www.inart.co.in/cdn/shop/products/81iEL8XscSL._SL1500.jpg?v=1665138970&width=493",
    },
    {
      id: 15,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover Stripe Pattern White Gold Color DWH008",
      price: "Rs. 19,999.00",
      image: "https://www.inart.co.in/cdn/shop/files/outputCamera1.png?v=1729253201&width=493",
    },
    {
      id: 16,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover White Gold Color DWH010",
      price: "Rs. 18,990.00",
      image: "https://www.inart.co.in/cdn/shop/products/620BG.jpg?v=1665138873&width=493",
    },
    {
      id: 18,
      name: "Ceramic Rimless Wall Hung or Wall Mounted Water Closet Toilet with Soft Seat Cover Golden Color DWH006",
      price: "Rs. 24,999.00",
      image: "https://www.inart.co.in/cdn/shop/products/41efSdcTedL.jpg?v=1665139423&width=493",
    }
  ];
  return (
    <div className="w-full lg:px-10 flex flex-col gap-4 bg-[#f7f7fc]">
      <CategorySearch />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium">
        Wall Hungs
      </span>
      <div className="p-4 mb-14 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-xl text-center flex flex-col items-center"
            >
              <div className="relative w-full h-40 lg:h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full">
                  <FavoriteIcon />
                </div>
              </div>
              <h3 className="text-sm font-medium mt-2">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WallHungs;
