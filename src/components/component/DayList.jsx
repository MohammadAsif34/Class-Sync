import React from "react";
import { useApp } from "../../context/CreateContext";
import { days } from "../../utils/days";
import { useTodayDate } from "../../hooks/useTodayDate";

const DayList = () => {
  const { dayRoutine, setDayRoutine } = useApp();
  const today = useTodayDate();

  return (
    <div className="w-full h-fit px-3 py-5 ">
      <div className=" w-full py-1  flex  gap justify-between items-center overflow-x-hidden">
        {days?.map((day, idx) => {
          const isActive = dayRoutine === day?.day;
          const isToday = today === day?.day;

          return (
            <button
              key={day?._id || idx}
              onClick={() => setDayRoutine(day?.day)}
              className={` px-5 py-2 rounded-lg font-medium text-sm capitalize shadow-md transition-all duration-300
                ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg scale-[1.05]"
                    : "bg-white text-gray-600 hover:bg-emerald-100"
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
