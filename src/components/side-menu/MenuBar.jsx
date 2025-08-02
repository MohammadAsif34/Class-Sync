import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useHybridNetworkStatus } from "../../hooks/useHybridNetworkStatus";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../../stores/features/menubar/menuSlice";
import MenuHeader from "./MenuHeader";
import { Link, useNavigate } from "react-router-dom";
import { AdminMenuItem, menuItem } from "../../assets/menuItem";
import MenuItem from "./MenuItem";
import { LogoutAPI } from "../../services/auth.action";
import { unSetUser } from "../../stores/features/user/userSlice";

const slideVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const MenuBar = () => {
  const isOnline = useHybridNetworkStatus();
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (link) => {
    dispatch(closeMenu());
    console.log("link", link);
    if (link == "") {
      toast.info("Coming soon...");
      return;
    }
    navigate(link);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await LogoutAPI();
      console.log("logout res ::> ", res);
      if (res.status == "SUCCESS") {
        dispatch(unSetUser());
        toast.success(res.message);
      } else {
        toast.success(res.message);
      }
    } catch (error) {
      console.log("error to logout ::> ", error.message);
    }
  };

  return (
    <AnimatePresence>
      <motion.aside
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-screen w-[90vw] sm:w-[350px] bg-white shadow-2xl flex flex-col  rounded-l-xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-4 py-3 pt-10 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h1 className="text-lg font-semibold text-gray-700">Menu</h1>
          <button
            onClick={() => dispatch(toggleMenu())}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        {/* Network Status */}
        {isOnline && (
          <div className="px-4 py-1 text-xs text-emerald-500 font-medium tracking-wide">
            ✅ You’re Online
          </div>
        )}

        {/* Profile Header */}
        <div className="border-y border-gray-100">
          <MenuHeader />
        </div>

        {/* Menu List */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 text-gray-700">
          <ul className="space-y-2">
            {menuItem?.map((item, idx) => (
              <MenuItem
                key={item?._id || idx}
                label={item?.label}
                icon={item?.icon}
                onClick={() => handleClick(item?.link)}
              />
            ))}
            {/* admin Actions */}
            {user?.isAuth && user?.user?.role === "admin" && (
              <div>
                <h1 className="px-2 font-bold">Admin</h1>
                {AdminMenuItem?.map((item, idx) => (
                  <MenuItem
                    key={item?._id || idx}
                    label={item?.label}
                    icon={item?.icon}
                    onClick={() => handleClick(item?.link)}
                  />
                ))}
              </div>
            )}
          </ul>
        </nav>

        {/* Footer Actions */}
        {user?.isAuth && (
          <motion.button
            onClick={handleLogout}
            className="w-full py-3 text-sm font-semibold text-rose-500 border-t border-gray-200 hover:bg-rose-50 transition"
            whileTap={{ scale: 0.97 }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
            Logout
          </motion.button>
        )}

        {/* Footer */}
        <div className="border-t border-gray-100">
          <Footer />
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default MenuBar;
