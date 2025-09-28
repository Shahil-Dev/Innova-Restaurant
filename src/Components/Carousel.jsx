import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      src: "/assets/home/slide1.jpg",
      text: "Fresh Salads",
      description: "Organic greens with homemade dressings",
      price: "$12.99",
      badge: "Healthy Choice"
    },
    {
      src: "/assets/home/slide2.jpg",
      text: "Gourmet Pizzas",
      description: "Wood-fired with artisan ingredients",
      price: "$18.99",
      badge: "Chef's Pick"
    },
    {
      src: "/assets/home/slide3.jpg",
      text: "Dessert Specials",
      description: "Decadent sweets for every craving",
      price: "$8.99",
      badge: "Sweet Deal"
    },
    {
      src: "/assets/home/slide4.jpg",
      text: "Main Courses",
      description: "Hearty meals prepared with passion",
      price: "$22.99",
      badge: "Popular"
    },
    {
      src: "/assets/home/slide5.jpg",
      text: "Refreshing Beverages",
      description: "Crafted drinks to complement your meal",
      price: "$5.99",
      badge: "New"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying]);

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Main Carousel Container */}
      <div className="relative group">
        <div 
          className="carousel carousel-center rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
          style={{ 
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' 
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item relative transition-transform duration-700 ease-out ${
                index === currentSlide ? 'active' : ''
              }`}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                minWidth: '100%'
              }}
            >
              {/* Slide Image */}
              <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
                <img
                  src={slide.src}
                  alt={slide.text}
                  className="w-full h-full object-cover brightness-90"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {slide.badge}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 exo">
                      {slide.text}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl mb-4 opacity-90">
                      {slide.description}
                    </p>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl md:text-3xl font-bold text-orange-400">
                          {slide.price}
                        </span>
                        <span className="text-gray-300 line-through text-lg">
                          {slide.price === "$12.99" ? "$15.99" : 
                           slide.price === "$18.99" ? "$22.99" : 
                           slide.price === "$8.99" ? "$10.99" : 
                           slide.price === "$22.99" ? "$26.99" : "$6.99"}
                        </span>
                      </div>
                      
                      <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-md z-10"
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-4 mt-6 overflow-x-auto py-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 transition-all duration-300 ${
              index === currentSlide ? 'ring-4 ring-orange-500 scale-110' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.text}
              className="w-20 h-16 md:w-24 md:h-20 object-cover rounded-lg shadow-md"
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-6">
        <div 
          className="bg-gradient-to-r from-orange-500 to-red-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-3 text-gray-600 text-sm font-medium">
        <span className="text-orange-500">{currentSlide + 1}</span>
        <span className="mx-2">/</span>
        <span>{slides.length}</span>
        <span className="ml-3 text-gray-400">• {slides[currentSlide].text}</span>
      </div>
    </div>
  );
};

export default Carousel;