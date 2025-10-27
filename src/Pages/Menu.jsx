import ParallaxComponent from '../Components/ParallaxComponent';
import useMenu from '../Components/Hooks/useMenu';
import { MdArrowRightAlt } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import useCard from '../Components/Hooks/useCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, Star, Clock, Zap, ChefHat } from 'lucide-react';

const Menu = () => {
    const [menu, loading, error] = useMenu();
    // Remove refetch if it's not working, we'll handle cart updates differently
    const cartData = useCard(); // This might return data differently
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    
    // Enhanced state management
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('popular');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [cartAnimations, setCartAnimations] = useState({});
    const [cartItems, setCartItems] = useState([]); // Local cart state

    // Enhanced loading state with better animation
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <motion.div
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1.5, repeat: Infinity }
                        }}
                        className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    >
                        <ChefHat className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xl font-semibold text-gray-700"
                    >
                        Preparing culinary delights...
                    </motion.p>
                </motion.div>
            </div>
        );
    }

    // Enhanced error state
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-red-50">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 max-w-md"
                >
                    <motion.div
                        animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, -5, 5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl mb-4"
                    >
                        😔
                    </motion.div>
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong</h2>
                    <p className="text-gray-600 mb-6">{error?.message || 'Failed to load menu'}</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg"
                    >
                        Try Again
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    // Enhanced data handling with animations - FIXED refetch issue
    const handleData = async (food) => {
        console.log('Adding to cart:', food);

        // Add click animation
        setCartAnimations(prev => ({ ...prev, [food._id]: true }));
        setTimeout(() => {
            setCartAnimations(prev => ({ ...prev, [food._id]: false }));
        }, 1000);

        if (user && user.email) {
            const cardItem = {
                menuId: food._id,
                email: user.email,
                name: food.name,
                image: food.image,
                price: food.price,
                category: food.category
            };

            try {
                const res = await axios.post(`${import.meta.env.VITE_LINK}/card`, cardItem);
                console.log('Cart response:', res.data);
                
                if (res.data.insertedId) {
                    // Update local cart state
                    setCartItems(prev => [...prev, { ...cardItem, _id: res.data.insertedId }]);
                    
                    // Enhanced success alert
                    Swal.fire({
                        title: `
                            <div class="flex flex-col items-center space-y-4">
                                <div class="relative">
                                    <div class="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/30 custom-bounce-scale">
                                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <div class="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg custom-float">
                                        <span class="text-lg">${food.emoji || ""}</span>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <h3 class="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                                        Successfully Added!
                                    </h3>
                                    <p class="text-gray-700 text-lg font-semibold">"${food.name}"</p>
                                    <p class="text-gray-500 text-sm mt-1">Added to your cart successfully</p>
                                </div>
                            </div>
                        `,
                        icon: false,
                        showConfirmButton: true,
                        confirmButtonText: `
                            <div class="flex items-center space-x-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                <span>View Cart</span>
                            </div>
                        `,
                        showCancelButton: true,
                        cancelButtonText: `
                            <div class="flex items-center space-x-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                                <span>Continue Browsing</span>
                            </div>
                        `,
                        buttonsStyling: false,
                        customClass: {
                            popup: 'custom-success-popup bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl border border-green-200 shadow-2xl shadow-green-500/20 backdrop-blur-sm max-w-md mx-4',
                            title: 'mb-0',
                            confirmButton: 'swal-success-confirm-btn w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 transform mb-2',
                            cancelButton: 'swal-success-cancel-btn w-full px-8 py-4 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-2xl border border-gray-300 shadow hover:shadow-gray-400/20 transition-all duration-300 hover:scale-105 transform',
                            actions: 'flex flex-col w-full gap-3 mt-6 px-4',
                            container: 'flex items-center justify-center min-h-screen'
                        },
                        showClass: {
                            popup: 'animate__animated animate__zoomIn animate__faster'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__zoomOut animate__faster'
                        },
                        background: 'rgba(15, 23, 42, 0.9)',
                        backdrop: `rgba(15, 23, 42, 0.9)`,
                        width: 'auto',
                        padding: '0',
                        grow: 'false',
                        position: 'center',
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: () => {
                            const confettiCount = 25;
                            const popup = document.querySelector('.swal2-popup');
                            
                            if (popup) {
                                for (let i = 0; i < confettiCount; i++) {
                                    const confetti = document.createElement('div');
                                    confetti.className = 'custom-confetti';
                                    confetti.style.cssText = `
                                        position: absolute;
                                        width: 8px;
                                        height: 8px;
                                        background: ${i % 4 === 0 ? '#10b981' : i % 4 === 1 ? '#059669' : i % 4 === 2 ? '#f59e0b' : '#d97706'};
                                        top: -20px;
                                        left: ${Math.random() * 100}%;
                                        border-radius: 2px;
                                        animation: custom-confetti-fall ${1 + Math.random() * 2}s linear forwards;
                                        z-index: 1000;
                                    `;
                                    popup.appendChild(confetti);
                                }
                            }
                        },
                        willClose: () => {
                            // Clean up confetti
                            const confettiElements = document.querySelectorAll('.custom-confetti');
                            confettiElements.forEach(confetti => confetti.remove());
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/cart");
                        }
                    });

                    // Try to call refetch if it exists and is a function
                    if (cartData && typeof cartData.refetch === 'function') {
                        cartData.refetch();
                    }
                }
            } catch (err) {
                console.error("Error adding item to cart:", err);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to add item to cart. Please try again.',
                    icon: 'error',
                    confirmButtonColor: '#f59e0b'
                });
            }
        } else {
            // Enhanced login required alert
            Swal.fire({
                title: '<div class="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">🔐 Login Required</div>',
                html: `
                    <div class="text-center space-y-4">
                        <div class="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg custom-pulse">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>
                        <p class="text-gray-700 font-semibold text-lg">Please login to add items to your cart</p>
                        <p class="text-gray-500 text-sm">Join our culinary journey to access exclusive features</p>
                    </div>
                `,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '🎉 Login Now',
                cancelButtonText: '👋 Browse Menu',
                confirmButtonColor: '#f59e0b',
                cancelButtonColor: '#6b7280',
                background: 'rgba(255, 255, 255, 0.95)',
                backdrop: 'rgba(15, 23, 42, 0.9)',
                customClass: {
                    popup: 'rounded-3xl shadow-2xl border border-amber-200 backdrop-blur-sm',
                    confirmButton: 'rounded-xl font-semibold shadow-lg hover:shadow-amber-500/30 transition-all px-8 py-3',
                    cancelButton: 'rounded-xl font-semibold transition-all px-8 py-3'
                },
                showClass: {
                    popup: 'animate__animated animate__fadeInUp'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
            });
        }
    };

    // Enhanced filtering and search functionality
    const categories = [
        { value: 'all', label: 'All Items', icon: '🍽️', count: menu?.length || 0 },
        { value: 'offered', label: "Today's Offer", icon: '🔥', count: menu?.filter(item => item.category === 'offered').length || 0 },
        { value: 'dessert', label: 'Desserts', icon: '🍰', count: menu?.filter(item => item.category === 'dessert').length || 0 },
        { value: 'pizza', label: 'Pizza', icon: '🍕', count: menu?.filter(item => item.category === 'pizza').length || 0 },
        { value: 'salad', label: 'Salads', icon: '🥗', count: menu?.filter(item => item.category === 'salad').length || 0 },
        { value: 'soup', label: 'Soups', icon: '🍲', count: menu?.filter(item => item.category === 'soup').length || 0 },
    ];

    const filteredMenu = (menu || []).filter(item => {
        const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.recipe?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Enhanced sorting with safe property access
    const sortedMenu = [...filteredMenu].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return (a.price || 0) - (b.price || 0);
            case 'price-high':
                return (b.price || 0) - (a.price || 0);
            case 'name':
                return (a.name || '').localeCompare(b.name || '');
            case 'popular':
            default:
                return (b.popularity || 0) - (a.popularity || 0);
        }
    });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 overflow-hidden">
            <Helmet>
                <title>Innova Restaurant | Menu</title>
            </Helmet>

            <ParallaxComponent />

            {/* Enhanced Search and Filter Section */}
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-orange-200/50 shadow-lg"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative flex-1 max-w-2xl w-full"
                        >
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for dishes, ingredients..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/90 border border-orange-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                            />
                            {searchTerm && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    ✕
                                </motion.button>
                            )}
                        </motion.div>

                        {/* Filter Controls */}
                        <div className="flex gap-3 w-full lg:w-auto">
                            <motion.select
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 bg-white/90 border border-orange-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name: A to Z</option>
                            </motion.select>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center space-x-2"
                            >
                                <Filter className="w-4 h-4" />
                                <span>Filters</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Category Filters */}
                    <AnimatePresence>
                        {isFilterOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 overflow-hidden"
                            >
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <motion.button
                                            key={category.value}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedCategory(category.value)}
                                            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                                                selectedCategory === category.value
                                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                                    : 'bg-white/90 text-gray-700 border border-orange-200 hover:bg-orange-50'
                                            }`}
                                        >
                                            <span>{category.icon}</span>
                                            <span>{category.label}</span>
                                            <span className={`px-2 py-1 rounded-full text-xs ${
                                                selectedCategory === category.value
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-orange-100 text-orange-600'
                                            }`}>
                                                {category.count}
                                            </span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.section>

            {/* Enhanced Menu Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8 text-center"
                >
                    <p className="text-gray-600">
                        Showing <span className="font-semibold text-orange-600">{sortedMenu.length}</span> of <span className="font-semibold">{menu?.length || 0}</span> items
                        {searchTerm && (
                            <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
                        )}
                    </p>
                </motion.div>

                {/* Menu Grid */}
                {sortedMenu.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {sortedMenu.map((item, index) => (
                            <motion.div
                                key={item._id}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white/80 backdrop-blur-lg rounded-3xl p-6 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Cart Animation Overlay */}
                                <AnimatePresence>
                                    {cartAnimations[item._id] && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 2, opacity: 0 }}
                                            className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl z-10 flex items-center justify-center"
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                                                transition={{ duration: 1 }}
                                                className="text-4xl"
                                            >
                                                ✅
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Popular Badge */}
                                {index < 3 && (
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20 flex items-center space-x-1"
                                    >
                                        <Zap className="w-3 h-3" />
                                        <span>Popular</span>
                                    </motion.div>
                                )}

                                {/* Item Image */}
                                <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 relative">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Item Content */}
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300 flex-1 pr-4 leading-tight">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
                                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                                            <span className="text-sm font-semibold text-gray-700">4.8</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                        className="text-gray-600 leading-relaxed text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
                                    >
                                        {item.recipe}
                                    </motion.p>

                                    {/* Price and Info */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                                        <div className="flex items-center space-x-4">
                                            <motion.span
                                                whileHover={{ scale: 1.1 }}
                                                className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                                            >
                                                ${item.price}
                                            </motion.span>
                                            <div className="flex items-center space-x-1 text-gray-500 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>25min</span>
                                            </div>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleData(item)}
                                            className="group/btn relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 overflow-hidden border border-orange-400/30 shadow-lg hover:shadow-orange-500/30"
                                        >
                                            <span className="relative z-10 flex items-center space-x-2 text-sm font-semibold">
                                                <span>Add to Cart</span>
                                                <motion.svg
                                                    animate={{ x: [0, 4, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </motion.svg>
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                                            />
                                        </motion.button>
                                    </div>

                                    {/* Dietary Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {['Vegetarian', 'Gluten-Free', 'Spicy'].slice(0, 2).map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200/50"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    /* Enhanced Empty State */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 bg-white/70 backdrop-blur-lg rounded-3xl border border-white/50 shadow-2xl"
                    >
                        <motion.div
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-8xl mb-6 opacity-60"
                        >
                            🔍
                        </motion.div>
                        <h3 className="text-3xl font-bold text-gray-700 mb-4">No items found</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                            {searchTerm 
                                ? `We couldn't find any items matching "${searchTerm}". Try adjusting your search or filters.`
                                : 'No items available in this category. Check back soon for new additions!'
                            }
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('all');
                            }}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg"
                        >
                            Clear Filters
                        </motion.button>
                    </motion.div>
                )}
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                @keyframes custom-bounce-scale {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                @keyframes custom-float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(5deg); }
                    66% { transform: translateY(-5px) rotate(-5deg); }
                }
                @keyframes custom-confetti-fall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                @keyframes custom-pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .custom-bounce-scale {
                    animation: custom-bounce-scale 2s ease-in-out infinite;
                }
                .custom-float {
                    animation: custom-float 3s ease-in-out infinite;
                }
                .custom-confetti {
                    animation: custom-confetti-fall 3s linear forwards;
                }
                .custom-pulse {
                    animation: custom-pulse 2s ease-in-out infinite;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Menu;