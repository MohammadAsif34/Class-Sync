import React from "react";
import { motion } from "framer-motion";
import ProfileAvatar from "../component/ProfileAvatar";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../stores/features/menubar/menuSlice";

const MenuHeader = () => {
  const isAuth = useSelector((s) => s.user.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(closeMenu());
    navigate("/auth");
  };

  return (
    <motion.div
      className="flex items-center justify-between px-4 py-3 bg-white shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Left: Guest + Login */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-gray-700 font-medium text-sm">Guest</p>
        {!isAuth && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleLogin}
            className="text-emerald-500 hover:text-emerald-400 transition text-sm cursor-pointer"
            title="Login"
          >
            <i className="fa-solid fa-right-to-bracket text-base"></i>
          </motion.button>
        )}
      </motion.div>

      {/* Right: Avatar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <ProfileAvatar src="" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default MenuHeader;
