"use client";

import React from "react";
import { PassengerListSection } from "./PassengerList";
import { AlertCircleFreeIcons, AlertCircleIcon } from "@hugeicons/core-free-icons";
import { RideInfoSection } from "./RideInfo";
import { HugeiconsIcon } from "@hugeicons/react";

export const RideDetails = (): JSX.Element => {
  const alreadyDeparted = false;

  return (
    <div className="flex flex-col w-full bg-neutral-50 px-20 py-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-[#353535]">Ride Details</h1>

        {/* Alert Message */}
        {alreadyDeparted && (
          <div className="flex items-center gap-2.5 px-5 py-[15px] bg-[#631cff1a] rounded-3xl">
            <HugeiconsIcon  icon={AlertCircleFreeIcons} color="#631CFF" />
            <p className="text-sm font-bold text-[#631cff]">
              This Ride has already departed
            </p>
          </div>
        )}

        {/* Main Content */}
        <div className="flex gap-10">
          <div className="flex-1">
            <PassengerListSection alreadyDeparted={alreadyDeparted} />
          </div>
          <div className="w-1/3">
            <RideInfoSection  />
          </div>
        </div>
      </div>
    </div>
  );
};
