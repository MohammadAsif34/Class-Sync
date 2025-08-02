import React from "react";
import { motion } from "framer-motion";
import Header2 from "../components/component/Header2";
import Notes from "../components/notes/Notes";
import { useParams } from "react-router-dom";

const NotesPage = () => {
  const { program, department, semester } = useParams();
  return (
    <>
      <Header2 />
      <motion.div
        className="w-full h-[calc(100vh-160px)] border text-gray-400 text-lg overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="py-2 text-2  xl text-center font-bold text-emerald-500">
          📚 Subject Notes
        </h1>

        {/* Features Added soon! 🚧 */}
        <h1>Welcome to Notes page</h1>
        <p>{`${program}/${department}/${semester}`}</p>
        <Notes />
      </motion.div>
    </>
  );
};

export default NotesPage;
