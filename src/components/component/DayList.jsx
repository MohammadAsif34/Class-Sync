import React, { useEffect } from "react";
import { useApp } from "../../context/CreateContext";
import { days } from "../../utils/days";
import { useTodayDate } from "../../hooks/useTodayDate";

const DayList = () => {
  const { dayRoutine, setDayRoutine } = useApp();
  const today = useTodayDate();

  console.log("today::> ", today);
  console.log("day routine::> ", dayRoutine);

  return (
    <>
      <div className="min-h-14  flex justify-evenly items-center">
        {/* {JSON.stringify(today)} */}
        {days?.map((day, idx) => (
          <div
            key={day?._id || idx}
            className={`bg-neutral-100 px-4 py-1 rounded-lg shadow-sm transition-all ease-in-out duration-500
                 ${dayRoutine == day?.day && "!bg-emerald-300 !text-white"}
                 ${
                   today == day?.day &&
                   "border border-emerald-400 text-emerald-400"
                 }`}
            onClick={() => setDayRoutine(day?.day)}
          >
            {day?.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default DayList;
