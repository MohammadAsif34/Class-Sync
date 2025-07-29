import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react"; // optional icon if image not available

const ProfileAvatar = ({ src = "", alt = "User Avatar" }) => {
  const isValidSrc = src && src.trim() !== "";

  return (
    <motion.div
      className="w-9 h-9 rounded-full overflow-hidden border border-gray-300 bg-gray-100 shadow-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {isValidSrc ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <User size={20} />
        </div>
      )}
    </motion.div>
  );
};

export default ProfileAvatar;
