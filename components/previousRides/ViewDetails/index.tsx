"use client";

import React, { JSX } from "react";

import { RideDetailsLayout } from "@/components/layout/RideDetailsLayout";

import { PassengerListSection } from "@/components/rideDetails/PassengerList";

export const ViewDetails = (): JSX.Element => {
  return (
    <RideDetailsLayout btnLabel="Rate Driver/Passengers">
      <div className="flex flex-col w-full items-start gap-[30px]">
        {/* Passenger List */}
        <PassengerListSection  />

        <div className="flex flex-col gap-5 mt-[30px] w-full">
          <div className="flex flex-col gap-[30px] pb-[30px] border-b border-[#cbcbcb]">
            <h2 className="text-2xl font-bold text-black">Your Fare</h2>

            <div className="flex justify-between  items-center px-10 py-4 bg-[#0000000a] rounded-[10px] shadow-sm opacity-80">
              <div className="text-base font-bold text-[#5b5b5b]">1 Seats</div>
              <div className="text-xl font-bold text-black"> Rs 600</div>
            </div>
          </div>
        </div>
      </div>
    </RideDetailsLayout>
  );
};
