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
  X
} from 'lucide-react';
import { AuthContext } from '../Firebase/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);

  // Mock data for dashboard
  const statsData = [
    { 
      title: 'Total Revenue', 
      value: '$12,426', 
      change: '+12%', 
      icon: DollarSign, 
      color: 'from-green-500 to-emerald-600',
      trend: 'up'
    },
    { 
      title: 'Orders Today', 
      value: '48', 
      change: '+8%', 
      icon: ShoppingCart, 
      color: 'from-blue-500 to-cyan-600',
      trend: 'up'
    },
    { 
      title: 'Active Customers', 
      value: '1,243', 
      change: '+5%', 
      icon: Users, 
      color: 'from-purple-500 to-indigo-600',
      trend: 'up'
    },
    { 
      title: 'Avg. Rating', 
      value: '4.8', 
      change: '+0.2', 
      icon: Star, 
      color: 'from-amber-500 to-orange-600',
      trend: 'up'
    }
  ];

  const recentOrders = [
    { id: 1, customer: 'John Smith', items: 3, total: 45.99, status: 'Completed', time: '2 min ago' },
    { id: 2, customer: 'Sarah Johnson', items: 2, total: 32.50, status: 'Preparing', time: '15 min ago' },
    { id: 3, customer: 'Mike Davis', items: 4, total: 68.75, status: 'Pending', time: '25 min ago' },
    { id: 4, customer: 'Emily Wilson', items: 1, total: 18.99, status: 'Completed', time: '1 hour ago' },
    { id: 5, customer: 'Chris Brown', items: 2, total: 42.25, status: 'Completed', time: '2 hours ago' }
  ];

  const menuItems = [
    { name: 'Truffle Pasta', price: 24.99, orders: 142, rating: 4.9 },
    { name: 'Wagyu Steak', price: 49.99, orders: 98, rating: 4.8 },
    { name: 'Lobster Bisque', price: 18.99, orders: 167, rating: 4.7 },
    { name: 'Chocolate Soufflé', price: 14.99, orders: 203, rating: 4.9 }
  ];

  const sidebarItems = [
    { name: 'Overview', icon: BarChart3, id: 'overview' },
    { name: 'Orders', icon: ShoppingCart, id: 'orders' },
    { name: 'Menu Items', icon: ChefHat, id: 'menu' },
    { name: 'Reservations', icon: Calendar, id: 'reservations' },
    { name: 'Customers', icon: Users, id: 'customers' },
    { name: 'Reviews', icon: Star, id: 'reviews' },
  
  ];

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate('/');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Preparing': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Pending': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

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

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Innova Restaurant | Dashboard</title>
      </Helmet>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: isSidebarOpen ? 0 : -300 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed lg:relative z-40 w-80 bg-slate-800/90 backdrop-blur-xl border-r border-white/10 h-full"
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <ChefHat className="text-white" size={24} />
              </div>
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
              <img
                src={user?.photoURL || "/api/placeholder/40/40"}
                alt={user?.displayName}
                className="w-12 h-12 rounded-2xl border-2 border-amber-400 shadow-lg"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate">{user?.displayName}</p>
                <p className="text-amber-300 text-sm truncate">{user?.email}</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-400/30 shadow-lg shadow-amber-500/10'
                    : 'text-gray-400 hover:text-amber-300 hover:bg-white/5'
                }`}
              >
                <item.icon size={20} />
                <span className="font-semibold">{item.name}</span>
              </motion.button>
            ))}
          </nav>

        
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-slate-800/50 backdrop-blur-xl border-b border-white/10 p-4 lg:p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-all duration-300 lg:hidden"
                >
                  {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <h1 className="text-2xl font-bold text-white capitalize">
                  {activeTab === 'overview' ? 'Dashboard Overview' : activeTab}
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button className="relative p-2 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-all duration-300">
                  <Bell size={22} />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold border border-red-400">
                      {notifications}
                    </span>
                  )}
                </button>

                {/* Quick Stats */}
                <div className="hidden lg:flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="text-amber-400 font-semibold">48</div>
                    <div className="text-gray-400 text-xs">Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-semibold">$1.2k</div>
                    <div className="text-gray-400 text-xs">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Dashboard Content */}
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 overflow-auto p-4 lg:p-6"
          >
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {statsData.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      variants={itemVariants}
                      className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:border-amber-400/30 transition-all duration-500 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                          <stat.icon className="text-white" size={24} />
                        </div>
                        <div className={`flex items-center space-x-1 text-sm font-semibold ${
                          stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          <TrendingUp size={16} />
                          <span>{stat.change}</span>
                        </div>
                      </div>
                      <h3 className="text-gray-400 text-sm font-semibold mb-2">{stat.title}</h3>
                      <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-1000 group-hover:scale-105`} 
                             style={{ width: '75%' }}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Charts and Tables Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {/* Recent Orders */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-white">Recent Orders</h2>
                      <button className="text-amber-400 hover:text-amber-300 text-sm font-semibold">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <motion.div
                          key={order.id}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-400/20 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                              <ShoppingCart className="text-white" size={16} />
                            </div>
                            <div>
                              <p className="text-white font-semibold">{order.customer}</p>
                              <p className="text-gray-400 text-sm">{order.items} items • ${order.total}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                            <p className="text-gray-400 text-sm mt-1">{order.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Popular Menu Items */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-white">Popular Items</h2>
                      <button className="text-amber-400 hover:text-amber-300 text-sm font-semibold">
                        View Menu
                      </button>
                    </div>
                    <div className="space-y-4">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-400/20 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                              <Award className="text-white" size={20} />
                            </div>
                            <div>
                              <p className="text-white font-semibold">{item.name}</p>
                              <p className="text-amber-400 font-semibold">${item.price}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 text-amber-400">
                              <Star size={16} className="fill-current" />
                              <span className="font-semibold">{item.rating}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{item.orders} orders</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl border border-amber-400/20 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Quick Actions</h3>
                      <p className="text-amber-200">Manage your restaurant efficiently</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                        Add New Item
                      </button>
                      <button className="px-6 py-3 bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400/10 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                        View Reports
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Other tabs can be implemented similarly */}
            {activeTab !== 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  {(() => {
                    const Icon = sidebarItems.find(item => item.id === activeTab)?.icon || BarChart3;
                    return <Icon className="text-white" size={32} />;
                  })()}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 capitalize">{activeTab} Page</h2>
                <p className="text-gray-400 mb-6">This section is under development</p>
                <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-semibold transition-all duration-300">
                  Coming Soon
                </button>
              </motion.div>
            )}
          </motion.main>
        </div>
      </div>
     
    </div>
  );
};

export default Dashboard;