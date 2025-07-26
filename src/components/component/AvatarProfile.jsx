import React from "react";
import defaultAvatar from "../../assets/defaultAvatar.png";
import { useHybridNetworkStatus } from "../../hooks/useHybridNetworkStatus";

const AvatarProfile = ({ src }) => {
  const isOnline = useHybridNetworkStatus();
  return (
    <>
      {isOnline && (
        <span className="inline-block w-2 h-2 p-1 bg-green-500 rounded-full absolute top-2.5 right-4.5 z-20"></span>
      )}
      <div className="w-10 h-10 rounded-full border overflow-hidden border-gray-300 relative">
        <img
          src={src || defaultAvatar}
          className="w-full h-full rounded-full object-center object-cover"
        />
      </div>
    </>
  );
};

export default AvatarProfile;
