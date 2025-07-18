import React from "react";
import { PinLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import StepLine from "../ui/step-line";

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
    <div className="flex flex-col md:w-[544px] w-full h-full  items-center justify-center gap-10 relative">
      <div className="inline-flex md:items-start items-center  gap-1.5  h-full">
        {/* Timeline Dots */}
        <div className="inline-flex flex-col items-center justify-center">
          <StepLine />
          <StepLine />
          <StepLine line={false} />
        </div>

        {/* Step Info */}
        <div className="inline-flex flex-col gap-14 items-start justify-between py-1">
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
