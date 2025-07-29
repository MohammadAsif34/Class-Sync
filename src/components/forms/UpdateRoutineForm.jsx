import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import routineConfig from "../../assets/routineConfig.json";
import { useHybridNetworkStatus } from "../../hooks/useHybridNetworkStatus";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateRoutineForm = () => {
  const navigate = useNavigate();
  const isOnline = useHybridNetworkStatus();
  const [form, setForm] = useState({
    course: "",
    department: "",
    semester: "",
    elective: "",
    iselective: "",
  });
  useEffect(() => {
    const configuredRoutine = JSON.parse(
      localStorage.getItem("configuredRoutine")
    );
    if (configuredRoutine) setForm(configuredRoutine);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isOnline) {
      toast.error("You are Offline!");
      return;
    }
    console.log("Submitted:", form);
    localStorage.setItem("configuredRoutine", JSON.stringify(form));
    toast.success("Course updated!!");
    navigate("/");
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-md mx-auto  p-6 bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden"
    >
      <motion.h2
        className="text-2xl font-bold text-center text-emerald-600 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Update Your Routine
      </motion.h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {routineConfig?.map((field, idx) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
          >
            <SelectField
              label={field.label}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              options={field.options}
            />
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="w-full py-3 px-4 bg-emerald-500 text-white font-semibold rounded-xl shadow hover:bg-emerald-600 transition duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
      required
    >
      <option value="">Select {label}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default UpdateRoutineForm;
