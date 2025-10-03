import React from 'react';

const Order = () => {
    return (
        <div>
            <div className="relative min-h-screen overflow-hidden p-4">
                {/* Background Image with Multiple Layers */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                    }}
                >
                    {/* Animated Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-red-900/70 to-amber-900/80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black/80_100%)]"></div>
                </div>

                {/* Floating Food Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {[].map((icon, index) => (
                        <div
                            key={index}
                            className="absolute text-3xl sm:text-4xl animate-float-3d opacity-60 filter drop-shadow-2xl"
                            style={{
                                left: `${10 + index * 12}%`,
                                top: `${15 + index * 10}%`,
                                animationDelay: `${index * 0.7}s`,
                                animationDuration: `${6 + index * 0.5}s`
                            }}
                        >
                            {icon}
                        </div>
                    ))}
                </div>

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-float-slow opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 backdrop-blur-lg border-2 border-amber-300/50 px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-2xl animate-glow transform hover:scale-105 transition-all duration-300 cursor-pointer">
                            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                            🚀 FAST DELIVERY • FRESH MEALS
                            <span className="ml-3 text-xl">✨</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                            <span className="block text-shimmer animate-slide-in">
                                ORDER
                            </span>
                            <span className="block text-3xl sm:text-4xl md:text-5xl text-amber-200 font-light mt-4 animate-fade-up">
                                Your <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">Culinary</span> Experience
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl text-white font-bold mt-2 animate-fade-up-delay">
                                Awaits
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up-delay backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                            Experience restaurant-quality meals delivered to your doorstep.
                            Fresh ingredients, masterful preparation, and unforgettable flavors -
                            all just a click away from transforming your dining experience.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto animate-fade-up-delay">
                            {[
                                { icon: "⚡", title: "Lightning Fast", desc: "30-45 min delivery" },
                                { icon: "🌟", title: "Premium Quality", desc: "Chef-crafted meals" },
                                { icon: "🎯", title: "Live Tracking", desc: "Real-time updates" }
                            ].map((feature, index) => (
                                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-amber-300/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-orange-200 text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                      

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-wrap justify-center gap-8 text-orange-200 text-lg animate-fade-up-delay">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                <span>⭐</span>
                                <span>4.8/5 (2,000+ Reviews)</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                <span>🛵</span>
                                <span>Free Delivery Over $25</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                <span>🕒</span>
                                <span>Open Until 11 PM</span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Custom Animations */}
                
            </div>














<style jsx>{`
        @keyframes float-3d {
            0%, 100% { 
                transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); 
                filter: drop-shadow(0 5px 15px rgba(255,193,7,0.3));
            }
            33% { 
                transform: translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.1); 
                filter: drop-shadow(0 15px 25px rgba(255,193,7,0.6));
            }
            66% { 
                transform: translateY(-10px) rotateX(-3deg) rotateY(-3deg) scale(1.05); 
                filter: drop-shadow(0 10px 20px rgba(255,193,7,0.4));
            }
        }
        @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        @keyframes glow {
            0%, 100% { 
                box-shadow: 0 0 25px rgba(245,158,11,0.6),
                            0 0 50px rgba(245,158,11,0.4);
            }
            50% { 
                box-shadow: 0 0 35px rgba(245,158,11,0.9),
                            0 0 70px rgba(245,158,11,0.6);
            }
        }
        @keyframes slideIn {
            0% { transform: translateX(-100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounceSubtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-float-3d { animation: float-3d 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slide-in { animation: slideIn 1.2s ease-out; }
        .animate-fade-up { animation: fadeInUp 1.2s ease-out 0.3s both; }
        .animate-fade-up-delay { animation: fadeInUp 1.2s ease-out 0.6s both; }
        .animate-bounce-subtle { animation: bounceSubtle 2s ease-in-out infinite; }
        .text-shimmer { 
            background: linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24, #ea580c, #fbbf24);
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
        }
    `}</style>


        </div>
    );
};

export default Order;