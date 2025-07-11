"use client";

import React from "react";

interface StepLineProps {
  line?: boolean;
  lineStyle?: string;
}

const StepLine: React.FC<StepLineProps> = ({ line = true, lineStyle }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center">
      <div className="relative w-7 h-7">
        <div className="h-7 bg-[#631cff33] rounded-[14px]">
          <div className="relative w-3 h-3 top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-solid border-[#631cff] shadow-[0px_0px_30px_#631cff]" />
        </div>
      </div>

      {line && (
        <div
          className={`w-0.5  min-h-[100px] border-l-2 border-dashed border-[#631cff] ${lineStyle}`}
        />
      )}
    </div>
  );
};

export default StepLine;
