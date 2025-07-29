import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OnBoardingPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    localStorage.setItem("isOnboarded", "true");
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen max-w-sm mx-auto flex flex-col justify-center items-center px-4 py-6 bg-[#F8FBF8] text-gray-700"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6"
      >
        <img
          src="/ClassSync.png"
          alt="ClassSync Logo"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="text-2xl font-bold text-emerald-600">
          Welcome 👋 Class Sync
        </h1>

        <p className="text-base sm:text-lg leading-relaxed">
          This app is designed to help students of{" "}
          <span className="font-semibold text-emerald-500">
            Aliah University
          </span>{" "}
          view their basic daily college routine.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="bg-white shadow p-4 rounded-xl border border-gray-200 text-sm text-left"
        >
          <p className="mb-2 font-medium text-gray-800">Important Notice:</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-600">
            <li>No data is collected.</li>
            <li>No permissions are required.</li>
            <li>
              This app works offline and online for data updates as per user
              preference.
            </li>
          </ul>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-6 w-full py-2 px-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition"
          onClick={handleContinue}
        >
          Get Start ! 🎉
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default OnBoardingPage;
