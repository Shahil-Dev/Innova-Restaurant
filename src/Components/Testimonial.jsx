import React, { useEffect, useState } from 'react';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        // Mock data - replace with your actual API call
        const mockTestimonials = [
            {
                id: 1,
                name: "John Smith",
                rating: 5,
                details: "The food at Innova is absolutely divine! Every dish is a masterpiece of flavor and presentation. The truffle risotto is a must-try – creamy, rich, and perfectly cooked.",
                position: "Regular Customer",
                avatar: "JS"
            },
            {
                id: 2,
                name: "Sarah Johnson",
                rating: 5,
                details: "Innova has completely changed my perspective on fine dining. The attention to detail in every dish is remarkable. The staff is incredibly knowledgeable and the ambiance is perfect.",
                position: "Food Critic",
                avatar: "SJ"
            },
            {
                id: 3,
                name: "Michael Chen",
                rating: 4,
                details: "Exceptional culinary experience! The flavors are well-balanced and innovative. The delivery was prompt and the food arrived hot. Highly recommended for special occasions.",
                position: "Local Guide",
                avatar: "MC"
            },
            {
                id: 4,
                name: "Emily Rodriguez",
                rating: 5,
                details: "From the moment you walk in, you're treated like family. The chefs are true artists, and every bite tells a story. The wine pairing suggestions were spot on!",
                position: "VIP Customer",
                avatar: "ER"
            },
            {
                id: 5,
                name: "David Thompson",
                rating: 5,
                details: "Best dining experience I've had this year! The service was impeccable, and the food was beyond expectations. The dessert menu alone is worth visiting for.",
                position: "Business Owner",
                avatar: "DT"
            }
        ];
        setTestimonials(mockTestimonials);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying || testimonials.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length, isAutoPlaying]);

    const nextTestimonial = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const prevTestimonial = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    // Star Icon Component
    const StarIcon = ({ filled = true }) => (
        <svg 
            className={`w-5 h-5 ${filled ? 'text-amber-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    if (testimonials.length === 0) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    return (
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZTdhMGEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-5 animate-float-slow opacity-60">
                <span className="text-2xl">⭐</span>
            </div>
            <div className="absolute top-20 right-10 animate-float-medium opacity-40">
                <span className="text-3xl">💫</span>
            </div>
            <div className="absolute bottom-20 left-10 animate-float-fast opacity-50">
                <span className="text-2xl">🌟</span>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg animate-glow"
                    >
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        💬 Customer Stories
                    </div>
                    
                    <h2 
                        data-aos="fade-up" 
                        data-aos-delay="200"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shimmer"
                    >
                        What Our <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">Clients</span> Say
                    </h2>
                    
                    <p 
                        data-aos="fade-up" 
                        data-aos-delay="400"
                        className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Here's what our valued customers have to say about their experience at Innova.
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div 
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Testimonial Card */}
                    <div 
                        data-aos="zoom-in" 
                        data-aos-duration="1000"
                        className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden"
                    >
                        {/* Background Gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            {/* Quote Icon */}
                            <div className="text-6xl text-orange-200 mb-4">"</div>
                            
                            {/* Testimonial Text */}
                            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 italic">
                                {testimonials[currentIndex]?.details}
                            </p>
                            
                            {/* Customer Info */}
                            <div className="flex items-center justify-between flex-col sm:flex-row gap-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-bounce-subtle">
                                        {testimonials[currentIndex]?.avatar}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-xl">
                                            {testimonials[currentIndex]?.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {testimonials[currentIndex]?.position}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Rating */}
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, index) => (
                                        <StarIcon 
                                            key={index} 
                                            filled={index < testimonials[currentIndex]?.rating}
                                        />
                                    ))}
                                    <span className="text-gray-500 ml-2 text-sm">
                                        ({testimonials[currentIndex]?.rating}.0/5.0)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-orange-500 w-8' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-6">
                        <div 
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-1 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                                width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
                            }}
                        />
                    </div>

                    {/* Testimonial Counter */}
                    <div className="text-center mt-4 text-gray-500 text-sm">
                        {currentIndex + 1} / {testimonials.length}
                    </div>
                </div>

                {/* Additional Testimonials Grid (Desktop) */}
                <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className={`bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                                index === currentIndex ? 'border-orange-300' : 'border-gray-100'
                            }`}
                            onClick={() => goToTestimonial(index)}
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <StarIcon 
                                                key={starIndex} 
                                                filled={starIndex < testimonial.rating}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                "{testimonial.details}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Auto-play Toggle */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                        <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span className="text-sm">
                            {isAutoPlaying ? 'Auto-playing' : 'Click to play'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-3deg); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                @keyframes shimmer {
                    0% { background-position: -200px 0; }
                    100% { background-position: 200px 0; }
                }
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
                }
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
                .animate-glow { animation: glow 3s ease-in-out infinite; }
                .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
                .text-shimmer {
                    background: linear-gradient(90deg, #f97316, #ef4444, #f97316);
                    background-size: 200% auto;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 3s linear infinite;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default Testimonial;