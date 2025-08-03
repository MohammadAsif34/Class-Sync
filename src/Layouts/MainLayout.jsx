import React from "react";
import AppHeader from "../components/headers/AppHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <section>
        <AppHeader />
        <div className="w-full h-[calc(100vh-89px)]  bg-white">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MainLayout;
