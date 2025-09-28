import React from 'react';
import { Link } from 'react-router-dom';
import SwiperSlider from '../Components/SwiperSlider';
import Carousel from '../Components/Carousel';
import PopularItem from '../Components/PopularItem';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    // Icon Components
    const StarIcon = () => (
        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    const CartIcon = () => (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    );

    // Floating animation elements
    const FloatingElements = () => (
        <>
            {/* Floating food icons */}
            <div className="absolute top-10 left-5 animate-float-slow opacity-60">
                <span className="text-2xl">🍕</span>
            </div>
            <div className="absolute top-20 right-10 animate-float-medium opacity-40">
                <span className="text-3xl">🍔</span>
            </div>
            <div className="absolute bottom-20 left-10 animate-float-fast opacity-50">
                <span className="text-2xl">🍝</span>
            </div>
            <div className="absolute bottom-10 right-20 animate-float-slow opacity-60">
                <span className="text-3xl">🥗</span>
            </div>
        </>
    );

    return (
        <div className="overflow-hidden">
            {/* Custom animations */}
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
                .animate-shimmer { 
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    background-size: 200px 100%;
                    animation: shimmer 2s infinite;
                }
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
            `}</style>

            {/* Hero Section with Swiper */}
            <section className="mb-16 lg:mb-24 relative overflow-hidden">
                <SwiperSlider />
                {/* Animated background particles */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-orange-500 rounded-full animate-float-slow"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Welcome Section - Enhanced with Animations */}
            <section 
                data-aos="fade-up" 
                data-aos-duration="1500"
                className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 mb-16 lg:mb-24 overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                    {/* Floating elements */}
                    <FloatingElements />
                    {/* Animated dots */}
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float-slow"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${4 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Animated Badge */}
                        <div 
                            data-aos="zoom-in" 
                            data-aos-delay="200"
                            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-semibold mb-6 lg:mb-8 shadow-lg animate-glow hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                            🍽️ Premium Dining Experience Since 2010
                        </div>

                        {/* Main Heading with Text Shimmer */}
                        <h2 
                            data-aos="fade-up" 
                            data-aos-delay="400"
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8'
                        >
                            <span className="text-shimmer">
                                Welcome to Innova
                            </span>
                        </h2>

                        {/* Animated Description */}
                        <p 
                            data-aos="fade-up" 
                            data-aos-delay="600"
                            className='text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto px-4'
                        >
                            Where <span className="font-semibold text-orange-600 animate-pulse">culinary excellence</span> meets warm hospitality.
                            Experience the perfect blend of traditional flavors and innovative techniques.
                        </p>

                        {/* Animated Stats Bar */}
                        <div 
                            data-aos="fade-up" 
                            data-aos-delay="800"
                            className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto mt-8 lg:mt-12"
                        >
                            {[
                                { number: "15+", label: "Years Experience" },
                                { number: "50+", label: "Master Chefs" },
                                { number: "100+", label: "Menu Items" }
                            ].map((stat, index) => (
                                <div 
                                    key={index} 
                                    data-aos="flip-up" 
                                    data-aos-delay={1000 + index * 200}
                                    className="text-center group"
                                >
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-500 text-xs sm:text-sm font-medium leading-tight group-hover:text-gray-700 transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Enhanced with Animations */}
            <section className="relative py-16 lg:py-24 bg-white mb-16 lg:mb-24 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
                    {/* Moving gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50/30 to-transparent animate-shimmer"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        className="text-center mb-12 lg:mb-16"
                    >
                        <h2 
                            data-aos="zoom-in" 
                            data-aos-delay="200"
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        >
                            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                Why Choose <span className='text-red-600 animate-pulse'>Innova</span>?
                            </span>
                        </h2>
                        <p 
                            data-aos="fade-up" 
                            data-aos-delay="400"
                            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4"
                        >
                            We're committed to providing an exceptional dining experience from start to finish
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
                        {[
                            {
                                icon: "🚀",
                                title: "Fast Delivery",
                                desc: "Get dishes delivered hot and fresh within 30 minutes",
                                color: "orange",
                                stat: "30-min delivery",
                                bgColor: "bg-orange-500",
                                delay: 0
                            },
                            {
                                icon: "⏱️",
                                title: "Easy Pickup",
                                desc: "Order online and pick up without waiting",
                                color: "green",
                                stat: "Zero waiting time",
                                bgColor: "bg-green-500",
                                delay: 200
                            },
                            {
                                icon: "💳",
                                title: "Secure Payment",
                                desc: "Multiple secure payment options available",
                                color: "blue",
                                stat: "100% secure",
                                bgColor: "bg-blue-500",
                                delay: 400
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                data-aos="flip-left"
                                data-aos-delay={feature.delay}
                                className="group relative"
                            >
                                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full animate-glow hover:animate-none">
                                    {/* Animated Icon Container */}
                                    <div 
                                        className={`${feature.bgColor} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce-subtle`}
                                    >
                                        <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-center mb-4 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                                            {feature.desc}
                                        </p>
                                        <div className={`text-${feature.color}-500 font-semibold text-center text-sm sm:text-base group-hover:scale-105 transition-transform duration-300`}>
                                            {feature.stat}
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Online Orders Section - Enhanced with Animations */}
            <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden mb-16 lg:mb-24">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 animate-shimmer"></div>
                    {/* Floating particles */}
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float-medium"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                                opacity: 0.3
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        className="text-center mb-12 lg:mb-16"
                    >
                        {/* Animated Badge */}
                        <div 
                            data-aos="zoom-in" 
                            data-aos-delay="200"
                            className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-semibold mb-6 shadow-lg animate-glow"
                        >
                            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                            🍕 Featured Menu
                        </div>

                        {/* Heading with Text Animation */}
                        <h2 
                            data-aos="fade-up" 
                            data-aos-delay="400"
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Order <span className="text-shimmer">Online</span> & Enjoy
                        </h2>

                        {/* Animated Description */}
                        <p 
                            data-aos="fade-up" 
                            data-aos-delay="600"
                            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4"
                        >
                            Discover our chef's special creations, carefully crafted with the finest ingredients
                        </p>
                    </div>

                    {/* Carousel Section */}
                    <div 
                        data-aos="zoom-in" 
                        data-aos-duration="1200" 
                        data-aos-delay="800"
                        className="mb-12 lg:mb-16"
                    >
                        <Carousel />
                    </div>

                    {/* Animated Stats Section */}
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        data-aos-delay="1000"
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { number: "500+", label: "Happy Customers Daily", color: "text-orange-400" },
                            { number: "98%", label: "Positive Reviews", color: "text-green-400" },
                            { number: "30min", label: "Avg Delivery Time", color: "text-blue-400" },
                            { number: "50+", label: "Menu Items", color: "text-purple-400" }
                        ].map((stat, index) => (
                            <div 
                                key={index} 
                                data-aos="flip-up" 
                                data-aos-delay={1200 + index * 200}
                                className="text-center group"
                            >
                                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 animate-bounce-subtle`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Animated CTA Section */}
                    <div 
                        data-aos="zoom-in" 
                        data-aos-duration="1000" 
                        data-aos-delay="1400"
                        className="text-center mt-12"
                    >
                        <button className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden group animate-glow">
                            <span className="relative z-10 flex items-center space-x-2 text-sm sm:text-base">
                                <span>Explore Full Menu</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                        <p 
                            data-aos="fade-up" 
                            data-aos-delay="1600"
                            className="text-gray-400 mt-4 text-xs sm:text-sm"
                        >
                            🚚 Free delivery on orders above $25 • ⭐ 4.8/5 from 2,000+ reviews
                        </p>
                    </div>
                </div>
            </section>

            {/* Chef's Special Section - Enhanced with Animations */}
            <section className="relative py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 mb-16 lg:mb-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        className="relative rounded-3xl overflow-hidden shadow-2xl animate-glow"
                    >
                        <div className="bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative">
                            {/* Animated background elements */}
                            <div className="absolute inset-0 opacity-20">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-4 h-4 bg-orange-400 rounded-full animate-float-slow"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random() * 4}s`,
                                            animationDuration: `${5 + Math.random() * 3}s`
                                        }}
                                    />
                                ))}
                            </div>
                            
                            <div className="relative z-10 flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-6 sm:p-8">
                                <div className="max-w-4xl mx-auto text-center">
                                    {/* Animated Badge */}
                                    <div 
                                        data-aos="zoom-in" 
                                        data-aos-delay="200"
                                        className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm text-orange-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-semibold mb-6 lg:mb-8 border border-orange-400/30 animate-glow"
                                    >
                                        👨‍🍳 Chef's Special Selection
                                    </div>

                                    {/* Main Heading with Animation */}
                                    <h2 
                                        data-aos="fade-up" 
                                        data-aos-delay="400"
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight"
                                    >
                                        Exceptional{' '}
                                        <span className="text-shimmer">
                                            Culinary
                                        </span>{' '}
                                        Art
                                    </h2>

                                    {/* Animated Description */}
                                    <p 
                                        data-aos="fade-up" 
                                        data-aos-delay="600"
                                        className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
                                    >
                                        Each dish tells a story of passion, precision, and perfection.
                                        Experience flavors that will transport you to culinary heaven.
                                    </p>

                                    {/* Animated CTA Button */}
                                    <div 
                                        data-aos="zoom-in" 
                                        data-aos-delay="800"
                                        className="flex justify-center"
                                    >
                                        <Link to="/menu">
                                            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group text-sm sm:text-base animate-glow">
                                                <span>View Our Menu</span>
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Items Section with Animation */}
            <section className="py-16 lg:py-24 bg-white mb-16 lg:mb-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PopularItem />
                </div>
            </section>

            {/* Featured Menu Section with Animations */}
            <section className="relative min-h-screen  bg-gradient-to-br from-gray-900 to-black mb-16 lg:mb-24 overflow-hidden">
                {/* Animated Background */}
                <div
                    className="absolute bg-fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-10000 hover:scale-105"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
                    }}
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20 animate-shimmer"></div>

                {/* Content Container */}
                <div className="hero-overlay bg-black bg-opacity-60">
                    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                        <div className="w-full">
                            {/* Header Section with Animation */}
                            <div 
                                data-aos="fade-down" 
                                data-aos-duration="1000"
                                className="mb-12 text-center"
                            >
                                <p className="text-amber-400 text-base sm:text-lg font-medium tracking-widest mb-4 animate-pulse">
                                    --- CHECK IT OUT ---
                                </p>
                                <h1 
                                    data-aos="zoom-in" 
                                    data-aos-delay="200"
                                    className="font-playfair mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold exo text-shimmer"
                                >
                                    FROM OUR MENU
                                </h1>
                                <div 
                                    data-aos="fade-up" 
                                    data-aos-delay="400"
                                    className="w-24 h-1 bg-amber-400 mx-auto mt-6 animate-glow"
                                />
                            </div>

                            {/* Featured Item Section with Animations */}
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
                                {/* Image Section */}
                                <div 
                                    data-aos="fade-right" 
                                    data-aos-duration="1000"
                                    className="lg:w-1/2 w-full hover-lift"
                                >
                                    <div className="relative overflow-hidden rounded-xl shadow-2xl group animate-glow">
                                        <img
                                            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                            alt="Featured dish from our menu"
                                        />
                                        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium shadow-lg text-sm sm:text-base animate-bounce-subtle">
                                            Chef's Special
                                        </div>
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div 
                                    data-aos="fade-left" 
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                    className="lg:w-1/2 w-full text-left"
                                >
                                    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-glow">
                                        <div className="flex items-center mb-4">
                                            <div className="w-3 h-8 bg-amber-400 mr-3 animate-pulse"></div>
                                            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                                                Truffle Risotto
                                            </h2>
                                        </div>

                                        <div className="flex items-center mb-6">
                                            <StarIcon />
                                            <span className="text-amber-400 font-medium ml-1">4.9</span>
                                            <span className="text-gray-400 mx-2">|</span>
                                            <span className="text-gray-300 text-sm sm:text-base">March 20, 2023</span>
                                        </div>

                                        <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-100 transition-colors duration-300">
                                            Indulge in our exquisite truffle risotto, crafted with Arborio rice, fresh black truffles,
                                            and Parmesan cheese. This creamy, aromatic dish is slow-cooked to perfection, delivering
                                            an unforgettable dining experience that will transport your senses to the Italian countryside.
                                        </p>

                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div className="group">
                                                <p className="text-amber-400 text-xl sm:text-2xl font-bold animate-bounce-subtle">$24.99</p>
                                                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Serves 2</p>
                                            </div>
                                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 flex items-center transform hover:scale-105 animate-glow">
                                                <CartIcon />
                                                Add to Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Navigation Dots */}
                            <div 
                                data-aos="fade-up" 
                                data-aos-delay="400"
                                className="flex justify-center mt-12 space-x-2"
                            >
                                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors duration-300"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section with Animations */}
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;