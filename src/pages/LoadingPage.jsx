import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="w-30 h-30 rounded-full overflow-hidden shadow-lg mb-6"
      >
        <img
          src="/ClassSync.png"
          alt="ClassSync Logo"
          className="object-cover w-full h-full shadow-xl"
        />
      </motion.div>
      <motion.div
        className="flex items-center space-x-3 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-emerald-600">
          Welcome 👋 Class Sync
        </h1>
      </motion.div>

      {/* Spinner */}
      <motion.div
        className="w-12 h-12 border-[6px] border-emerald-500 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Static Loading Text */}
      <motion.p
        className="mt-6 text-gray-600 text-base font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Loading your routine...
      </motion.p>
    </div>
  );
};

export default LoadingPage;
