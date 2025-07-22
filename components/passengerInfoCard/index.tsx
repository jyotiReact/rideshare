import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Profile from "../ui/profile";

function PassengerInfoCard() {
  return (
    <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-6 w-full ">
      <div className="flex items-center gap-3.5">
        <Profile />
        <div className="flex flex-col items-start gap-2.5">
          <span className="font-bold text-black text-base tracking-[-0.13px] leading-[22.4px]">
            Ritik Bhardwaj
          </span>
          <div className="flex items-center gap-2.5 w-full">
            <span className="font-medium text-[#101828] text-sm">
              Chandigarh → Shimla
            </span>
            {/* <div className="w-[99px] h-[18px] border" /> */}
          </div>
        </div>
      </div>
      <div className="flex items-center md:justify-end justify-between gap-5 w-full md:w-fit">
        <span className="font-bold text-[#5b5b5b] text-base text-right leading-5 whitespace-nowrap">
          2 Seats
        </span>
        <HugeiconsIcon icon={ArrowRight01Icon} width={20} color="#5B5B5B" />
      </div>
    </div>
  );
}

export default PassengerInfoCard;
