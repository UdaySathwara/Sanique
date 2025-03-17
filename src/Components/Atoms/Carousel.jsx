import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const slides = [
  {
    image: "https://img.freepik.com/premium-photo/elegant-minimalist-bathroom-interiors-bright-tones-with-clean-lines_719646-126267.jpg",
    text: "Experience elegance and hygiene with our premium sanitary ware!",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3BaK2032zdoYHTZ6_lglL0Luwor2Dfxk0b5jvfapWCFl__eDQI57RtM9&s=10",
    text: "Upgrade your bathroom with modern and stylish sanitary solutions.",
  },
  {
    image: "https://media.istockphoto.com/id/1163155784/photo/toilet-bowl-on-white-background-copy-space-3d-illustration.jpg?s=612x612&w=0&k=20&c=K57zyZJ_gi1QfYqM5iyEk2a5i4aPYrPZMHjxrdgWbxE=",
    text: "Innovative designs for a luxurious and comfortable experience.",
  },
  {
    image: "https://www.shutterstock.com/image-illustration/realistic-3d-rendering-background-modern-600nw-2131607375.jpg",
    text: "High-quality, durable, and elegant sanitary ware for your home.",
  },
];

export default function Carousel() {
  const handleShopNowClick = () => {
    document.getElementById("new-arrivals")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-2 h-40 sm:h-60 lg:mx-44 flex justify-center items-center relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-xl">
              <img
                src={slide.image}
                alt="Sanitary Ware"
                className="w-full h-full object-cover px-2 rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start lg:items-center p-6 bg-black bg-opacity-10 text-black z-10 mx-2 rounded-lg">
                <p className="text-sm sm:text-base font-medium">{slide.text}</p>
                <button
                  onClick={handleShopNowClick}
                  className="mt-2 px-3 py-1 bg-[#8686fc] text-white rounded-lg text-xs lg:text-base"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
