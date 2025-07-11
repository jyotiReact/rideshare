"use client";

import React from "react";
import StepLine from "../ui/step-line";

export interface LocationData {
  city: string;
  address: string;
}

export interface JourneyData {
  date: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  locations: LocationData[];
}

const JourneyDetails: React.FC<{ journeyData: JourneyData }> = ({
  journeyData,
}) => {
  return (
    <div className="flex  flex-col items-start gap-[30px] pt-0 pb-[30px] px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#cbcbcb]">
      <div className="relative self-stretch mt-[-1.00px] font-bold text-black text-2xl leading-normal">
        {journeyData.date}
      </div>

      <div className="flex justify-center gap-5 w-full h-full">
        {/* Time Section */}
        <div className="inline-flex flex-col items-start justify-between relative self-stretch flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[5px]">
            <div className="text-[#515251] text-sm font-medium">
              {journeyData.departureTime}
            </div>
          </div>

          <div className="inline-flex items-center justify-end gap-[5px]">
            <div className="text-[#515251] text-xs text-right font-medium">
              {journeyData.duration}
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-1">
            <div className="inline-flex items-center gap-[5px]">
              <div className="text-[#515251] text-sm font-medium">
                {journeyData.arrivalTime}
              </div>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="inline-flex flex-col items-center justify-between relative self-stretch flex-[0_0_auto]">
          <StepLine line={true} lineStyle={"h-[110px]"} />

          <StepLine line={false} />
        </div>

        {/* Location Details */}
        <div className="flex flex-col gap-10 h-full">
          {journeyData.locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-1 self-stretch w-full"
            >
              <div className="inline-flex items-center gap-[5px]">
                <div className="text-[#515251] text-base font-bold">
                  {location.city}
                </div>
              </div>

              <div className="flex items-center justify-end gap-[5px] w-full">
                <div className="flex-1 text-[#515251] text-xs font-medium">
                  {location.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyDetails;
