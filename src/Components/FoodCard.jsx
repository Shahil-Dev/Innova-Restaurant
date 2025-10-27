import React, { useState } from 'react';

const FoodCard = ({ item }) => {
    const { image, recipe, price, name } = item;
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
   
    return (
        <div
            className="group relative bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="zoom-in"
        >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 scale-0 group-hover:scale-100"></div>

            {/* Popular Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-6 z-10 animate-pulse">
                🔥 Popular
            </div>

            {/* Image Container */}
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500">
                {/* Loading Skeleton */}
                {!imageLoaded && (
                    <div className="w-full h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-2xl"></div>
                )}

                {/* Main Image */}
                <img
                    src={image}
                    alt={recipe}
                    className={`w-full h-48 object-cover transform transition-all duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                        } group-hover:scale-110`}
                    onLoad={() => setImageLoaded(true)}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Quick View Button */}
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-white hover:scale-105">
                    👁️ Quick View
                </button>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Recipe Name */}
                <h3 className="text-xl font-black text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-500 leading-tight line-clamp-2">
                    {name || recipe}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
                    {recipe}
                </p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                    <div className="flex items-center space-x-3">
                        {/* Animated Price */}
                        <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                            ${price}
                        </div>

                        {/* Preparation Time */}
                        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium border border-gray-200">
                            🕐 25min
                        </div>
                    </div>

                 
                </div>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {['Vegetarian', 'Gluten-Free', 'Spicy'].slice(0, 2).map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 transition-all duration-300 hover:bg-orange-100 hover:text-orange-700 hover:border-orange-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className="text-amber-400 text-sm drop-shadow-sm transition-transform duration-300 hover:scale-125"
                                style={{
                                    opacity: i < 4 ? 1 : 0.4,
                                    animationDelay: `${i * 0.1}s`
                                }}
                            >
                                ⭐
                            </span>
                        ))}
                        <span className="text-gray-500 text-sm ml-1">4.8</span>
                    </div>

                    {/* Favorite Button */}
                    <button className="text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Pulse animation for price */
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                .animate-pulse {
                    animation: pulse 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default FoodCard;