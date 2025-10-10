import ParallaxComponent from '../Components/ParallaxComponent';
import useMenu from '../Components/Hooks/useMenu';
import { MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Menu = () => {
    const [menu, loading, error] = useMenu();

    // Handle loading state with animation
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-orange-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
                    <p className="text-xl font-semibold text-gray-700 animate-pulse">Loading culinary delights...</p>
                </div>
            </div>
        );
    }

    // Handle error state
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50">
                <div className="text-center p-8 bg-white rounded-2xl shadow-2xl">
                    <div className="text-6xl mb-4">😔</div>
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong</h2>
                    <p className="text-gray-600">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // Filter categories
    const offer = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');

    // Category configurations with better color contrast
    const categories = [
        {
            name: "TODAY'S OFFER",
            items: offer,
            gradient: "from-orange-500 to-red-500",
            textColor: "text-orange-700",
            bgGradient: "from-orange-50 to-red-50",
            icon: "🔥",
            description: "Special deals crafted just for you"
        },
        {
            name: "DESSERTS",
            items: desserts,
            gradient: "from-purple-500 to-pink-500",
            textColor: "text-purple-700",
            bgGradient: "from-purple-50 to-pink-50",
            icon: "🍰",
            description: "Sweet endings to perfect meals"
        },
        {
            name: "PIZZA",
            items: pizza,
            gradient: "from-amber-500 to-orange-500",
            textColor: "text-amber-700",
            bgGradient: "from-amber-50 to-orange-50",
            icon: "🍕",
            description: "Italian perfection in every slice"
        },
        {
            name: "SALADS",
            items: salads,
            gradient: "from-green-500 to-emerald-500",
            textColor: "text-green-700",
            bgGradient: "from-green-50 to-emerald-50",
            icon: "🥗",
            description: "Fresh, crisp, and healthy choices"
        },
        {
            name: "SOUPS",
            items: soups,
            gradient: "from-blue-500 to-cyan-500",
            textColor: "text-blue-700",
            bgGradient: "from-blue-50 to-cyan-50",
            icon: "🍲",
            description: "Warm comfort in every bowl"
        }
    ];

    return (
        <div className="overflow-hidden">


            <ParallaxComponent />

            {/* Animated Background Pattern */}
            <div className="fixed inset-0 -z-10 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZTdhMGEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {/* Floating Food Icons */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    {[].map((icon, index) => (
                        <div
                            key={index}
                            className="absolute text-2xl sm:text-3xl animate-float opacity-20"
                            style={{
                                left: `${10 + index * 15}%`,
                                top: `${20 + index * 10}%`,
                                animationDelay: `${index * 2}s`
                            }}
                        >
                            {icon}
                        </div>
                    ))}
                </div>

                {categories.map((category, categoryIndex) => (
                    <section
                        key={category.name}
                        className={`mb-20 lg:mb-28 relative rounded-3xl overflow-hidden bg-gradient-to-br ${category.bgGradient} p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/50`}
                        data-aos="fade-up"
                        data-aos-delay={categoryIndex * 100}
                    >
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                        </div>

                        {/* Category Header */}
                        <div className="text-center mb-12 lg:mb-16 relative z-10">
                            <div className="inline-flex items-center space-x-3 mb-6">
                                <span className="text-4xl sm:text-5xl animate-bounce filter drop-shadow-lg">
                                    {category.icon}
                                </span>
                                <div className={`h-1 w-16 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                            </div>

                            {/* Enhanced Description Badge with Better Contrast */}
                            <div
                                className="inline-flex items-center backdrop-blur-lg border border-white/50 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-glow"
                                style={{
                                    background: `linear-gradient(135deg, ${category.gradient.replace('from-', '').replace('to-', '').replace('-500', '-600')})`,
                                    color: 'white',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                }}
                            >
                                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                                {category.description}
                                <span className="ml-2 text-white/90">✨</span>
                            </div>

                            {/* Enhanced Category Title with Better Visibility */}
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                                <span
                                    className="bg-gradient-to-r bg-clip-text  drop-shadow-sm"
                                    style={{
                                        backgroundImage: `linear-gradient(135deg, ${category.gradient.replace('from-', '').replace('to-', '').replace('-500', '-600')})`,
                                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {category.name.split(' ')[0]}
                                </span>
                                {category.name.split(' ').slice(1).map((word, index) => (
                                    <span
                                        key={index}
                                        className={`${category.textColor} drop-shadow-sm`}
                                        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                                    >
                                        {' '}{word}
                                    </span>
                                ))}
                            </h2>

                            {/* Enhanced Separator */}
                            <div className={`w-32 h-1 bg-gradient-to-r ${category.gradient} mx-auto rounded-full opacity-80 shadow-lg`}></div>
                        </div>

                        {/* Menu Items Grid */}
                        {category.items.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                                {category.items.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="group bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Popular Badge */}
                                        {index < 2 && (
                                            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-6 animate-pulse z-20">
                                                🔥 Popular
                                            </div>
                                        )}

                                        {/* Item Image */}
                                        {item.image && (
                                            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>
                                        )}

                                        {/* Item Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-xl sm:text-2xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300 flex-1 pr-4 leading-tight">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
                                                {[...Array(5)].map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-amber-400 text-sm"
                                                        style={{
                                                            opacity: i < 4 ? 1 : 0.3,
                                                            filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))'
                                                        }}
                                                    >
                                                        ⭐
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300 bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                                            {item.recipe}
                                        </p>

                                        {/* Price and CTA */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-300/50">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse drop-shadow-sm">
                                                    ${item.price || '24.99'}
                                                </div>
                                                <div className="text-xs text-gray-600 bg-gray-200/80 px-2 py-1 rounded-full font-medium backdrop-blur-sm">
                                                    🕐 25min
                                                </div>
                                            </div>
                                            {/* Add to card button */}
                                            <button className="group/btn relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden border border-orange-400/30">
                                                <span className="relative z-10 flex items-center space-x-2 text-sm sm:text-base font-semibold">
                                                    <span>Add to Cart</span>
                                                    <svg className="w-4 h-4 group-hover/btn:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                                            </button>
                                        </div>

                                        {/* Dietary Tags */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {['Vegetarian', 'Gluten-Free', 'Spicy'].slice(0, 2).map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="bg-gray-200/80 text-gray-700 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-gray-300/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="text-center py-16 bg-white/70 backdrop-blur-lg rounded-2xl border border-white/50 shadow-xl"
                                data-aos="fade-up"
                            >
                                <div className="text-6xl mb-4 opacity-60 filter drop-shadow-lg">{category.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-700 mb-3">Coming Soon</h3>
                                <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                                    We're crafting something extraordinary for this category. Our chefs are working on new creations!
                                </p>
                                <div className="mt-6 inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                                    <span className="animate-pulse">✨</span>
                                    <span>Check back soon!</span>
                                </div>
                            </div>
                        )}
                    </section>
                ))}

                {/* Enhanced Call to Action Section */}
                <section className="text-center py-16 lg:py-20 relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 shadow-2xl border border-orange-600/30">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>

                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/15 to-amber-600/25 animate-pulse"></div>

                    {/* Floating Food Icons */}
                    <div className="absolute inset-0">
                        {[].map((icon, index) => (
                            <div
                                key={index}
                                className="absolute text-2xl sm:text-3xl animate-float opacity-40"
                                style={{
                                    left: `${10 + index * 15}%`,
                                    top: `${20 + index * 10}%`,
                                    animationDelay: `${index * 0.8}s`
                                }}
                            >
                                {icon}
                            </div>
                        ))}
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-4">
                        {/* Order Badge */}
                        <div className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 backdrop-blur-lg border border-amber-300/50 px-6 py-3 rounded-full text-sm font-bold text-white mb-6 shadow-lg animate-glow">
                            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                            🚀 Quick & Easy Ordering
                            <span className="ml-2">✨</span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                            Hungry for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                                Excellence
                            </span>
                            ?
                        </h2>

                        {/* Subheading */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-200 mb-4 drop-shadow-lg">
                            Your Culinary Journey Starts Here
                        </h3>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-orange-100 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                            Skip the wait and experience restaurant-quality meals delivered to your doorstep.
                            Fresh, fast, and fabulous - just a click away!
                        </p>

                        {/* Order Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                            {[
                                { icon: "⚡", feature: "Fast Delivery", desc: "30-45 mins" },
                                { icon: "🎯", feature: "Live Tracking", desc: "Real-time updates" },
                                { icon: "🌟", feature: "Fresh & Hot", desc: "Quality guaranteed" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="text-2xl mb-2">{item.icon}</div>
                                    <div className="text-white font-semibold text-sm">{item.feature}</div>
                                    <div className="text-orange-200 text-xs">{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/order">
                                <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden border-2 border-amber-400/30 shadow-xl">
                                    <span className="relative z-10 flex items-center space-x-3 text-lg">
                                        <span>Order Food Now</span>
                                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                            </Link>


                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-orange-200 text-sm">
                            <div className="flex items-center space-x-2">
                                <span>🛵</span>
                                <span>Free delivery over $25</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>⭐</span>
                                <span>4.8/5 from 2,000+ reviews</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>🕒</span>
                                <span>Open until 11 PM</span>
                            </div>
                        </div>
                    </div>


                </section>
            </div>




            <Helmet>
                <title>Innova || Menu</title>
            </Helmet>


            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(2deg); }
                    66% { transform: translateY(-5px) rotate(-1deg); }
                }
                @keyframes glow {
                    0%, 100% { 
                        box-shadow: 0 0 20px rgba(249, 115, 22, 0.4),
                                    0 0 40px rgba(249, 115, 22, 0.2);
                    }
                    50% { 
                        box-shadow: 0 0 30px rgba(249, 115, 22, 0.8),
                                    0 0 60px rgba(249, 115, 22, 0.4);
                    }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-glow { animation: glow 3s ease-in-out infinite; }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Menu;