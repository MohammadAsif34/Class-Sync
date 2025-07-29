import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header2 = () => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="px-4 py-3 p t-10 bg-emerald-500 text-white flex justify-between items-center shadow-sm"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-sm font-medium hover:text-white/80 transition"
      >
        <i className="fa-solid fa-arrow-left text-sm mr-2"></i>
        Back
      </button>

      {/* Options Button */}
      <button className="hover:text-white/80 transition">
        <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
      </button>
    </motion.header>
  );
};

export default Header2;
