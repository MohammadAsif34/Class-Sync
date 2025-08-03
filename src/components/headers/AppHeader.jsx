import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <>
      <header className="px-4 py-3 pt-10 bg-emerald-500 flex justify-between items-center text-white shadow-sm">
        {/* Left: Logo and Text */}
        <div className="flex items-center space-x-3 ">
          <Link to={"/"}>
            <img
              src="/ClassSync.png " // or use `logo` if imported
              alt="ClassSync Logo"
              className="w-12 h-12 object-contain rounded-lg border text-[10px]"
            />
          </Link>
          <div>
            <p className="text-sm font-mono font-medium tracking-wide">
              Hi, Students
            </p>
            <h1 className="text-2xl font-bold font-sans tracking-tight">
              Class sync
            </h1>
          </div>
        </div>

        {/* Right: Menu Icon */}
        <button
          className="p-2 rounded-md hover:bg-emerald-600 transition"
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </header>
    </>
  );
};

export default AppHeader;
