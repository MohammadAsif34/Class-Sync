import React from "react";
import { ToastContainer } from "react-toastify";
import MenuBar from "../components/side-menu/MenuBar";
import Navbar from "../components/component/Navbar";
import { Outlet } from "react-router-dom";
import { useApp } from "../context/CreateContext";

const MainLayout = () => {
  const { menu, setMenu } = useApp();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        pauseOnHover={false}
        hideProgressBar={true}
        toastStyle={{
          width: "200px",
          height: "60px",
          fontSize: "12px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      />

      <div className=" mx-auto min-w-xs max-w-md  h-screen bg-[#FDFCFA] overflow-hidden shadow-2xl relative">
        {menu && (
          <div className="mx-auto min-w-xs max-w-md  h-screen absolute top-0  right-0">
            <MenuBar />
          </div>
        )}
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
