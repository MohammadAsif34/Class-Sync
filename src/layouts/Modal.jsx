import React from "react";
import HolidayDownload from "../components/modal/HolidayDownload";
import { useApp } from "../context/CreateContext";

const Modal = () => {
  const { isDownload } = useApp();
  return (
    <div className=" mx-auto min-w-xs max-w-md  h-screen bg-transparent z-50">
      {isDownload && <HolidayDownload />}
    </div>
  );
};

export default Modal;
