import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <>
      <header className="px-4 py-3 pt-10 bg-emerald-500 flex justify-between items-center text-white shadow-sm">
        {/* Left: Logo and Text */}
        <div className="flex items-center space-x-3 ">
          <div className="w-12 h-12 overflow-hidden rounded-lg border">
            <Link to={"/"}>
              <img
                src="/ClassSync.png" // or use `logo` if imported
                alt="ClassSync Logo"
                className="w-full h-full object-contain text-[10px]"
              />
            </Link>
          </div>
          <div className="w-40  overflow-hidden rounded-lg">
            <Link to={"/"}>
              <img
                src="/text_logo.png" // or use `logo` if imported
                alt="ClassSync Logo"
                className="w-full h-full object-contain text-[10px]"
              />
            </Link>
          </div>
          {/*
          <div>
             <p className="text-sm font-mono font-medium tracking-wide">
              Hi, Students
            </p>
            <h1 className="text-2xl font-bold font-sans tracking-tight">
              Class sync
            </h1>
          </div>
             */}
        </div>

        {/* Right: Menu Icon */}
        <button
          className="p-2 rounded-md hover:bg-emerald-600 transition"
          aria-label="Toggle menu"
          onClick={() => toast.info("added soon")}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </header>
    </>
  );
};

export default AppHeader;
