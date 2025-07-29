import React from "react";
import syllabus from "../assets/syllabus.json";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ModuleCard from "../components/syllabus/ModuleCard";

const SyllabusPage = () => {
  const { id } = useParams();
  const data = syllabus[id];

  return (
    <>
      {/* Info Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-4 py-2 text-sm text-gray-500 shadow bg-white flex justify-between items-center border-b border-gray-300"
      >
        <p>
          <span className="font-medium text-gray-600">Code:</span> {id}
        </p>
        <p>
          <span className="font-medium text-gray-600">Credit:</span>{" "}
          {data?.credit}
        </p>
        <p>
          <span className="font-medium text-gray-600">Contact:</span>{" "}
          {data?.contract}
        </p>
      </motion.div>
      {/* Subject Name*/}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="px-5 py-4 text-2xl font-bold text-neutral-600 border-b border-gray-300"
      >
        {data?.name}
      </motion.h1>
      {/* Module Cards */}
      <div className="px-3 pb-20 space-y-4 mt-4">
        {data?.module?.map((item, idx) => (
          <ModuleCard key={idx} item={item} idx={idx} />
        ))}
      </div>{" "}
    </>
  );
};

export default SyllabusPage;
