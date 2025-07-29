import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "student", // default
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRoleChange = (e) => setForm({ ...form, role: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Data:", form);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-md mx-auto mt-5 p-8 bg-white rounded-2xl border border-emerald-300"
    >
      <h2 className="text-2xl font-semibold text-emerald-500 text-center mb-6">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm text-gray-600 block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:shadow-[0px_0px_15px_2px_rgba(52,211,153,0.4)] transition-all duration-500 "
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

        {/* Role Switcher */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={form.role === "student"}
              onChange={handleRoleChange}
              className="mr-1 "
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={form.role === "admin"}
              onChange={handleRoleChange}
              className="mr-1 "
            />
            Admin
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
