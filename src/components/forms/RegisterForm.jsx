import React, { useState } from "react";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Form Submitted:", form);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-md mx-auto mt-5 p-8 bg-white rounded-2xl border border-emerald-300 "
      // style={{ boxShadow: "0 0 15px 2px rgba(52, 211, 153, 0.4)" }} // emerald-400 glow
    >
      <h2 className="text-2xl font-semibold text-emerald-500 text-center mb-6">
        Register as Student
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm text-gray-600 block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:shadow-[0px_0px_15px_2px_rgba(52,211,153,0.4)] transition-all duration-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:shadow-[0px_0px_15px_2px_rgba(52,211,153,0.4)] transition-all duration-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:shadow-[0px_0px_15px_2px_rgba(52,211,153,0.4)] transition-all duration-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:shadow-[0px_0px_15px_2px_rgba(52,211,153,0.4)] transition-all duration-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Register
        </button>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
