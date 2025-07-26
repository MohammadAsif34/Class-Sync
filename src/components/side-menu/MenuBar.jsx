import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../../context/CreateContext";
import AvatarProfile from "../component/AvatarProfile";
import { toast } from "react-toastify";
import { useHybridNetworkStatus } from "../../hooks/useHybridNetworkStatus";

const MenuBar = () => {
  const slideVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  const { setMenu } = useApp();

  const isOnline = useHybridNetworkStatus();
  const handleLogin = async () => {
    console.log("isOnline ::> ", isOnline);
    if (!isOnline) {
      toast.error("You are offline");
      return;
    }

    toast.warn("You are Not Authorize!");
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={` h-screen bg-[#F8FBF8]  shadow-lg flex flex-col `}
        >
          <div className="px-2 py-1 border flex justify-between items-center">
            <button onClick={() => setMenu(false)}>
              <i className="fa-solid fa-close"></i>
            </button>
          </div>
          <div className=" py-2 px-4 flex justify-between items-center relative border">
            <p className="font-semibold">
              {"Guest"}

              <button
                className="px-2 py-1 text-emerald-400 active:text-emerald-300 cursor-pointer"
                onClick={() => handleLogin()}
              >
                <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            </p>
            <AvatarProfile src={""} />
          </div>
          <hr className="text-gray-300" />

          {/* offline  */}
          {!isOnline && <div>you are Offline</div>}

          {/* online  */}
          {/* Menu item  */}
          <div className="w-full p-2  flex-1 ">{isOnline && <div></div>}</div>

          {/* Footer  */}
          <hr className="text-gray-300" />
          <div className="py-2 text-[10px] text-center text-gray-400">
            <p>&copy; 2025 | Routine@App</p>
            <p>Developed By: Mohammad Asif</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MenuBar;
