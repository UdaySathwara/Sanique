import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const images = [
  "https://img.freepik.com/premium-photo/elegant-minimalist-bathroom-interiors-bright-tones-with-clean-lines_719646-126267.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3BaK2032zdoYHTZ6_lglL0Luwor2Dfxk0b5jvfapWCFl__eDQI57RtM9&s=10",

  "https://media.istockphoto.com/id/1163155784/photo/toilet-bowl-on-white-background-copy-space-3d-illustration.jpg?s=612x612&w=0&k=20&c=K57zyZJ_gi1QfYqM5iyEk2a5i4aPYrPZMHjxrdgWbxE=",

  "https://www.shutterstock.com/image-illustration/realistic-3d-rendering-background-modern-600nw-2131607375.jpg",
];

export default function Carousel() {
  return (
    <div className="mt-2 h-40 sm:h-60 lg:mx-44 flex justify-center items-center relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt="Sanitary Ware"
                className="w-full h-full object-cover px-2"
              />
              <div className="absolute inset-0 gap-3 flex flex-col justify-center lg:items-center items-start p-6 text-white">
                <p className="text-sm sm:text-base font-medium text-black">
                  Experience elegance and hygiene with our premium sanitary
                  ware!
                </p>
                <button className="px-2 p-1 text-center bg-[#8686fc] text-white rounded-lg text-xs">
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
