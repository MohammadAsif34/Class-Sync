import React from "react";
import { motion } from "framer-motion";
import ProfileAvatar from "../component/ProfileAvatar";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../stores/features/menubar/menuSlice";
import { toast } from "react-toastify";

const MenuHeader = () => {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(closeMenu());
    navigate("/auth");
  };

  const handleUser = () => {
    console.log("user profile");
    if (user?.isAuth) {
      navigate(`/student/${user?.user?.rollno}`);
    } else {
      toast.warn("Please Login!");
    }
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
        <p className="text-gray-700 font-medium text-sm">
          {user?.user?.fullname || "Guest"}
        </p>
        {!user?.isAuth && (
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
        onClick={() => handleUser()}
      >
        <ProfileAvatar src={user?.user?.picture} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default MenuHeader;
