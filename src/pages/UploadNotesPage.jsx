import React from "react";
import { motion } from "framer-motion";
import Header2 from "../components/component/Header2";
import UploadNotesForm from "../components/forms/UploadNotesForm";

const UploadNotes = () => {
  return (
    <>
      <Header2 />
      <motion.div
        className="w-full h-[calc(100vh-200px)] flex justify-center items-center italic text-gray-400 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Features Added Soon! 🚧 */}
        <UploadNotesForm />
      </motion.div>
    </>
  );
};

export default UploadNotes;
