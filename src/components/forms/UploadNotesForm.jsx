import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { UploadNotesAPI } from "../../services/notes.action";
import { useSelector } from "react-redux";

const UploadNotesEmeraldForm = () => {
  const user = useSelector((s) => s.user.user);
  const [form, setForm] = useState({
    title: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.file) {
      toast.warn("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      console.log("upload notes ::>", form);
      // Simulate upload
      const res = await UploadNotesAPI(form, user);
      console.log("notes form res ::> ", res);
      toast.success("Notes uploaded successfully!");
      setForm({ title: "", file: null });
    } catch {
      toast.error("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-xl border border-emerald-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
        <i className="fas fa-upload"></i>
        Upload Notes
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            <i className="fas fa-heading mr-2 text-emerald-500"></i>Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter note title"
            className="w-full px-4 py-2 border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            <i className="fas fa-paperclip mr-2 text-emerald-500"></i>Attach
            File
          </label>
          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-emerald-100 file:text-emerald-700
              hover:file:bg-emerald-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 font-semibold text-white rounded-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-emerald-500 hover:bg-emerald-600"
          }`}
        >
          {loading ? "Uploading..." : "Upload Note"}
        </button>
      </form>
    </motion.div>
  );
};

export default UploadNotesEmeraldForm;
