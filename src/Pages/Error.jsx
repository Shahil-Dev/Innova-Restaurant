import React from 'react';
import lottie_error from "../../public/assets/Lottie/404_error.json"
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate();

    const handleGoBack = () => navigate(-1);
    const handleGoHome = () => navigate('/');
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Error code and message */}


                {/* Lottie animation */}
                <div className="mb-8 mx-auto w-full max-w-md">
                    <Lottie animationData={lottie_error} loop={true} />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button
                        onClick={handleGoBack}
                        className="group relative flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400 min-w-[200px]"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors duration-300">
                            Go Back
                        </span>
                    </button>

                    <button
                        onClick={handleGoHome}
                        className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 min-w-[200px]"
                    >
                        <span className="font-semibold">Go Home</span>
                        <svg
                            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </button>
                </div>

                {/* Additional help text */}

            </div>

            {/* Footer */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <p className="text-xs text-gray-400">
                    Error 404 • Page Not Found
                </p>
            </div>
        </div>
    );
};

export default Error;





