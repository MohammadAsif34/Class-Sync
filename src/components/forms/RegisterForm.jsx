import React, { useState } from "react";
import { motion } from "framer-motion";
import { RegisterAPI } from "../../services/auth.action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Login Form Data:", form);
    try {
      const res = await RegisterAPI(form);
      console.log("register api res ::>", res);
      if (res.status == "SUCCESS") {
        navigate("/");
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log("Error login form ::> ", error.message);
    } finally {
      setLoading(false);
    }
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
        <div className="  grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 block mb-1">Roll No.</label>
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
            <label className="text-sm text-gray-600 block mb-1">Program</label>
            <select
              id={name}
              name={name}
              value={"SA"}
              // onChange={}
              className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-xs focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              required
            >
              <option value="">Select {"Program"}</option>
              {[...Array(2)]?.map((opt, i) => (
                <option key={i} value={"opt"}>
                  {"opt"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Department
            </label>
            <select
              id={name}
              name={name}
              value={"SA"}
              // onChange={}
              className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              required
            >
              <option value="">Select {"label"}</option>
              {[...Array(2)]?.map((opt, i) => (
                <option key={i} value={"opt"}>
                  {"opt"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">Semester</label>
            <select
              id={name}
              name={name}
              value={"SA"}
              // onChange={}
              className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              required
            >
              <option value="">Select {"label"}</option>
              {[...Array(2)]?.map((opt, i) => (
                <option key={i} value={"opt"}>
                  {"opt"}
                </option>
              ))}
            </select>
          </div>
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
