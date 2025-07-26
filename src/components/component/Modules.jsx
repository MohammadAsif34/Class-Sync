import React from "react";
import syllabus from "../../assets/syllabus.json";
import { useParams } from "react-router-dom";

const Modules = () => {
  const { id } = useParams();
  const data = syllabus[id];
  return (
    <>
      <div className="px-3 py-2 text-sm text-gray-400 shadow-sm bg-gray-50 flex justify-between items-center">
        <p>Code: {id}</p>
        <p>Credit: {data?.credit}</p>
        <p>Contract: {data?.contract}</p>
      </div>
      <p className=" px-4 py-2 text-2xl font-semibold border-b border-gray-300 text-neutral-600">{data?.name}</p>
      <div className="px-2 pb-14">
        {data?.module?.map((item, idx) => (
          <>
            <ModuleCard key={idx} item={item} />
          </>
        ))}
      </div>
    </>
  );
};

export default Modules;

const ModuleCard = ({ item }) => {
  return (
    <>
      <div className=" my-3 p-2 shadow-sm rounded-xl bg-gray-100">
        <div className="px-1 py-1  border-b border-gray-300 fflex items-center gap-2">
          <p className="font-semibold text-xs text-gray-400 whitespace-nowrap">
            {item?.a} 
          </p>
          <h1 className="font-semibold text-xl text-gray-600"> {item?.b}</h1>
        </div>
        <p className="px-1 text-gray-500">{item?.c}</p>
      </div>
    </>
  );
};
