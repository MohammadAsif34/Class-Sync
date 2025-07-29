import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import routineData from "../../assets/routine.json";
import { useApp } from "../../context/CreateContext";
import ClassCard from "./ClassCard";

const DayRoutine = () => {
  const { dayRoutine } = useApp();
  const data = routineData[dayRoutine];

  if (!data)
    return (
      <motion.p
        key="no-classes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center mt-10 text-gray-400"
      >
        There is No classes today!
      </motion.p>
    );

  return (
    <AnimatePresence mode="popLayout">
      <motion.ul
        key={dayRoutine}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className=" pb-10 overflow-y-auto"
      >
        {data.map((item, idx) => (
          <ClassCard key={idx} item={item} idx={idx} />
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default DayRoutine;
