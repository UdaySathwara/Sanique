import { useLocation, useNavigate } from "react-router-dom";

const ScrollNav = () => {
  const location = useLocation(); // Get current route
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f7f7fc] shadow-md p-3 flex justify-evenly lg:justify-center lg:gap-32  items-center">
      <button
        className={`flex flex-col items-center text-sm font-medium ${
          location.pathname === "/" ? "text-black" : "text-gray-400"
        }`}
        onClick={() => navigate("/")}
      >
        Home
        {location.pathname === "/" && (
          <div className="w-16 h-1 bg-[#8686fc] mt-1 rounded-full"></div>
        )}
      </button>

      <button
        className={`flex flex-col items-center text-sm font-medium ${
          location.pathname === "/category" ? "text-black" : "text-gray-400"
        }`}
        onClick={() => navigate("/category")}
      >
        Category
        {location.pathname === "/category" && (
          <div className="w-16 h-1 bg-[#8686fc] mt-1 rounded-full"></div>
        )}
      </button>
    </div>
  );
};

export default ScrollNav;
