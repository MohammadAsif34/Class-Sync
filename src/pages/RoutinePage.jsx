import { motion } from "framer-motion";
import React from "react";
import DayList from "../components/component/DayList";
import DayRoutine from "../components/component/DayRoutine";

const RoutinePage = () => {
  const configuredRoutine = localStorage.getItem("configuredRoutine");

  if (configuredRoutine) {
    console.log("configuredRoutine::>", configuredRoutine);
  }
  return (
    <>
      {configuredRoutine ? (
        <>
          <div>
            {/* daySelector  */}
            <div className="">
              <DayList />
            </div>

            {/* routine  */}
            <div className=" px-2 w-full overflow-auto">
              <DayRoutine />
            </div>
          </div>
        </>
      ) : (
        <motion.div
          className="w-full h-[calc(100vh-200px)] flex justify-center items-center italic text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Please configure first
        </motion.div>
      )}
    </>
  );
};

export default RoutinePage;
