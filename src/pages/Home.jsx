import React from "react";
import AuthPage from "./Authentication";
import Navbar from "../components/component/Navbar";
import DayList from "../components/component/DayList";
import DayRoutine from "../components/component/DayRoutine";
import RoutineLayout from "../layouts/RoutineLayout";

const Home = () => {
  return (
    <>
      <div className=" bg-white text-black overflow-hidden">
        {/* <Navbar /> */}
        <RoutineLayout />
      </div>
    </>
  );
};

export default Home;
