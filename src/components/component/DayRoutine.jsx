import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import routineData from "../../assets/routine.json";
import { useApp } from "../../context/CreateContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

const ClassCard = ({ idx = 0, item = {} }) => {
  const navigate = useNavigate();
  const handleSyllabus = (id) => {
    if (!id) {
      toast.error("No Syllabus found!");
      return;
    }
    navigate(`syllabus/${id}`);
  };
  return (
    <motion.li
      className="mb-3 bg-neutral-100 shadow-sm p-2 rounded-xl "
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ delay: idx * 0.1 }}
    >
      {/* <div className="font-semibold">{item.subject}</div> */}
      <div
        className="text-sm text-gray-500"
        onClick={() => handleSyllabus(item?.subjectCode)}
      >
        <div className=" text-xs flex justify-between">
          <p>
            {`${item?.subjectCode}`}{" "}
            <span className="text-gray-400"> • credit : {item?.credit}</span>
          </p>
          <p>{item?.time}</p>
        </div>
        <p className="text-lg py-2 font-semibold">{item?.subject}</p>
        <p className="text-center text-xs ">{item?.instructor}</p>
      </div>
    </motion.li>
  );
};
