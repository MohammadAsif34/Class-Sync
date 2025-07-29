import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import MenuBar from "../components/side-menu/MenuBar";
import Navbar from "../components/component/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import LoadingPage from "../pages/LoadingPage";
import OnBoardingPage from "../pages/OnBoardingPage";
import { AnimatePresence } from "framer-motion";

const MainLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const isMenu = useSelector((state) => state.menu.isOpen);

  const isOnboarded = localStorage.getItem("isOnboarded");

  if (isOnboarded) {
    console.log("isOnboarded::>", isOnboarded);
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (!isOnboarded) {
    return <OnBoardingPage />;
  }
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        pauseOnHover={false}
        hideProgressBar={true}
        closeButton={false}
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
        {isMenu && (
          <div className="mx-auto min-w-xs max-w-md  h-screen absolute top-0  right-0 z-50">
            <AnimatePresence>
              <MenuBar />
            </AnimatePresence>
          </div>
        )}
        <Navbar />
        <div className=" w-full h-[calc(100vh-7rem)]  overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
