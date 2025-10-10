import React, { useState, useRef } from 'react';
import { FaClock, FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        // Handle form submission here
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants = {
        initial: { scale: 1, y: 0 },
        hover: {
            scale: 1.05,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: { scale: 0.95 }
    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">

            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-amber-800/10 animate-pulse"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-bounce"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hero min-h-screen relative"
                style={{
                    backgroundImage: "url(../../../../public/assets/contact/banner.jpg)",
                }}
            >
                <div className="hero-overlay bg-black/60"></div>
                <div className="hero-content text-neutral-content text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <motion.h1
                            className="mb-8 exo text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            CONTACT US
                        </motion.h1>
                        <motion.p
                            className="mb-8 text-xl text-gray-300"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Ready to experience culinary excellence? Let's connect!
                        </motion.p>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"
                        ></motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}

            </motion.div>

            {/* Visit Us Section */}
            <div ref={ref} className="relative max-w-6xl mx-auto px-4 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.p variants={itemVariants} className='text-amber-400 text-lg font-semibold mb-2'>
                        ---Visit Us---
                    </motion.p>
                    <motion.h1
                        variants={itemVariants}
                        className='text-5xl font-bold exo bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4'
                    >
                        OUR LOCATION
                    </motion.h1>
                    <motion.div
                        variants={itemVariants}
                        className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"
                    ></motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'
                >
                    {[
                        { icon: FaPhoneAlt, title: "Phone", content: "+91 12345 67890", color: "from-amber-500 to-yellow-500" },
                        { icon: FaLocationDot, title: "Location", content: "123 Main St, City, Country", color: "from-amber-600 to-yellow-600" },
                        { icon: FaClock, title: "Opening Hours", content: "Mon-Sun: 10:00 AM - 10:00 PM", color: "from-amber-700 to-yellow-700" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            initial="initial"
                            className="relative group"
                        >
                            <motion.div
                                variants={cardHoverVariants}
                                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl"
                            >
                                {/* Animated Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* Icon Header */}
                                <div className={`relative h-24 bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-white"
                                    >
                                        <item.icon className='w-12 h-12' />
                                    </motion.div>
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                </div>

                                {/* Content */}
                                <div className='relative p-8 text-center bg-gradient-to-b from-gray-900 to-black'>
                                    <h1 className='text-2xl font-bold exo text-white mb-3'>{item.title}</h1>
                                    <p className='text-gray-300 text-lg'>{item.content}</p>
                                </div>

                                {/* Border Glow */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md`}></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <div className='text-center mb-16'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                            className='text-amber-400 text-lg font-semibold mb-2'
                        >
                            ---Send Us a Message---
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1 }}
                            className='text-5xl font-bold exo bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4'
                        >
                            CONTACT FORM
                        </motion.h1>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ delay: 1.2 }}
                            className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"
                        ></motion.div>
                    </div>

                    <motion.section
                        variants={formVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-3xl blur-xl"></div>
                        <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 relative z-10">
                            <motion.fieldset
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-4 gap-8 p-12 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                            >
                                <div className="space-y-4 col-span-full lg:col-span-1">
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 1.4 }}
                                        className="font-medium text-2xl text-white exo"
                                    >
                                        Get In Touch
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 1.6 }}
                                        className="text-sm text-gray-400"
                                    >
                                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 1.8 }}
                                        className="flex space-x-4 pt-4"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer"
                                        >
                                            <FaMapMarkerAlt className="text-white" />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer"
                                        >
                                            <FaPhoneAlt className="text-white" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">
                                    {[
                                        { name: 'name', label: 'Full Name', type: 'text', col: 'col-span-full sm:col-span-3' },
                                        { name: 'email', label: 'Email Address', type: 'email', col: 'col-span-full sm:col-span-3' },
                                        { name: 'phone', label: 'Phone Number', type: 'tel', col: 'col-span-full sm:col-span-3' },
                                        { name: 'address', label: 'Address', type: 'text', col: 'col-span-full' },
                                        { name: 'city', label: 'City', type: 'text', col: 'col-span-full sm:col-span-3' },
                                        { name: 'message', label: 'Your Message', type: 'textarea', col: 'col-span-full' }
                                    ].map((field, index) => (
                                        <motion.div
                                            key={field.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 1.4 + index * 0.1 }}
                                            className={field.col}
                                        >
                                            <label htmlFor={field.name} className="text-sm font-medium text-gray-300 block mb-2">
                                                {field.label}
                                            </label>
                                            {field.type === 'textarea' ? (
                                                <textarea
                                                    id={field.name}
                                                    name={field.name}
                                                    rows="4"
                                                    value={formData[field.name]}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                                    placeholder={`Enter your ${field.label.toLowerCase()}...`}
                                                />
                                            ) : (
                                                <input
                                                    id={field.name}
                                                    name={field.name}
                                                    type={field.type}
                                                    value={formData[field.name]}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                                    placeholder={`Enter your ${field.label.toLowerCase()}...`}
                                                />
                                            )}
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 2.2 }}
                                        className="col-span-full pt-4"
                                    >
                                        <motion.button
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 px-8 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    <FaPaperPlane className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </motion.fieldset>
                        </form>
                    </motion.section>
                </motion.div>
            </div>

            <Helmet>
                <title>Innova || Contact</title>
            </Helmet>

        </div>
    );
};

export default Contact;