import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingCart, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Constants for better maintainability
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Our Menu", href: "/menu" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Contact Us", href: "/contact" },
];

const BRAND_CONFIG = {
  name: "Innova",
  logo: "🍽️", // Optional: Add an actual logo image here
};

const STYLING = {
  colors: {
    primary: "#FFD54F",
    background: "rgba(0, 0, 0, 0.95)",
    mobileBackground: "rgba(21, 21, 21, 0.98)",
  },
  breakpoints: {
    lg: 1024,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Active link styles with better organization
  const navLinkClasses = {
    desktop: {
      base: "px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-base flex items-center gap-2 relative group",
      active: "text-[#FFD54F] bg-white/5 border border-[#FFD54F]/30 shadow-lg",
      inactive: "text-white/90 hover:text-[#FFD54F] hover:bg-white/5 hover:border hover:border-[#FFD54F]/20",
    },
    mobile: {
      base: "block px-6 py-4 rounded-xl transition-all duration-300 font-semibold text-base border-b border-white/10 last:border-b-0",
      active: "text-[#FFD54F] bg-white/10 border-l-4 border-[#FFD54F]",
      inactive: "text-white/90 hover:text-[#FFD54F] hover:bg-white/5",
    },
  };

  const getNavLinkClass = ({ isActive }) => 
    `${navLinkClasses.desktop.base} ${
      isActive ? navLinkClasses.desktop.active : navLinkClasses.desktop.inactive
    }`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `${navLinkClasses.mobile.base} ${
      isActive ? navLinkClasses.mobile.active : navLinkClasses.mobile.inactive
    }`;

  // Login button component for reusability
  const LoginButton = ({ isMobile = false }) => (
    <NavLink to="/login">
      {({ isActive }) => (
        <button
          className={`flex items-center justify-center ${
            isMobile ? "w-full px-6 py-3 text-lg" : "px-6 py-2 text-base"
          } rounded-lg transition-all duration-300 font-semibold border ${
            isActive
              ? "bg-[#FFD54F] text-gray-900 border-[#FFD54F] shadow-lg"
              : "bg-transparent text-white border-white/30 hover:bg-[#FFD54F] hover:text-gray-900 hover:border-[#FFD54F] hover:scale-105"
          }`}
        >
          <User size={20} className={isMobile ? "mr-3" : "mr-2"} />
          Login
        </button>
      )}
    </NavLink>
  );

  // Cart component with badge
  const CartButton = () => (
    <Link to="/cart" className="relative group">
      <button className="relative p-2 text-white hover:text-[#FFD54F] transition-all duration-300 hover:scale-110">
        <ShoppingCart size={24} />
        <span className="absolute -top-1 -right-1 bg-[#FFD54F] text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
          0
        </span>
      </button>
      <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-900 text-white text-xs px-2 py-1 rounded mt-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 whitespace-nowrap">
        View Cart
      </div>
    </Link>
  );

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled 
          ? "bg-black/95 shadow-2xl py-2 border-b border-white/10" 
          : "bg-black/80 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <span className="text-2xl">{BRAND_CONFIG.logo}</span>
            <span className="text-3xl font-bold text-[#FFD54F] tracking-tight group-hover:scale-105 transition-transform duration-300">
              {BRAND_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.name}
                to={item.href}
                className={getNavLinkClass}
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFD54F] transition-all duration-300 group-hover:w-3/4"></div>
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <CartButton />
            
            <div className="hidden lg:block">
              <LoginButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl text-white hover:text-[#FFD54F] hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFD54F]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen 
            ? "max-h-96 opacity-100 bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-2xl" 
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={getMobileNavLinkClass}
            >
              {item.name}
            </NavLink>
          ))}
          
          <div className="pt-4 border-t border-white/10">
            <LoginButton isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}