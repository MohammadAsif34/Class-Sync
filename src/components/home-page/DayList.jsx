import React from "react";
// import { useTodayDate } from "../../hooks/useTodayDate.js";
import { days } from "../../../../../Class-Sync/src/utils/days";

const DayList = () => {
  //   const { dayRoutine, setDayRoutine } = useApp();
  const today = new Date().getDay();
  return (
    <div className="w-full px-4 py-3  ">
      <div className=" w-full py-1   flex  gap-x-3 justify-between items-center overflow-x-hidden">
        {days?.map((day, idx) => {
          const isActive = false === day?.day;
          const isToday = today === day?.day;

          return (
            <button
              key={day?._id || idx}
              //   onClick={() => setDayRoutine(day?.day)}
              className={`flex-1 py-2 rounded-md font-medium text-sm capitalize shadow-md transition-all duration-300
                ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg scale-[1.05]"
                    : "bg-gray-100 text-gray-600 hover:bg-emerald-100"
                }
                ${
                  isToday && !isActive
                    ? "border border-emerald-400 text-emerald-500"
                    : ""
                }
              `}
            >
              {day?.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DayList;
