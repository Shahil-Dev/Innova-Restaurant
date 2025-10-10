import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "./../Firebase/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const { signUp } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState({});
    const captchRef = useRef(null);
    const navigate = useNavigate();
    const password = watch("password", "");

    // High-quality Unsplash images for restaurant
    const restaurantImages = [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ];

    useEffect(() => {
        loadCaptchaEnginge(6);
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % restaurantImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleImageLoad = (index) => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
    };

    const handleVerifyCaptcha = () => {
        const user_captcha_value = captchRef.current.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false);
            Swal.fire({
                title: "✓ Captcha Verified!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
                background: '#1a202c',
                color: 'white'
            });
        } else {
            setDisabled(true);
            Swal.fire({
                icon: "error",
                title: "Invalid Captcha",
                text: "Please try again!",
                background: '#1a202c',
                color: 'white'
            });
        }
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await signUp(data.email, data.password);
            Swal.fire({
                title: "🎉 Welcome to Innova!",
                text: "Your account has been created successfully!",
                icon: "success",
                confirmButtonColor: "#D1A054",
                background: '#1a202c',
                color: 'white',
                draggable: true
            }).then(() => {
                navigate("/");
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.message || "Something went wrong!",
                confirmButtonColor: "#D1A054",
                background: '#1a202c',
                color: 'white'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        enter: { opacity: 0, scale: 1.1 },
        center: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.9,
            transition: {
                duration: 1.2,
                ease: "easeIn"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
            <Helmet>
                <title>Innova Restaurant | Create Your Account</title>
            </Helmet>

            {/* Animated Background Particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-amber-400 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Floating Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20"
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
                    animate={{
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <section className="relative min-h-screen py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-8 lg:mb-12"
                    >
                        <Link to="/" className="inline-block">
                            <motion.h1 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent exo mb-4 drop-shadow-2xl"
                            >
                                INNOVA
                            </motion.h1>
                        </Link>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg sm:text-xl text-amber-100 font-light max-w-2xl mx-auto"
                        >
                            Join our culinary family and unlock a world of exquisite flavors
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Image Gallery Section */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-64 sm:h-80 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImage}
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <img
                                        src={restaurantImages[currentImage]}
                                        alt="Innova Restaurant"
                                        className="w-full h-full object-cover"
                                        onLoad={() => handleImageLoad(currentImage)}
                                    />
                                    {/* Loading Skeleton */}
                                    {!imagesLoaded[currentImage] && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse flex items-center justify-center">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full"
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 flex items-end">
                                <div className="p-6 sm:p-8 text-white">
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-2xl sm:text-3xl font-bold mb-2"
                                    >
                                        {[
                                            "Luxury Dining Experience",
                                            "Award-Winning Cuisine", 
                                            "Elegant Ambiance",
                                            "Master Chef Creations",
                                            "Premium Service"
                                        ][currentImage]}
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="text-amber-200 text-sm sm:text-base"
                                    >
                                        {[
                                            "Michelin-star dining in an atmosphere of pure elegance",
                                            "Innovative dishes crafted with the finest ingredients",
                                            "Sophisticated setting perfect for any occasion",
                                            "Creative culinary masterpieces by our expert chefs",
                                            "Exceptional service that exceeds all expectations"
                                        ][currentImage]}
                                    </motion.p>
                                </div>
                            </div>

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 right-4 flex space-x-2">
                                {restaurantImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            currentImage === index 
                                                ? 'bg-amber-400 scale-125' 
                                                : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button 
                                onClick={() => setCurrentImage((prev) => (prev - 1 + restaurantImages.length) % restaurantImages.length)}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                            >
                                ‹
                            </button>
                            <button 
                                onClick={() => setCurrentImage((prev) => (prev + 1) % restaurantImages.length)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                            >
                                ›
                            </button>
                        </motion.div>

                        {/* Registration Form - Same as before but keeping it for completeness */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-full"
                        >
                            <div className="bg-gray-800/40 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-12">
                                <motion.div 
                                    variants={itemVariants}
                                    className="text-center mb-8"
                                >
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                                        Create Account
                                    </h2>
                                    <p className="text-amber-200/80 text-sm sm:text-base">
                                        Join thousands of food enthusiasts
                                    </p>
                                </motion.div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Name Field */}
                                    <motion.div variants={itemVariants} className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                                        <div className="relative">
                                            <input
                                                {...register("name", { 
                                                    required: "Full name is required",
                                                    minLength: {
                                                        value: 2,
                                                        message: "Name must be at least 2 characters"
                                                    }
                                                })}
                                                type="text"
                                                className="peer w-full px-6 py-4 text-white bg-gray-900/80 border border-white/10 rounded-2xl shadow-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent focus:outline-none transition-all duration-300 placeholder-transparent backdrop-blur-sm"
                                                placeholder="Full name"
                                            />
                                            <label className="absolute left-6 top-4 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-400 cursor-text">
                                                Full Name
                                            </label>
                                        </div>
                                        <AnimatePresence>
                                            {errors.name && (
                                                <motion.span 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-red-400 text-sm mt-2 block flex items-center"
                                                >
                                                    ⚠️ {errors.name.message}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div variants={itemVariants} className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                                        <div className="relative">
                                            <input
                                                {...register("email", { 
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^\S+@\S+$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                type="email"
                                                className="peer w-full px-6 py-4 text-white bg-gray-900/80 border border-white/10 rounded-2xl shadow-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent focus:outline-none transition-all duration-300 placeholder-transparent backdrop-blur-sm"
                                                placeholder="Email address"
                                            />
                                            <label className="absolute left-6 top-4 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-400 cursor-text">
                                                Email Address
                                            </label>
                                        </div>
                                        <AnimatePresence>
                                            {errors.email && (
                                                <motion.span 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-red-400 text-sm mt-2 block flex items-center"
                                                >
                                                    ⚠️ {errors.email.message}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Password Field */}
                                    <motion.div variants={itemVariants} className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                                        <div className="relative">
                                            <input
                                                {...register("password", { 
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password must be at least 6 characters"
                                                    }
                                                })}
                                                type={showPassword ? "text" : "password"}
                                                className="peer w-full px-6 py-4 pr-12 text-white bg-gray-900/80 border border-white/10 rounded-2xl shadow-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent focus:outline-none transition-all duration-300 placeholder-transparent backdrop-blur-sm"
                                                placeholder="Password"
                                            />
                                            <label className="absolute left-6 top-4 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-400 cursor-text">
                                                Password
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-400 transition-colors duration-200"
                                            >
                                                {showPassword ? "🙈" : "👁️"}
                                            </button>
                                        </div>
                                        <AnimatePresence>
                                            {errors.password && (
                                                <motion.span 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-red-400 text-sm mt-2 block flex items-center"
                                                >
                                                    ⚠️ {errors.password.message}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Captcha Section */}
                                    <motion.div 
                                        variants={itemVariants}
                                        className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                                    >
                                        <div className="flex flex-col items-center space-y-4">
                                            <LoadCanvasTemplate reloadColor="#F59E0B" />
                                            <input
                                                type="text"
                                                placeholder="Type the captcha above"
                                                className="w-full px-4 py-3 bg-gray-800/80 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300"
                                                ref={captchRef}
                                            />
                                            <motion.button
                                                type="button"
                                                onClick={handleVerifyCaptcha}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 w-full sm:w-auto"
                                            >
                                                Verify Captcha
                                            </motion.button>
                                        </div>
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.button
                                        variants={itemVariants}
                                        disabled={disabled || isLoading}
                                        type="submit"
                                        whileHover={!disabled ? { scale: 1.02, boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)" } : {}}
                                        whileTap={!disabled ? { scale: 0.98 } : {}}
                                        className={`w-full py-4 font-bold text-white rounded-2xl shadow-2xl transition-all duration-300 ${
                                            disabled || isLoading
                                                ? "bg-gray-600 cursor-not-allowed"
                                                : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                                        }`}
                                    >
                                        {isLoading ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                                            />
                                        ) : (
                                            <span className="flex items-center justify-center">
                                                🎉 Create Account
                                            </span>
                                        )}
                                    </motion.button>
                                </form>

                                <motion.div 
                                    variants={itemVariants}
                                    className="mt-8 text-center"
                                >
                                    <Link to="/login">
                                        <p className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                                            Already have an account?{" "}
                                            <span className="text-amber-400 font-semibold underline">
                                                Sign In Here
                                            </span>
                                        </p>
                                    </Link>
                                </motion.div>

                                {/* Features List */}
                                <motion.div 
                                    variants={itemVariants}
                                    className="mt-8 grid grid-cols-2 gap-4 text-center"
                                >
                                    {["Exclusive Offers", "Priority Booking", "Special Events", "Loyalty Rewards"].map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            whileHover={{ scale: 1.05 }}
                                            className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                                        >
                                            <div className="text-amber-400 text-sm font-semibold">{feature}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;