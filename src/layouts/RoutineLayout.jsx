import React from "react";
import DayList from "../components/component/DayList";
import DayRoutine from "../components/component/DayRoutine";

const RoutineLayout = () => {
  return (
    <>
      <div className="">
        {/* daySelector  */}
        <div className="">
          <DayList />
        </div>

        {/* routine  */}
        <div className=" px-2 w-full h-screen overflow-auto">
          <DayRoutine />
        </div>
      </div>
    </>
  );
};

export default RoutineLayout;
