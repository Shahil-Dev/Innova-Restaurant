import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// ✅ Fixed image paths (public folder er moddhe)
const SLIDES = [
  { image: "/assets/home/01.jpg" },
  { image: "/assets/home/02.jpg" },
  { image: "/assets/home/03.png" },
  { image: "/assets/home/04.jpg" },
  { image: "/assets/home/05.png" },
  { image: "/assets/home/06.png" }
];

const SwiperSlider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-white',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img 
                src={slide.image} 
                alt={`slide-${index}`} 
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Dark Overlay */}
              <div className=""></div>

              {/* Content */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6 max-w-4xl mx-auto">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
                    Welcome to Our Website
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light opacity-90 max-w-2xl mx-auto">
                    Enjoy delicious food and premium service
                  </p>
                  <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-300">
                    Order Now
                  </button>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev absolute left-4 z-10 p-2 bg-black/30 hover:bg-black/50 transition-colors duration-300 rounded-full">
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        
        <button className="swiper-button-next absolute right-4 z-10 p-2 bg-black/30 hover:bg-black/50 transition-colors duration-300 rounded-full">
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperSlider;
