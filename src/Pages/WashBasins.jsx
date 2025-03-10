import React from "react";
import CategorySearch from "../Components/Atoms/CategorySearch";
import FavoriteIcon from "../Components/Atoms/FavoriteIcon";

function WashBasins() {
  const products = [
    {
      id: 1,
      name: "Ceramic Counter or Table Top Wash Basin Gold 60x35 CM DW150",
      price: "₹ 7,490.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/SANTUMGOLD.png?v=1690975749&width=493",
    },
    {
      id: 2,
      name: "Ceramic Counter or Table Top Wash Basin 60x40 CM Rose Gold DW101",
      price: "₹ 6,830.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51zL7IE00wL.jpg?v=1665136557",
    },
    {
      id: 3,
      name: "Modern Table Top Wash Basin 41 x 34 CM Black Matt Marble Design DW212",
      price: "₹ 6,830.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC0079.png?v=1665140304&width=493",
    },
    {
      id: 4,
      name: "Table Top Wash Basin Design 40.5 x 40.5 CM Mexican Design DW236",
      price: "₹ 11,750.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Camera.006_54ffa75f-8a73-4cd2-a89a-f12385cb3358.png?v=1735541884&width=493",
    },
    {
      id: 5,
      name: "Modern Glass Table Top Wash Basin 34x34 CM Black Color Crystal Diamond Design GW001",
      price: "₹ 16,040.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/Ha17e7fba834f488299972584c7e19021y.jpg_960x960_be2a63cb-aad3-4b06-9eab-a1b853f3e97d.jpg?v=1665492228&width=493",
    },
    {
      id: 6,
      name: "InArt Modern Table Top Wash Basin 41 x 41 CM Moroccan Design DW214",
      price: "₹ 8,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC0113.jpg?v=1676465540&width=493",
    },
    {
      id: 7,
      name: "Table Top Wash Basin Design Matt Black Gold Color 60 x 35 CM Counter Basin DW259",
      price: "₹ 5,499.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/41N19PB5-rS.jpg?v=1672317398&width=493",
    },
    {
      id: 8,
      name: "Modern Table Top Wash Basin 40 x 40 CM Black Gold Design DW208",
      price: "₹ 7,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/Camera.006_75f566d5-f2cf-4af7-abff-ac0eb6828a02.jpg?v=1736140048&width=493",
    },
    {
      id: 9,
      name: "Table Top Wash Basin Design 40.5 x 40.5 CM Blue Mexican Design DW312",
      price: "₹ 7,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/DSC0175.png?v=1679146190&width=493",
    },
    {
      id: 10,
      name: "odern Glass Table Top Wash Basin 39.5 x 39.5 CM Transparent Clear Crystal Diamond Design GW003",
      price: "₹ 15,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/71W5sI-guNL._AC_SL1500.jpg?v=1673096492&width=493",
    },
    {
      id: 11,
      name: "Ceramic Counter or Table Top Wash Basin 60x40 CM Gold DW095",
      price: "₹ 4,890.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/HTB1rkFYoTvI8KJjSspjq6AgjXXaY.jpg?v=1665136501&width=493",
    },
    {
      id: 12,
      name: "Ceramic Counter or Table Top Wash Basin 45x33 CM Black DW039",
      price: "₹ 3,990.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/41iIyO7FPUL.jpg?v=1665135821&width=493",
    },
    {
      id: 13,
      name: "Ceramic Counter or Table Top Wash Basin Gold White 61x36 CM DW168",
      price: "₹ 5,990.00",
      image: "https://www.inart.co.in/cdn/shop/products/H4ea61b4889744eb49eabc95aa04b2ec97.jpg?v=1665137426&width=493",
    },
    {
      id: 14,
      name: "Ceramic Counter or Table Top Wash Basin 60x40 CM Rose Gold DW101",
      price: "₹ 6,830.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/Hfd63038dc16e487abb8652fd07e185a1j.jpg_960x960_result.jpg?v=1673094727&width=493",
    },
    {
      id: 15,
      name: "Ceramic Modern Black Table Top Wash Basin 45 x 34 CM DW310",
      price: "₹ 5,890.00",
      image: "https://www.inart.co.in/cdn/shop/products/FINAL1_9b0dbefe-54ab-4e73-a5a6-e7f628919ea4.png?v=1678167368&width=493",
    },
    {
      id: 16,
      name: "Modern Table Top Wash Basin 45 x 32 CM Gold Color DW215",
      price: "₹ 6,000.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/51uMO5_G6NL_478x_crop_center_35c283c0-0721-4a36-8954-8dd6f72e4a8c.jpg?v=1665140345&width=493",
    },
    {
      id: 17,
      name: "Ceramic Counter or Table Top Wash Basin Black 49x31 CM DW119",
      price: "₹ 7,500.00",
      image: "https://www.inart.co.in/cdn/shop/products/H09958350d7c54e709a2f8b1837cc961de.jpg?v=1665136692&width=493",
    },
    {
      id: 18,
      name: "Modular Vanity Crystal Glass Wash Basin | Luxury, Clear | Table Top & Counter Top Basin | 42x42x18 cm GW010",
      price: "₹ 15,999.00",
      image:
        "https://www.inart.co.in/cdn/shop/files/DSC0035_424746ed-eec5-48ce-8303-828ba70c997d.jpg?v=1711954585&width=493",
    },
    {
      id: 19,
      name: "Ceramic Counter or Table Top Wash Basin White Marble 49x31 CM DW199",
      price: "₹ 5,990.00",
      image: "https://www.inart.co.in/cdn/shop/products/x16.jpg?v=1665138141&width=493",
    },
    {
      id: 20,
      name: "Ceramic Counter or Table Top Wash Basin Copper 49x31 CM DW132",
      price: "₹ 6,000.00",
      image:
        "https://www.inart.co.in/cdn/shop/products/Ha8db2128087946c7a755e23419639769P.jpg?v=1672317822&width=360",
    },
  ];
  
  return (
    <div className="w-full lg:px-10 flex flex-col gap-4 bg-[#f7f7fc]">
      <CategorySearch />
      <span className="flex justify-center items-center text-lg lg:text-2xl font-medium lg:mb-4">
        Wash Basins
      </span>
      <div className="p-4 mb-14 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-xl text-center flex flex-col items-center"
            >
              <div className="relative w-full h-40 lg:h-full md:h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute -top-2 -right-2 bg-[#f7f7fc] rounded-full lg:p-2">
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

export default WashBasins;
