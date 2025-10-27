import React from "react";
import useCard from "../Components/Hooks/useCard";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ShoppingCart, Trash2, Plus, Minus, ChefHat, Sparkles, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Components/Hooks/useAxiosSecure";

const Shop = () => {
  const [card, refetch] = useCard();
  const axiosSecure = useAxiosSecure();
  // Calculate total price
  const totalPrice = card?.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0) || 0;

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

  const emptyStateVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring"
      }
    }
  };

  // Mock function for quantity updates
  const updateQuantity = (id, newQuantity) => {
    console.log(`Updating item ${id} quantity to ${newQuantity}`);
    // Implement your quantity update logic here
  };

  // Mock function for item removal
  const removeItem = (id) => {
    // console.log(`Removing item ${id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cards/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })






      }
    });

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 py-8">
      <Helmet>
        <title>Innova Restaurant | Your Cart</title>
      </Helmet>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-20"
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl shadow-2xl shadow-amber-500/30 mb-6"
          >
            <ShoppingCart className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Your Culinary Cart
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Review your selected delicacies and prepare for an exceptional dining experience
          </p>

          {/* Cart Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-200 shadow-lg">
              <ChefHat className="w-6 h-6 text-amber-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">{card?.length || 0}</div>
                <div className="text-sm text-gray-600">Items</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-200 shadow-lg">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">${totalPrice.toFixed(2)}</div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {card?.length > 0 ? (
                card.map((item, index) => (
                  <motion.div
                    key={item._id}
                    variants={itemVariants}
                    className="group bg-white/90 backdrop-blur-lg rounded-3xl p-6 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  >


                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Item Image */}
                      <div className="flex-shrink-0">
                        <div className="w-full sm:w-32 h-32 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
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
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300 leading-tight">
                              {item.name}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1 capitalize">
                              {item.category || "Main Course"}
                            </p>
                          </div>

                          <div className="text-right">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                            >
                              ${item.price}
                            </motion.div>
                            <div className="flex items-center space-x-1 text-gray-500 text-sm mt-1">
                              <Clock className="w-4 h-4" />
                              <span>25min</span>
                            </div>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                          <div className="flex items-center space-x-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}
                              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </motion.button>

                            <span className="text-lg font-semibold text-gray-800 min-w-8 text-center">
                              {item.quantity || 1}
                            </span>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                              className="w-8 h-8 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4 text-white" />
                            </motion.button>
                          </div>

                          {/* Remove Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => removeItem(item._id)}
                            className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-xl transition-all duration-300 border border-red-200"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-sm font-semibold">Remove</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                /* Empty State */
                <motion.div
                  variants={emptyStateVariants}
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
                    🛒
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-700 mb-4">Your cart is empty</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                    Discover our exquisite menu and add some culinary delights to your cart
                  </p>
                  <Link to="/menu">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg"
                    >
                      Explore Menu
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Order Summary Section */}
          {card?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 border border-white/60 shadow-xl sticky top-6">
                <h2 className="text-2xl font-black text-gray-800 mb-6">Order Summary</h2>

                {/* Order Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Items ({card.length})</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        ${(totalPrice * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 mb-6">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-6 h-6 text-amber-500" />
                    <div>
                      <div className="font-semibold text-amber-700">Free Delivery</div>
                      <div className="text-sm text-amber-600">30-45 minutes</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
                  >
                    Proceed to Checkout
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={refetch}
                    className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-bold py-4 rounded-2xl transition-all duration-300 border border-gray-300"
                  >
                    Refresh Cart
                  </motion.button>

                  <Link to="/menu" className="block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-transparent hover:bg-amber-50 text-amber-600 font-bold py-4 rounded-2xl transition-all duration-300 border border-amber-300"
                    >
                      Continue Shopping
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;