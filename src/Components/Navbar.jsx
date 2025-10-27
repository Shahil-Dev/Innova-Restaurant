import { useState, useEffect, useContext } from "react";
import { Menu, X, User, ShoppingCart, LogOut, Settings, ChefHat } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import useCard from "./Hooks/useCard";

// Constants for better maintainability

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Our Menu", href: "/order" },
  { name: "Order ", href: "/menu" },
  { name: "Contact Us", href: "/contact" },
];

const BRAND_CONFIG = {
  name: "INNOVA",
  logo: "🍽️",
};

const STYLING = {
  colors: {
    primary: "#F59E0B",
    secondary: "#D97706",
    background: "rgba(15, 23, 42, 0.95)",
    mobileBackground: "rgba(15, 23, 42, 0.98)",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const [card] = useCard()
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await logOut();
      setIsProfileOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Active link styles with better organization
  const navLinkClasses = {
    desktop: {
      base: "px-4 py-2 rounded-xl transition-all duration-300 font-semibold text-sm flex items-center gap-2 relative group overflow-hidden",
      active: "text-amber-400 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 shadow-lg shadow-amber-500/20",
      inactive: "text-gray-300 hover:text-amber-300 hover:bg-white/5 hover:border hover:border-amber-400/20 hover:shadow-lg",
    },
    mobile: {
      base: "block px-6 py-4 rounded-xl transition-all duration-300 font-semibold text-base border-b border-white/10 last:border-b-0",
      active: "text-amber-400 bg-white/10 border-l-4 border-amber-400",
      inactive: "text-gray-300 hover:text-amber-300 hover:bg-white/5",
    },
  };

  const getNavLinkClass = ({ isActive }) =>
    `${navLinkClasses.desktop.base} ${isActive ? navLinkClasses.desktop.active : navLinkClasses.desktop.inactive
    }`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `${navLinkClasses.mobile.base} ${isActive ? navLinkClasses.mobile.active : navLinkClasses.mobile.inactive
    }`;

  // Login button component for reusability
  const LoginButton = ({ isMobile = false }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink to="/login">
        {({ isActive }) => (
          <button
            className={`flex items-center justify-center ${isMobile ? "w-full px-6 py-3 text-lg" : "px-6 py-2.5 text-sm"
              } rounded-xl transition-all duration-300 font-semibold border-2 ${isActive
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-lg shadow-amber-500/30"
                : "bg-transparent text-white border-amber-400/50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20"
              }`}
          >
            <User size={18} className={isMobile ? "mr-3" : "mr-2"} />
            Login
          </button>
        )}
      </NavLink>
    </motion.div>
  );

  // Cart component with badge
  const CartButton = () => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative"
    >
      <Link to="/cart" className="relative group">
        <button className="relative p-2.5 text-gray-300 hover:text-amber-400 transition-all duration-300 bg-white/5 rounded-xl hover:bg-amber-500/10 border border-transparent hover:border-amber-400/30">
          <ShoppingCart size={22} />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg border border-amber-300"
          >
            {card.length}
          </motion.span>
        </button>
        <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg mt-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 whitespace-nowrap border border-gray-700 shadow-xl">
          View Cart
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-l border-t border-gray-700"></div>
        </div>
      </Link>
    </motion.div>
  );

  // User Profile Dropdown
  const UserProfileDropdown = () => (
    <AnimatePresence>
      {isProfileOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-14 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden z-50"
        >
          {/* User Info Section */}
          <div className="p-4 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={user?.photoURL || "/api/placeholder/40/40"}
                alt={user?.displayName || "User"}
                className="w-10 h-10 rounded-full border-2 border-amber-400 shadow-lg"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {user?.displayName || "Welcome Back!"}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <Link to="/dashboard">
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center w-full px-3 py-2.5 text-sm text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all duration-200 group"
              >
                <ChefHat size={16} className="mr-3 text-amber-400" />
                Dashboard
              </motion.button>
            </Link>




          </div>

          {/* Logout Section */}
          <div className="p-2 border-t border-gray-700/50">
            <motion.button
              whileHover={{ x: 5 }}
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200 group"
            >
              <LogOut size={16} className="mr-3" />
              Sign Out
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 backdrop-blur-xl ${isScrolled
        ? "bg-slate-900/95 shadow-2xl py-2 border-b border-white/10"
        : "bg-slate-900/80 py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.span
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                {BRAND_CONFIG.logo}
              </motion.span>
              <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent exo tracking-tighter">
                {BRAND_CONFIG.name}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink to={item.href} className={getNavLinkClass}>
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                    whileHover={{ width: "75%" }}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <CartButton />

            <div className="hidden lg:flex items-center space-x-3">
              {user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 p-1.5 rounded-2xl bg-white/5 hover:bg-amber-500/10 border border-transparent hover:border-amber-400/30 transition-all duration-300 group"
                  >
                    <motion.img
                      whileHover={{ rotate: 5 }}
                      src={user.photoURL ? user.photoURL : <CgProfile />}
                      alt={user.displayName}
                      className="w-8 h-8 rounded-full border-2 border-amber-400 shadow-lg"
                    />
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium text-white max-w-24 truncate">
                        {user.displayName?.split(' ')[0] || 'User'}
                      </span>
                      <motion.div
                        animate={{ rotate: isProfileOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-amber-400"
                      >
                        ▼
                      </motion.div>
                    </div>
                  </motion.button>
                  <UserProfileDropdown />
                </div>
              ) : (
                <LoginButton />
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2.5 rounded-xl text-gray-300 hover:text-amber-400 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 border border-transparent hover:border-amber-400/30"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink to={item.href} className={getMobileNavLinkClass}>
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-white/10">
                {user ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 bg-white/5 rounded-xl border border-amber-400/20"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <img
                        src={user.photoURL || "/api/placeholder/40/40"}
                        alt={user.displayName}
                        className="w-12 h-12 rounded-full border-2 border-amber-400"
                      />
                      <div>
                        <p className="text-white font-semibold">{user.displayName}</p>
                        <p className="text-amber-300 text-sm">{user.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link to="/dashboard">
                        <button className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-semibold transition-colors">
                          Dashboard
                        </button>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full py-2 px-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-400/30 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <LoginButton isMobile={true} />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for profile dropdown */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </motion.nav>
  );
}






