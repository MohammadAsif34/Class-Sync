import React from "react";
import { useNavigate } from "react-router-dom";

const SyllabusHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 py-3 bg-emerald-400 text-white flex justify-between items-center ">
        <button onClick={() => navigate("/")}>
          <i className="fa-solid fa-arrow-left text-xs mr-2"></i>Back
        </button>
        <button>
          <i className="fa-solid fa-ellipsis-vertical text-x "></i>
        </button>
      </div>
    </>
  );
};

export default SyllabusHeader;
