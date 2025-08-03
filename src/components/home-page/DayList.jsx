import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDay } from "../../redux/features/day/daySlice";
import { days } from "../../assets/days";

const DayList = () => {
  const day = useSelector((s) => s.day);
  const dispatch = useDispatch();
  const today = day.current_day;
  return (
    <div className="w-full px-4 py-3  ">
      <div className=" w-full py-1 px-1   flex  gap-x-3 justify-between items-center overflow-x-hidden">
        {days?.map((d, idx) => {
          const isActive = day.selected_day === d?.day;
          const isToday = today === d?.day;

          return (
            <button
              key={d?._id || idx}
              onClick={() => dispatch(setSelectedDay(d?.day))}
              className={`flex-1 py-2 rounded-md font-medium text-sm capitalize shadow-md transition-all 
                ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg scale-[1.05]"
                    : "bg-gray-100 text-gray-600 hover:bg-emerald-100"
                }
                ${
                  isToday && !isActive
                    ? " ring-1 ring-emerald-400 text-emerald-500"
                    : ""
                }
              `}
            >
              {d?.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DayList;
