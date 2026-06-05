import { Button } from "@mui/material";
import React from "react";

const UnlockApp: React.FC = () => {
  const [isLocked, setIsLocked] = React.useState(true);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center bg-[#161617] p-10 rounded-xl box-content gap-3 w-75">
        <img
        className="w-40 h-40"
          src={
            isLocked
              ? "https://assets.ccbp.in/frontend/hooks/lock-img.png"
              : "https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          }
        />
        <p className="text-[#ffffff] text-xl font-medium">Your device is {isLocked ? "locked" : "unlocked"}</p>
        <Button onClick={()=> setIsLocked(!isLocked)} variant="contained" className="bg-[#06b6d4] text-[#e2e8f0] rounded-xl">{isLocked ? "Unlock" : "Lock"}</Button>
      </div>
    </div>
  );
};

export default UnlockApp;
