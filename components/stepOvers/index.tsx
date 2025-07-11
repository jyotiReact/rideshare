import React from "react";
import { PinLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Step = {
  type: string;
  location: string;
  hasPin: boolean;
};

type StepOversProps = {
  steps: Step[];
};

export const StepOvers: React.FC<StepOversProps> = ({ steps }) => {
  return (
    <div className="flex flex-col w-[544px] items-center justify-center gap-10 relative">
      <div className="inline-flex items-start gap-1.5">
        {/* Timeline Dots */}
        <div className="inline-flex flex-col items-center justify-center">
          <div className="inline-flex flex-col items-center justify-center">
            <div className="relative w-7 h-7">
              <div className="h-7 bg-[#631cff33] rounded-[14px]">
                <div className="relative w-3 h-3 top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0px_0px_30px_#631cff]" />
              </div>
            </div>
            <div className="w-0.5 h-10 border-l-2 border-dashed border-[#631cff]" />
          </div>

          <div className="relative w-7 h-7">
            <div className="h-7 bg-[#631cff33] rounded-[14px]">
              <div className="relative w-3 h-3 top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0px_0px_30px_#631cff]" />
            </div>
          </div>

          <div className="inline-flex flex-col items-center justify-center">
            <div className="w-0.5 h-10 border-l-2 border-dashed border-[#631cff]" />
            <div className="relative w-7 h-7">
              <div className="h-7 bg-[#631cff33] rounded-[14px]">
                <div className="relative w-3 h-3 top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0px_0px_30px_#631cff]" />
              </div>
            </div>
          </div>
        </div>

        {/* Step Info */}
        <div className="inline-flex flex-col h-[166px] items-start justify-between py-1">
          {steps.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-[5px] self-stretch w-full"
            >
              <div className="w-fit font-medium text-[#515251] text-xs">
                {point.type}
              </div>

              <div
                className={`w-fit ${
                  index === 2 ? "w-20 text-right" : ""
                } font-bold text-black text-sm`}
              >
                {point.location}
              </div>

              {point.hasPin && (
                <HugeiconsIcon
                  icon={PinLocation01Icon}
                  width={20}
                  color="#631CFF"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
