import React from "react";
import SessionCard from "./SessionCard";
import { routine } from "../../utils/routine";
import { useSelector } from "react-redux";

const SessionList = () => {
  const day = useSelector((s) => s.day);

  if (day.current_day > 5)
    return (
      <p className="text-center mt-10 text-gray-400">
        There is No classes today!
      </p>
    );

  const data =
    routine?.timetable[day?.selected_day < 5 ? day?.selected_day : 0]
      .sessions || [];
  return (
    <>
      <ul className=" pb-10 overflow-y-auto px-4 py-2">
        {data?.map((item) => (
          <>
            <SessionCard item={item} />
          </>
        ))}
      </ul>
    </>
  );
};

export default SessionList;
