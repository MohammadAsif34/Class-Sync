import React from "react";
import { Outlet } from "react-router-dom";
import SyllabusHeader from "../components/component/SyllabusHeader";

const SyllabusLayout = () => {
  return (
    <>
      <div className=" mx-auto min-w-xs max-w-md  h-screen bg-[#FDFCFA] overflow-hidden shadow-2xl relative">
        {/* header  */}
        <div className="w-full ">
          <SyllabusHeader />
        </div>
        {/* content  */}
        <div className=" w-full h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SyllabusLayout;
