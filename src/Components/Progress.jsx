import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Utensils, Star, Sparkles } from 'lucide-react';

// Enhanced Cutlery Spinner with Particle Effects
const EnhancedCutlerySpinner = ({ size = 80, color = "#F59E0B", secondaryColor = "#D97706" }) => {
  return (
    <div className="flex items-center justify-center relative">
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-50"
        style={{ 
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          width: size * 1.5,
          height: size * 1.5 
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting Particles */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${color}, ${secondaryColor})`,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${size * 0.4}px) rotate(-${angle}deg)`
            }}
            animate={{ 
              scale: [0.5, 1, 0.5],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Fork */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            rotate: -360,
            y: [0, -5, 0]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg width={size * 0.5} height={size * 0.7} viewBox="0 0 24 24" fill="none">
            <path
              d="M5 4V20M5 4C7 4 9 6 9 8V12M5 4C3 4 1 6 1 8V12C1 14 3 16 5 16M9 8V12C9 14 7 16 5 16"
              stroke={`url(#fork-gradient-${size})`}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 12V20"
              stroke={`url(#fork-gradient-${size})`}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={`fork-gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={secondaryColor} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Animated Knife */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            rotate: 360,
            y: [0, 5, 0]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg width={size * 0.5} height={size * 0.7} viewBox="0 0 24 24" fill="none">
            <path
              d="M19 4L13 14M19 4L15 20M19 4L5 4"
              stroke={`url(#knife-gradient-${size})`}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13 14L9 20"
              stroke={`url(#knife-gradient-${size})`}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={`knife-gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={secondaryColor} />
                <stop offset="100%" stopColor={color} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Central Sparkle */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
        >
          <Sparkles size={size * 0.2} className={color} />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Enhanced Loading Spinner Component
export const EnhancedLoadingSpinner = ({ 
  type = "cutlery",
  size = 100,
  color = "#F59E0B",
  secondaryColor = "#D97706",
  text = "Preparing your culinary experience...",
  subtext = "Innova Restaurant",
  show = true,
  overlay = true,
  blur = true
}) => {
  const SpinnerComponent = {
    cutlery: EnhancedCutlerySpinner,
  }[type] || EnhancedCutlerySpinner;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
            overlay ? 'bg-slate-900/95' : 'bg-transparent'
          } ${blur ? 'backdrop-blur-md' : ''}`}
        >
          <SpinnerComponent size={size} color={color} secondaryColor={secondaryColor} />

          {/* Text Content */}
          {(text || subtext) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center space-y-2"
            >
              {text && (
                <motion.p
                  className="text-amber-200 font-semibold text-xl"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {text}
                </motion.p>
              )}
              {subtext && (
                <motion.p
                  className="text-amber-400/80 font-medium text-sm"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {subtext}
                </motion.p>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Progress = () => {
  return (
    <div>
      <EnhancedLoadingSpinner />
    </div>
  );
};

export default Progress;
