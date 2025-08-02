import React, { useState } from "react";
import { motion } from "framer-motion";

const initialStudent = {
  name: "Mohammad Asif",
  email: "asif@example.com",
  phone: "+91 9876543210",
  department: "Computer Science",
  university: "Aliah University",
  rollNumber: "AU2023CS045",
  avatar:
    "https://ui-avatars.com/api/?name=Mohammad+Asif&background=00b894&color=fff&rounded=true&size=128",
};

const StudentProfile = () => {
  const [student, setStudent] = useState(initialStudent);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(student);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setStudent(form);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setForm(student);
    setIsEditing(false);
  };

  return (
    <div className="w-full h-[calc(100vh-120px)] bg-gray-100 p-4">
      <motion.div
        className="max-w-md w-full bg-white rounded-xl shadow-md p-6 space-y-4 max-sm:p-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {!isEditing ? (
          <>
            {/* View Mode */}
            <div className="flex flex-col items-center text-center">
              <img
                src={student.avatar}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-emerald-400 shadow-md"
              />
              <h2 className="text-xl font-semibold text-emerald-600 mt-3">
                {student.name}
              </h2>
              <p className="text-sm text-gray-500">{student.university}</p>
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <div>
                <span className="font-medium text-gray-500">Email:</span>{" "}
                {student.email}
              </div>
              <div>
                <span className="font-medium text-gray-500">Phone:</span>{" "}
                {student.phone}
              </div>
              <div>
                <span className="font-medium text-gray-500">Department:</span>{" "}
                {student.department}
              </div>
              <div>
                <span className="font-medium text-gray-500">Roll Number:</span>{" "}
                {student.rollNumber}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md text-sm transition"
              >
                Edit Profile
              </button>
              <button className="text-red-500 border border-red-300 hover:bg-red-50 px-4 py-2 rounded-md text-sm transition">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Mode */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-emerald-600">
                Edit Profile
              </h2>
            </div>

            <form className="space-y-3">
              {[
                "name",
                "email",
                "phone",
                "department",
                "university",
                "rollNumber",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-xs text-gray-500 capitalize mb-1">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>
              ))}
            </form>

            <div className="flex justify-between pt-4">
              <button
                onClick={handleSave}
                className="text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-md text-sm transition"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="text-gray-600 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md text-sm transition"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default StudentProfile;
