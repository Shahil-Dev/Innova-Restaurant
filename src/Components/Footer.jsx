import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Social Media Icons Component
    const SocialIcon = ({ href, children, label }) => (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            aria-label={label}
        >
            {children}
        </a>
    );

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZTdhMGEiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-5 animate-float-slow opacity-60">
                <span className="text-2xl">🍕</span>
            </div>
            <div className="absolute top-20 right-10 animate-float-medium opacity-40">
                <span className="text-3xl">🍔</span>
            </div>
            <div className="absolute bottom-20 left-10 animate-float-fast opacity-50">
                <span className="text-2xl">🍝</span>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="border-b border-white/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Stay Updated with <span className="text-orange-400">Innova</span>
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Subscribe to our newsletter for exclusive offers, new menu items, and special events.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-orange-500 focus:outline-none transition-colors duration-300 placeholder-gray-400"
                                />
                                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                    I
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                        Innova
                                    </h2>
                                    <p className="text-sm text-gray-400">Restaurant & Bar</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Experience culinary excellence with our innovative dishes crafted from the finest ingredients. 
                                Where tradition meets innovation in every bite.
                            </p>
                            <div className="flex items-center space-x-4">
                                <SocialIcon href="#" label="Facebook">
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </SocialIcon>
                                <SocialIcon href="#" label="Instagram">
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.865 3.75 13.714 3.75 12.417s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                                    </svg>
                                </SocialIcon>
                                <SocialIcon href="#" label="Twitter">
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </SocialIcon>
                                <SocialIcon href="#" label="YouTube">
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </SocialIcon>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Our Menu', path: '/menu' },
                                    { name: 'About Us', path: '/about' },
                                    { name: 'Gallery', path: '/gallery' },
                                    { name: 'Reservations', path: '/reservations' },
                                    { name: 'Special Offers', path: '/offers' },
                                    { name: 'Gift Cards', path: '/gift-cards' }
                                ].map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.path}
                                            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 text-orange-400 mt-1">
                                        📍
                                    </div>
                                    <div>
                                        <p className="text-gray-300">123 Gourmet Street</p>
                                        <p className="text-gray-300">Culinary District, CD 10101</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 text-orange-400">
                                        📞
                                    </div>
                                    <a href="tel:+11234567890" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                        +1 (123) 456-7890
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 text-orange-400">
                                        ✉️
                                    </div>
                                    <a href="mailto:info@innovarestaurant.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                                        info@innovarestaurant.com
                                    </a>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-200 mb-3">Opening Hours</h4>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Monday - Thursday</span>
                                        <span>11:00 AM - 10:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Friday - Saturday</span>
                                        <span>11:00 AM - 11:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>12:00 PM - 9:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Awards & Recognition */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-orange-400">Awards</h3>
                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-400">
                                    <div className="text-amber-400 text-lg mb-1">⭐ ⭐ ⭐ ⭐ ⭐</div>
                                    <p className="text-gray-300 text-sm">Best Fine Dining 2023</p>
                                    <p className="text-gray-400 text-xs">Culinary Excellence Awards</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-orange-400">
                                    <div className="text-amber-400 text-lg mb-1">🏆</div>
                                    <p className="text-gray-300 text-sm">Chef of the Year 2023</p>
                                    <p className="text-gray-400 text-xs">International Food Association</p>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-200 mb-3">We Accept</h4>
                                <div className="flex space-x-2">
                                    {['💳', '🅿️', '📱', '💎'].map((icon, index) => (
                                        <div key={index} className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-sm">
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-gray-400 text-sm">
                                © {currentYear} Innova Restaurant. All rights reserved.
                            </div>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
                                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
                                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Cookie Policy</a>
                                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Sitemap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(-3deg); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-6px) rotate(2deg); }
                }
                .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
                .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
            `}</style>
        </footer>
    );
};

export default Footer;