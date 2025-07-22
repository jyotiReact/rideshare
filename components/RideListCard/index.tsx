"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Profile from "@/components/ui/profile";
import { Ride } from "@/types";
import {
  ArrowUpRight03Icon,
  CarSignalIcon,
  UserMultiple02Icon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

interface RideStatusCardProps {
  ride: Ride;
  btnLabel?: string;
  handleCardClick?: () => void;
}

const RideListCard: React.FC<RideStatusCardProps> = ({
  ride,
  btnLabel,
  handleCardClick,
}) => {
  return (
    <Card
      key={ride.id}
      className="w-full rounded-[10px] overflow-hidden border border-solid border-[#f2f1f1] cursor-pointer"
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        {/* Top Row: Time & Price */}
        <div className="flex md:flex-row flex-col items-center md:justify-between gap-4 md:px-10 px-3 py-5 bg-white border-b border-[#edecec]">
          {/* Ride Info */}
          <div className="flex flex-col items-start gap-2.5 md:w-[300px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="text-xs font-medium text-[#515251]">
                {ride.departureTime}
              </div>
              <div className="text-xs font-medium text-[#515251] text-right">
                {ride.arrivalTime}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 w-full">
              {/* Start icon */}
              <div className="flex items-center w-[35%] md:w-[40%] ">
                <div className="relative w-7 h-7">
                  <div className="h-7 bg-[#631cff33] rounded-[14px]">
                    <div className="w-3 h-3 absolute top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0_0_30px_#631cff]" />
                  </div>
                </div>
                {/* Dashed line left */}
                <div className="flex-1 h-0.5 border-t-2 border-dashed border-[#631cff]" />
              </div>

              <div className="text-sm font-bold text-black whitespace-nowrap">
                {ride.duration}
              </div>

              {/* End icon */}
              <div className="flex items-center w-[35%] md:w-[40%] justify-end">
                {/* Dashed line right */}
                <div className="flex-1 h-0.5 border-t-2 border-dashed border-[#631cff]" />
                <div className="relative w-7 h-7 -ml-2.5">
                  <div className="h-7 bg-[#631cff33] rounded-[14px]">
                    <div className="w-3 h-3 absolute top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0_0_30px_#631cff]" />
                  </div>
                </div>
              </div>
            </div>

            {/* From/To */}
            <div className="flex items-center justify-between w-full ">
              <div className="flex  gap-2 items-center">
                <div className="text-xs text-[#515251] font-medium">From</div>
                <div className="text-sm font-bold text-black">{ride.from}</div>
              </div>
              <div className="flex  gap-2 items-center">
                <div className="text-xs text-[#515251] font-medium ">To</div>
                <div className="text-sm font-bold text-black text-right">
                  {ride.to}
                </div>
              </div>
            </div>
          </div>

          {/* Rating and Price */}
          <div className="md:flex hidden items-center gap-[5px] p-[5px] bg-[#deefe4] rounded-[20px]">
            <Badge className="flex items-center gap-1 px-2 py-1 bg-[#0e7a31] rounded-3xl">
              <img
                className="w-3 h-[11px]"
                src="/images/whitestar.png"
                alt="Star"
              />
              <span className="text-sm font-medium text-white">
                {ride.rating}
              </span>
            </Badge>
            <div className="text-sm font-medium text-black">{ride.rating}</div>
          </div>

          <div className="flex md:flex-col flex-row justify-between md:items-end items-center  gap-2.5 w-full md:w-fit">
            <div className="flex items-end gap-2.5">
              <div className="text-base font-bold text-[#a1a1a1] line-through md:block hidden">
                {ride.originalPrice}
              </div>
              <div className="md:text-[24px]  font-bold text-[#190041]">
                {ride.price}
              </div>
            </div>

            <Button className="flex items-center gap-1 px-4 md:py-2  rounded-full w-fit text-white">
              <span className="md:text-base text-sm font-medium">{btnLabel}</span>
              <HugeiconsIcon icon={ArrowUpRight03Icon} width={20} />
            </Button>
          </div>
        </div>

        {/* Bottom Row: Driver Info */}
        <div className="flex items-center justify-between md:px-10 py-5 px-1 bg-white">
          <div className="flex flex-col md:flex-row  gap-2.5 w-full">
            <div className="flex  items-center gap-3 justify-between w-full ">
              <div className="flex items-center gap-3">
                <Profile />
                <div className="md:text-base text-sm font-bold text-black">
                  {ride.driver}
                </div>
              </div>

              <div className="md:hidden flex items-center gap-[5px] p-[5px] bg-[#deefe4] rounded-[20px]">
                <Badge className="flex items-center gap-1 px-2 py-1 bg-[#0e7a31] rounded-3xl">
                  <img
                    className="w-3 h-[11px]"
                    src="/images/whitestar.png"
                    alt="Star"
                  />
                  <span className="text-sm font-medium text-white">
                    {ride.rating}
                  </span>
                </Badge>
                <div className="text-sm font-medium text-black">
                  {ride.rating}
                </div>
              </div>
            </div>

            <Badge
              className={`flex items-center gap-2 md:px-2 px-1 py-1.5 bg-[#631CFF1] rounded-3xl text-[#631CFF] w-fit whitespace-nowrap`}
            >
              <HugeiconsIcon icon={CarSignalIcon} width={20} color="#631CFF" />
              <span className={`text-xs font-medium  `}>{ride.car}</span>
            </Badge>
          </div>

          <div className="lg:flex hidden items-center gap-2.5">
            <Badge className="flex items-center gap-1 px-2 py-1.5 bg-[#F5F5F5] rounded-3xl">
              <HugeiconsIcon
                icon={UserMultiple02Icon}
                width={20}
                color="#631CFF"
              />
              <span className="text-sm font-medium text-[#101828] whitespace-nowrap">
                {ride.maxPassengers} Max. Allowed in back
              </span>
            </Badge>

            <div className="flex gap-2.5">
              {ride.instantRequest && (
                <Badge className="flex items-center gap-1 px-2 py-1.5 bg-[#F5F5F5] rounded-3xl">
                  <HugeiconsIcon icon={ZapIcon} width={20} color="#631CFF" />
                  <span className="text-sm font-medium text-[#101828] whitespace-nowrap">
                    Instant Booking
                  </span>
                </Badge>
              )}

              <Badge className="flex items-center gap-1 px-2 py-1.5 bg-[#F5F5F5] rounded-3xl">
                <span className="text-sm font-medium text-[#101828] whitespace-nowrap">
                  + 2 More
                </span>
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RideListCard;
