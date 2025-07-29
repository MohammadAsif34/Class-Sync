import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useHybridNetworkStatus } from "../../hooks/useHybridNetworkStatus";

const FeedbackForm = () => {
  const isOnline = useHybridNetworkStatus();

  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "5",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isOnline) {
      toast.warn("Please go Online!");
    }
    console.log("Feedback submitted:", form);
    // alert("Thank you for your feedback!");
    toast.success("Thank you for your Feedback!");
    setForm({ name: "", email: "", rating: "5", message: "" });
  };

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-emerald-100"
    >
      <h2 className="text-3xl font-semibold text-emerald-600 mb-2 text-center">
        Send Feedback
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        We value your thoughts. Please take a moment to share.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:shadow-[0_4px_24px_rgba(52,211,153,0.4)] transition"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:shadow-[0_4px_24px_rgba(52,211,153,0.4)] transition"
          required
        />
        <motion.select
          whileFocus={{ scale: 1.02 }}
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white focus:shadow-[0_4px_24px_rgba(52,211,153,0.4)] transition"
        >
          <option value="5">🌟 Excellent</option>
          <option value="4">👍 Good</option>
          <option value="3">😐 Average</option>
          <option value="2">👎 Poor</option>
          <option value="1">💢 Very Poor</option>
        </motion.select>
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Write your feedback here..."
          className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:shadow-[0_4px_24px_rgba(52,211,153,0.4)] transition"
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg transition focus:shadow-[0_4px_24px_rgba(52,211,153,0.4)]"
        >
          Submit Feedback
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FeedbackForm;
