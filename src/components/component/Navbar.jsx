import React from "react";
import { useHybridNetworkStatus } from "../../hooks/useHybridNetworkStatus";
import { useApp } from "../../context/CreateContext";

const Navbar = () => {
  const networkStatus = useHybridNetworkStatus();
  const { setMenu } = useApp();

  return (
    <div className=" min-h-18 px-3 py-3 bg-emerald-400 flex justify-between text-white">
      <div className="">
        <p className=" font-mono font-semibold">Hii, Student</p>
        <p className="text-3xl font-bold font-sans">ClassSync</p>
      </div>
      <div className="">
        {/* {false && <ProfileAvatar />} */}
        <p className=" py-2 text-xs">
          {networkStatus && (
            <span>
              <i className="fa-solid fa-circle text-[5px] px-3 -translate-y-0.5 text-green-300"></i>
              online
            </span>
          )}
        </p>
        <button
          className=" float-end align-baseline"
          onClick={() => setMenu(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const ProfileAvatar = () => {
  return (
    <>
      <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
        <img
          src="/react.svg"
          alt=""
          className="w-full h-full rounded-full object-center object-cover"
          loading="eager"
        />
      </div>
    </>
  );
};
