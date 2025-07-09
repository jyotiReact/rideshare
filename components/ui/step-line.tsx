import React from "react";

function StepLine({direction}) {
  return (
    <div className="inline-flex flex-col items-center justify-center">
      <div className="relative w-7 h-7">
        <div className="h-7 bg-[#631cff33] rounded-[14px]">
          <div className="relative w-3 h-3 top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-solid border-[#631cff] shadow-[0px_0px_30px_#631cff]" />
        </div>
      </div>

      <div className="w-0.5 h-20 border-l-2 border-dashed border-[#631cff]" />
    </div>
  );
}

export default StepLine;
