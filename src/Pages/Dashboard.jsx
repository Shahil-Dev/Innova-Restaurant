import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Users,
  DollarSign,
  ChefHat,
  Calendar,
  Star,
  TrendingUp,
  ShoppingCart,
  Clock,
  Award,
  Bell,
  Menu,
  X,
  Plus,
  Download,
  Filter,
  Search,
  Settings,
  LogOut,
  Eye,
  Edit,
  MoreVertical,
  Home,
  Package,
  Utensils,
  BookOpen
} from 'lucide-react';
import { AuthContext } from '../Firebase/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Enhanced mock data with more details
  const statsData = [
    {
      title: 'Total Revenue',
      value: '$12,426',
      change: '+12%',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      trend: 'up',
      description: 'Monthly revenue growth',
      progress: 75
    },
    {
      title: 'Orders Today',
      value: '48',
      change: '+8%',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-600',
      trend: 'up',
      description: 'Completed orders',
      progress: 60
    },
    {
      title: 'Active Customers',
      value: '1,243',
      change: '+5%',
      icon: Users,
      color: 'from-purple-500 to-indigo-600',
      trend: 'up',
      description: 'Registered customers',
      progress: 85
    },
    {
      title: 'Avg. Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: 'from-amber-500 to-orange-600',
      trend: 'up',
      description: 'Customer satisfaction',
      progress: 96
    }
  ];

  const recentOrders = [
    { id: 1, customer: 'John Smith', items: 3, total: 45.99, status: 'Completed', time: '2 min ago', table: 'T-12', type: 'Dine-in' },
    { id: 2, customer: 'Sarah Johnson', items: 2, total: 32.50, status: 'Preparing', time: '15 min ago', table: 'T-05', type: 'Dine-in' },
    { id: 3, customer: 'Mike Davis', items: 4, total: 68.75, status: 'Pending', time: '25 min ago', table: 'Online', type: 'Delivery' },
    { id: 4, customer: 'Emily Wilson', items: 1, total: 18.99, status: 'Completed', time: '1 hour ago', table: 'T-08', type: 'Dine-in' },
    { id: 5, customer: 'Chris Brown', items: 2, total: 42.25, status: 'Completed', time: '2 hours ago', table: 'Online', type: 'Takeaway' }
  ];

  const menuItems = [
    { name: 'Truffle Pasta', price: 24.99, orders: 142, rating: 4.9, category: 'Main Course', trend: 'up' },
    { name: 'Wagyu Steak', price: 49.99, orders: 98, rating: 4.8, category: 'Main Course', trend: 'up' },
    { name: 'Lobster Bisque', price: 18.99, orders: 167, rating: 4.7, category: 'Appetizer', trend: 'down' },
    { name: 'Chocolate Soufflé', price: 14.99, orders: 203, rating: 4.9, category: 'Dessert', trend: 'up' }
  ];

  const reservations = [
    { id: 1, customer: 'Alex Johnson', guests: 4, time: '7:30 PM', date: 'Today', status: 'Confirmed', table: 'T-04' },
    { id: 2, customer: 'Maria Garcia', guests: 2, time: '8:00 PM', date: 'Today', status: 'Pending', table: 'T-07' },
    { id: 3, customer: 'Robert Chen', guests: 6, time: '6:00 PM', date: 'Tomorrow', status: 'Confirmed', table: 'T-11' }
  ];

  const sidebarItems = [
    { name: 'Overview', icon: Home, id: 'overview', notification: 0 },
    { name: 'Orders', icon: Package, id: 'orders', notification: 5 },
    { name: 'Menu Items', icon: Utensils, id: 'menu', notification: 2 },
    { name: 'Reservations', icon: BookOpen, id: 'reservations', notification: 3 },
    { name: 'Customers', icon: Users, id: 'customers', notification: 0 },
    { name: 'Reviews', icon: Star, id: 'reviews', notification: 12 },
    { name: 'Settings', icon: Settings, id: 'settings', notification: 0 }
  ];

  const notificationsList = [
    { id: 1, title: 'New Order Received', message: 'Table 12 placed an order', time: '2 min ago', type: 'order' },
    { id: 2, title: 'Reservation Confirmed', message: 'Maria Garcia - 2 guests at 8:00 PM', time: '15 min ago', type: 'reservation' },
    { id: 3, title: 'New Review', message: '5-star rating from John Smith', time: '1 hour ago', type: 'review' }
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Preparing': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Pending': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Confirmed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getOrderTypeColor = (type) => {
    switch (type) {
      case 'Dine-in': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Delivery': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'Takeaway': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Enhanced animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const slideInVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Filtered data based on search and filters
  const filteredOrders = recentOrders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Helmet>
        <title>Innova Restaurant | Dashboard</title>
      </Helmet>

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />

        {/* Enhanced Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/60 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
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

      <div className="flex h-screen relative">
        {/* Mobile Overlay */}
        <AnimatePresence>
          {isSidebarOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
          )}
        </AnimatePresence>

        {/* Enhanced Sidebar */}
        <motion.div
          initial={false}
          animate={{ 
            x: isSidebarOpen ? 0 : -320,
            opacity: isSidebarOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed lg:relative z-50 w-72 sm:w-80 bg-slate-800/95 backdrop-blur-xl border-r border-white/10 h-full flex flex-col shadow-2xl
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0`}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <ChefHat className="text-white" size={24} />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-white">Innova Dashboard</h1>
                <p className="text-amber-400 text-sm">Premium Restaurant Management</p>
              </div>
            </motion.div>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={user?.photoURL || "/api/placeholder/40/40"}
                alt={user?.displayName}
                className="w-12 h-12 rounded-2xl border-2 border-amber-400 shadow-lg"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate">{user?.displayName}</p>
                <p className="text-amber-300 text-sm truncate">{user?.email}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <span className="text-green-400 text-xs">Online</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {sidebarItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobile) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-400/30 shadow-lg shadow-amber-500/10'
                    : 'text-gray-400 hover:text-amber-300 hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={20} />
                  <span className="font-semibold">{item.name}</span>
                </div>
                {item.notification > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      activeTab === item.id
                        ? 'bg-amber-500 text-white'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}
                  >
                    {item.notification}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-white/10">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogOut size={20} />
              <span className="font-semibold">Sign Out</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Enhanced Top Bar */}
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-slate-800/50 backdrop-blur-xl border-b border-white/10 p-4 lg:p-6 sticky top-0 z-30"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-all duration-300 lg:hidden"
                >
                  {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h1 className="text-2xl font-bold text-white capitalize">
                    {activeTab === 'overview' ? 'Dashboard Overview' : activeTab}
                  </h1>
                  <p className="text-gray-400 text-sm hidden sm:block">
                    Welcome back, {user?.displayName?.split(' ')[0] || 'Admin'}
                  </p>
                </motion.div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Search Bar - Hidden on mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hidden md:flex items-center space-x-3"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm w-48 lg:w-64 transition-all duration-300"
                    />
                  </div>

                  <motion.select
                    whileHover={{ scale: 1.05 }}
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-700/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </motion.select>
                </motion.div>

                {/* Mobile Search Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden p-2 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-all duration-300"
                >
                  <Search size={20} />
                </motion.button>

                {/* Notifications */}
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    className="relative p-2 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-all duration-300"
                  >
                    <Bell size={22} />
                    {notifications > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold border border-red-400"
                      >
                        {notifications}
                      </motion.span>
                    )}
                  </motion.button>

                  {/* Notification Dropdown */}
                  <AnimatePresence>
                    {isNotificationOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-12 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-50 overflow-hidden"
                      >
                        <div className="p-4 border-b border-white/10">
                          <h3 className="text-lg font-semibold text-white">Notifications</h3>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {notificationsList.map((notification, index) => (
                            <motion.div
                              key={notification.id}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                              className="p-4 border-b border-white/5 cursor-pointer transition-colors duration-200"
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-2 h-2 rounded-full mt-2 ${
                                  notification.type === 'order' ? 'bg-amber-500' :
                                  notification.type === 'reservation' ? 'bg-green-500' : 'bg-blue-500'
                                }`} />
                                <div className="flex-1">
                                  <p className="text-white font-semibold text-sm">{notification.title}</p>
                                  <p className="text-gray-400 text-xs mt-1">{notification.message}</p>
                                  <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="p-4 border-t border-white/10">
                          <button className="w-full text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors duration-200">
                            View All Notifications
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quick Stats - Hidden on mobile */}
                <div className="hidden lg:flex items-center space-x-6 text-sm">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-amber-400 font-semibold">48</div>
                    <div className="text-gray-400 text-xs">Orders</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-green-400 font-semibold">$1.2k</div>
                    <div className="text-gray-400 text-xs">Revenue</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Enhanced Dashboard Content */}
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 overflow-auto p-4 lg:p-6"
          >
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                  {statsData.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      variants={itemVariants}
                      className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-4 lg:p-6 hover:border-amber-400/30 transition-all duration-500 group cursor-pointer"
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}
                        >
                          <stat.icon className="text-white" size={20} />
                        </motion.div>
                        <div className={`flex items-center space-x-1 text-sm font-semibold ${
                          stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          <TrendingUp size={14} />
                          <span>{stat.change}</span>
                        </div>
                      </div>
                      <h3 className="text-gray-400 text-sm font-semibold mb-2">{stat.title}</h3>
                      <p className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</p>
                      <p className="text-gray-500 text-xs mb-3">{stat.description}</p>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-1000 group-hover:scale-105`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Charts and Tables Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {/* Recent Orders with Enhanced Features */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-4 lg:p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-white">Recent Orders</h2>
                        <p className="text-gray-400 text-sm">Latest customer orders</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-amber-400 hover:text-amber-300 text-sm font-semibold flex items-center space-x-2"
                        >
                          <Eye size={16} />
                          <span className="hidden sm:inline">View All</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-amber-500 hover:bg-amber-600 rounded-xl text-white transition-colors duration-200"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      {filteredOrders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="flex items-center justify-between p-3 lg:p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-400/20 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                              <ShoppingCart className="text-white" size={14} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-white font-semibold truncate">{order.customer}</p>
                              <p className="text-gray-400 text-sm">{order.items} items • ${order.total}</p>
                              <div className="flex items-center space-x-2 mt-1 flex-wrap gap-1">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                                  {order.status}
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getOrderTypeColor(order.type)}`}>
                                  {order.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">{order.time}</p>
                            <p className="text-gray-500 text-xs mt-1 hidden sm:block">{order.table}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Popular Menu Items with Enhanced Features */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-4 lg:p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-white">Popular Items</h2>
                        <p className="text-gray-400 text-sm">Best performing menu items</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-amber-400 hover:text-amber-300 text-sm font-semibold flex items-center space-x-2"
                        >
                          <Filter size={16} />
                          <span className="hidden sm:inline">Filter</span>
                        </motion.button>
                      </div>
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      {filteredMenuItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="flex items-center justify-between p-3 lg:p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-400/20 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                              <Award className="text-white" size={16} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-white font-semibold truncate">{item.name}</p>
                              <p className="text-amber-400 font-semibold">${item.price}</p>
                              <p className="text-gray-400 text-xs capitalize">{item.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 text-amber-400 justify-end">
                              <Star size={14} className="fill-current" />
                              <span className="font-semibold text-sm">{item.rating}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{item.orders} orders</p>
                            <div className={`flex items-center space-x-1 text-xs mt-1 ${
                              item.trend === 'up' ? 'text-green-400' : 'text-red-400'
                            }`}>
                              <TrendingUp size={10} className={item.trend === 'down' ? 'rotate-180' : ''} />
                              <span>{item.trend === 'up' ? '+12%' : '-5%'}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Additional Sections Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Upcoming Reservations */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-4 lg:p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-white">Upcoming Reservations</h2>
                        <p className="text-gray-400 text-sm">Today & Tomorrow</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-amber-400 hover:text-amber-300 text-sm font-semibold"
                      >
                        View Calendar
                      </motion.button>
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      {reservations.map((reservation, index) => (
                        <motion.div
                          key={reservation.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center justify-between p-3 lg:p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-400/20 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                              <Calendar className="text-white" size={14} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-white font-semibold truncate">{reservation.customer}</p>
                              <p className="text-gray-400 text-sm">{reservation.guests} guests • {reservation.time}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(reservation.status)}`}>
                              {reservation.status}
                            </span>
                            <p className="text-gray-400 text-sm mt-1 hidden sm:block">{reservation.table}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl border border-amber-400/20 p-4 lg:p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-2">Quick Actions</h2>
                        <p className="text-amber-200 text-sm">Manage your restaurant efficiently</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      {[
                        { icon: Plus, label: 'Add Item', color: 'from-green-500 to-emerald-500' },
                        { icon: BarChart3, label: 'Reports', color: 'from-blue-500 to-cyan-500' },
                        { icon: Users, label: 'Customers', color: 'from-purple-500 to-indigo-500' },
                        { icon: Download, label: 'Export', color: 'from-orange-500 to-red-500' }
                      ].map((action, index) => (
                        <motion.button
                          key={action.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 lg:p-4 bg-gradient-to-r ${action.color} rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 lg:space-x-3 justify-center text-sm lg:text-base`}
                        >
                          <action.icon size={18} />
                          <span>{action.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Other tabs placeholder */}
            {activeTab !== 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6 lg:p-8 text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6"
                >
                  {(() => {
                    const Icon = sidebarItems.find(item => item.id === activeTab)?.icon || BarChart3;
                    return <Icon className="text-white" size={28} />;
                  })()}
                </motion.div>
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-2 capitalize">{activeTab} Page</h2>
                <p className="text-gray-400 mb-6">This section is under development</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg"
                >
                  Coming Soon
                </motion.button>
              </motion.div>
            )}
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;