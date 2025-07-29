import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../stores/features/menubar/menuSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// If using src/assets
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 10 }}
      className="px-4 py-3 pt-10 bg-emerald-500 flex justify-between items-center text-white shadow-sm"
    >
      {/* Left: Logo and Text */}
      <div className="flex items-center space-x-3">
        <Link to={"/"}>
          <img
            src="/ClassSync.png" // or use `logo` if imported
            alt="ClassSync Logo"
            className="w-12 h-12 object-contain rounded-lg"
          />
        </Link>
        <div>
          <p className="text-sm font-mono font-medium tracking-wide">
            Hi, Student
          </p>
          <h1 className="text-2xl font-bold font-sans tracking-tight">
            Class Sync
          </h1>
        </div>
      </div>

      {/* Right: Menu Icon */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: 5 }}
        onClick={() => dispatch(toggleMenu())}
        className="p-2 rounded-md hover:bg-emerald-600 transition"
        aria-label="Toggle menu"
      >
        <i className="fa-solid fa-bars text-xl"></i>
      </motion.button>
    </motion.header>
  );
};

export default Navbar;
