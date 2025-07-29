import React from "react";
import { Outlet } from "react-router-dom";
import Header2 from "../components/component/Header2";

const SecondLayout = () => {
  return (
    <>
      <div className=" mx-auto min-w-xs max-w-md  h-screen bg-[#FDFCFA] overflow-hidden shadow-2xl relative">
        {/* header  */}
        <div className="w-full pt-10 bg-emerald-500 ">
          <Header2 />
        </div>
        {/* content  */}
        <div className=" w-full h-screen  overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SecondLayout;
