import React from "react";

const HolidayDownload = () => {
  return (
    <>
      <div className="min-w-[100px] max-w-sm mx-auto min-20 p-4 rounded-xl shadow-lg bg-white ">
        <p className="text-center">Do you want to download</p>
        <p className="text-xs text-end py-2">
          <button className="px-2 py-0.5 mr-4 border  rounded-md">
            Cancel
          </button>
          <button className="px-2 py-0.5 mr-4 bg-emerald-400 text-white  rounded-md ">
            Download
          </button>
        </p>
      </div>
    </>
  );
};

export default HolidayDownload;
