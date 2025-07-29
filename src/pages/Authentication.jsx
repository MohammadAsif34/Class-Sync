import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header2 from "../components/component/Header2";
import RegisterForm from "../components/forms/RegisterForm";
import LoginForm from "../components/forms/LoginForm";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Header2 />
      <div className="px-4 py-8 min-h-screen bg-gray-50 flex justify-center items-start">
        <div className="w-full max-w-md ">
        {/* Toggle Buttons */}
        <div className="flex mb-6 bg-emerald-100 rounded-full p-1">
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              !isLogin
                ? "bg-white text-emerald-500 shadow"
                : "text-gray-500 hover:text-emerald-600"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              isLogin
                ? "bg-white text-emerald-500 shadow"
                : "text-gray-500 hover:text-emerald-600"
            }`}
          >
            Login
          </button>
        </div>

        {/* Animated Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "register"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Authentication;
