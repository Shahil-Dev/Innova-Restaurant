import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const ParallaxComponent = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
                25% { transform: translateY(-15px) rotate(2deg) scale(1.05); }
                50% { transform: translateY(-8px) rotate(-1deg) scale(1.02); }
                75% { transform: translateY(-12px) rotate(1deg) scale(1.03); }
            }
            @keyframes float-3d {
                0%, 100% { 
                    transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); 
                    filter: drop-shadow(0 5px 15px rgba(255,107,53,0.3));
                }
                33% { 
                    transform: translateY(-25px) rotateX(8deg) rotateY(8deg) scale(1.1); 
                    filter: drop-shadow(0 15px 30px rgba(255,107,53,0.6));
                }
                66% { 
                    transform: translateY(-12px) rotateX(-5deg) rotateY(-5deg) scale(1.05); 
                    filter: drop-shadow(0 10px 25px rgba(255,107,53,0.4));
                }
            }
            @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
            }
            @keyframes glow {
                0%, 100% { 
                    box-shadow: 0 0 25px rgba(249, 115, 22, 0.5),
                                0 0 50px rgba(249, 115, 22, 0.3),
                                0 0 75px rgba(249, 115, 22, 0.1);
                }
                50% { 
                    box-shadow: 0 0 40px rgba(249, 115, 22, 0.8),
                                0 0 80px rgba(249, 115, 22, 0.5),
                                0 0 120px rgba(249, 115, 22, 0.2);
                }
            }
            @keyframes slideIn {
                0% { transform: translateX(-100px) scale(0.9); opacity: 0; }
                100% { transform: translateX(0) scale(1); opacity: 1; }
            }
            @keyframes fadeInUp {
                0% { transform: translateY(80px) scale(0.95); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
            }
            @keyframes textShimmer {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
            }
            @keyframes bounceSubtle {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-12px) scale(1.05); }
            }
            @keyframes pulseGlow {
                0%, 100% { 
                    transform: scale(1);
                    box-shadow: 0 0 20px rgba(255,193,7,0.4);
                }
                50% { 
                    transform: scale(1.1);
                    box-shadow: 0 0 40px rgba(255,193,7,0.8);
                }
            }
            @keyframes rotate3d {
                0% { transform: rotateY(0deg) scale(1); }
                50% { transform: rotateY(10deg) scale(1.05); }
                100% { transform: rotateY(0deg) scale(1); }
            }
            @keyframes sparkle {
                0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1) rotate(180deg); }
            }
            .animate-float { animation: float 8s ease-in-out infinite; }
            .animate-float-3d { animation: float-3d 10s ease-in-out infinite; }
            .animate-float-delay { animation: float 8s ease-in-out infinite 2s; }
            .animate-float-slow { animation: float 12s ease-in-out infinite; }
            .text-shimmer { 
                background: linear-gradient(
                    90deg, 
                    #ff6b35, #ff8e53, #ffa726, 
                    #ff6b35, #ff4757, #ff6b35
                );
                background-size: 300% auto;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: textShimmer 4s linear infinite;
            }
            .animate-glow { animation: glow 4s ease-in-out infinite; }
            .animate-slide-in { animation: slideIn 1.2s ease-out; }
            .animate-fade-up { animation: fadeInUp 1.2s ease-out; }
            .animate-bounce-subtle { animation: bounceSubtle 3s ease-in-out infinite; }
            .animate-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
            .animate-rotate-3d { animation: rotate3d 6s ease-in-out infinite; }
            .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
            
            /* Hover effects */
            .hover-lift:hover {
                transform: translateY(-10px) scale(1.02);
                transition: all 0.3s ease;
            }
            
            .gradient-border {
                background: linear-gradient(45deg, #ff6b35, #ff8e53, #ffa726, #ff6b35);
                background-size: 400% 400%;
                animation: gradientShift 3s ease infinite;
            }
            
            @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="space-y-0 overflow-hidden">
            {/* Enhanced Hero Parallax Section */}
            <section className="relative" ref={heroRef}>
                <Parallax
                    blur={0}
                    bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    bgImageAlt="Innova Restaurant Interior"
                    strength={500}
                    className="min-h-screen"
                >
                    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
                        {/* Enhanced Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/40 to-orange-600/50 animate-pulse">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.3)_0%,transparent_50%)] animate-float-slow"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2)_0%,transparent_50%)] animate-float-delay"></div>
                        </div>

                        {/* Enhanced Floating Particles */}
                        <div className="absolute inset-0">
                            {[...Array(25)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`absolute w-3 h-3 rounded-full animate-float ${i % 3 === 0 ? 'bg-orange-400' :
                                            i % 3 === 1 ? 'bg-purple-400' : 'bg-amber-400'
                                        }`}
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 8}s`,
                                        opacity: 0.7
                                    }}
                                />
                            ))}
                        </div>

                        {/* Sparkle Elements */}
                        <div className="absolute inset-0">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute text-2xl animate-sparkle"
                                    style={{
                                        left: `${20 + i * 10}%`,
                                        top: `${15 + i * 8}%`,
                                        animationDelay: `${i * 0.5}s`
                                    }}
                                >
                                    ✨
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="relative z-20 text-center text-white px-4 max-w-7xl mx-auto">
                            {/* Enhanced Animated Badge */}
                            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-10 py-5 rounded-full text-xl font-black mb-12 shadow-2xl animate-glow transform hover:scale-110 transition-all duration-500 cursor-pointer group border-2 border-white/20">
                                <div className="w-4 h-4 bg-white rounded-full mr-4 animate-pulse-glow group-hover:rotate-180 transition-transform duration-500"></div>
                                🍽️ CULINARY EXCELLENCE AWAITS
                                <div className="ml-4 text-yellow-200 group-hover:scale-150 transition-transform duration-300">🌟</div>
                            </div>

                            {/* Enhanced Main Heading */}
                            <div className="overflow-hidden mb-12">
                                <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black mb-8 exo leading-none">
                                    <span className="block text-shimmer animate-slide-in" style={{ animationDelay: '0.2s' }}>
                                        INNOVA
                                    </span>
                                    <span className="block text-5xl sm:text-6xl md:text-7xl font-light mt-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                                        Where <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">Art</span> Meets{' '}
                                        <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Flavor</span>
                                    </span>
                                </h1>
                            </div>

                            {/* Enhanced Animated Description */}
                            <p className="text-2xl sm:text-3xl md:text-4xl mb-16 text-gray-200 font-light leading-relaxed max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '1.2s' }}>
                                Experience culinary perfection where every dish is a masterpiece,
                                every flavor tells a story, and every moment becomes a memory.
                            </p>

                            {/* Enhanced CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-up" style={{ animationDelay: '1.6s' }}>
                                <Link to="/menu">
                                    <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black py-6 px-16 rounded-3xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden border-2 border-orange-300/30">
                                        <span className="relative z-10 flex items-center space-x-4 text-xl">
                                            <span>Explore Our Menu</span>
                                            <svg className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    </button>
                                </Link>
                                <button className="group relative border-3 border-white/80 hover:border-white text-white hover:bg-white hover:text-gray-900 font-black py-6 px-16 rounded-3xl transition-all duration-500 transform hover:scale-105 backdrop-blur-lg bg-white/10">
                                    <span className="flex items-center space-x-4 text-xl">
                                        <span>Book Experience</span>
                                        <span className="group-hover:rotate-180 transition-transform duration-500 text-2xl">🎯</span>
                                    </span>
                                </button>
                            </div>

                            {/* Enhanced Animated Stats */}
                            <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto mt-20 animate-fade-up" style={{ animationDelay: '2s' }}>
                                {[
                                    { number: "15+", label: "Years Excellence", icon: "🏆" },
                                    { number: "50+", label: "Awards Won", icon: "⭐" },
                                    { number: "99%", label: "Happy Clients", icon: "😊" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center group hover-lift">
                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-500">
                                            {stat.icon}
                                        </div>
                                        <div className="text-4xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Scroll Indicator */}
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                            <div className="flex flex-col items-center space-y-4">
                                <span className="text-white text-lg font-semibold bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                                    Scroll to Discover Magic
                                </span>
                                <div className="w-8 h-14 border-3 border-white/70 rounded-full flex justify-center relative">
                                    <div className="w-1.5 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>



            {/* Enhanced Private Events Section */}
            <section className="relative">
                <Parallax
                    blur={2}
                    bgImage="https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    bgImageAlt="Luxury Event"
                    strength={400}
                    className="min-h-screen"
                >
                    <div className="min-h-screen flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-blue-900/40 to-emerald-900/40">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(56,189,248,0.3)_0%,transparent_50%)] animate-float"></div>
                        </div>

                        {/* Enhanced Floating Event Icons */}
                        <div className="absolute inset-0">
                            {['🎉', '💫', '🌟', '✨', '🎊', '🎇'].map((icon, index) => (
                                <div
                                    key={index}
                                    className="absolute text-4xl animate-float-3d opacity-70"
                                    style={{
                                        left: `${10 + index * 15}%`,
                                        top: `${15 + index * 12}%`,
                                        animationDelay: `${index * 1.5}s`
                                    }}
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>

                        <div className="relative z-20 text-center text-white px-4 max-w-7xl mx-auto py-20">
                            <div data-aos="zoom-in" data-aos-duration="2000">
                                {/* Enhanced Event Badge */}
                                <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-12 py-6 rounded-full text-2xl font-black mb-12 shadow-2xl animate-glow transform hover:scale-105 transition-all duration-500 border-2 border-cyan-300/30">
                                    <div className="w-4 h-4 bg-white rounded-full mr-4 animate-pulse"></div>
                                    🎊 EXCLUSIVE EVENTS & CELEBRATIONS
                                </div>

                                {/* Enhanced Event Title */}
                                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-12 leading-tight">
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                        Create
                                    </span>
                                    <span className="block text-white text-5xl sm:text-6xl md:text-7xl mt-6">
                                        Unforgettable
                                    </span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-6xl sm:text-7xl md:text-8xl mt-4">
                                        Moments
                                    </span>
                                </h2>

                                <p className="text-2xl sm:text-3xl text-gray-200 mb-16 leading-relaxed max-w-5xl mx-auto font-light bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                                    Transform your special occasions into legendary experiences with our
                                    bespoke event services, impeccable attention to detail, and unforgettable culinary journeys.
                                </p>

                                {/* Enhanced Event Type Cards */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
                                    {[
                                        {
                                            icon: "💍",
                                            title: "Wedding Celebrations",
                                            desc: "Elegant venues & custom menus",
                                            gradient: "from-pink-500 to-rose-500",
                                            features: ["Custom Menus", "Elegant Decor", "Professional Staff"]
                                        },
                                        {
                                            icon: "🎂",
                                            title: "Private Parties",
                                            desc: "Intimate gatherings & celebrations",
                                            gradient: "from-amber-500 to-orange-500",
                                            features: ["Personalized Service", "Premium Dining", "Memorable Experience"]
                                        },
                                        {
                                            icon: "💼",
                                            title: "Corporate Events",
                                            desc: "Professional & sophisticated",
                                            gradient: "from-blue-500 to-cyan-500",
                                            features: ["Business Catering", "Premium Setup", "Professional Service"]
                                        }
                                    ].map((event, index) => (
                                        <div
                                            key={index}
                                            className="group bg-white/15 backdrop-blur-2xl rounded-3xl p-10 border-2 border-white/20 hover:border-white/40 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                                            data-aos="flip-up"
                                            data-aos-delay={index * 200}
                                        >
                                            <div className={`w-24 h-24 bg-gradient-to-r ${event.gradient} rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mx-auto shadow-2xl`}>
                                                {event.icon}
                                            </div>
                                            <h3 className="text-3xl font-black mb-6 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-300 text-xl text-center leading-relaxed mb-6">
                                                {event.desc}
                                            </p>
                                            <div className="space-y-2">
                                                {event.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center space-x-3 text-amber-300">
                                                        <span className="text-lg">✓</span>
                                                        <span className="text-gray-200 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Enhanced Event CTA */}
                                {/* <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-black py-7 px-20 rounded-3xl text-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-2 border-cyan-300/30">
                                    Plan Your Extraordinary Event
                                </button> */}
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>
        </div>
    );
};

export default ParallaxComponent;