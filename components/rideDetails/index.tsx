import React from "react";
import { PassengerListSection } from "./PassengerList";
import { RideDetailsSection } from "./RideInfo";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";

export const RideDetails = (): JSX.Element => {
  const alreadyDeparted = false;

  return (
    <div className="flex flex-col w-full bg-neutral-50 px-20 py-10">
      <div className="flex gap-10 flex-col">
        <div className="w-[450px] mt-[-1.00px] font-bold text-[#353535] text-4xl tracking-[0] leading-[normal] relative [font-family:'Plus_Jakarta_Sans',Helvetica]">
          Ride Details
        </div>
        {alreadyDeparted && (
          <div className="flex items-center justify-center gap-2.5 px-5 py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-[#631cff1a] rounded-3xl">
            <AlertCircleIcon className="w-[21.82px] h-[21.82px] text-[#631cff]" />
            <div className="relative w-fit mt-[-1.09px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#631cff] text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
              This Ride has already departed
            </div>
          </div>
        )}
        <div className="flex gap-10">
          <div className="flex-1">
            <PassengerListSection alreadyDeparted={alreadyDeparted} />
          </div>
          <div className="w-1/3">
            <RideDetailsSection alreadyDeparted={alreadyDeparted} />
          </div>
        </div>
      </div>
    </div>
  );
};
