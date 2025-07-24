"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Profile from "@/components/ui/profile";
import {
  CarSignalIcon,
  MultiplicationSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRightIcon, Users2Icon } from "lucide-react";
import React, { JSX } from "react";

// Ride type definition
interface Ride {
  originalPrice?: string;
  price?: string;
  driver?: string;
  car?: string;
  carBg?: string;
  carColor?: string;
  driverInfo?: boolean;
  status: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  from: string;
  to: string;
}

interface RideStatusCardProps {
  ride: Ride;
  btnLabel?: string;
  handleClick?: () => void;
}

export const RideStatusCard = ({
  ride,
  btnLabel = "View Details",
  handleClick = () => {},
}: RideStatusCardProps): JSX.Element => {
  return (
    <Card className="flex flex-col items-start relative border  border-solid border-[#F2F1F1] rounded-[10px] overflow-hidden">
      <CardHeader className="flex items-center w-full md:px-10 px-5 md:py-5 bg-white border-b border-[#EDECEC]">
        <div className="flex md:items-center justify-between w-full">
          <div className="flex md:items-center gap-5 md:flex-row flex-col">
            <h2 className="font-bold text-black md:text-2xl text-[20px]">
              {ride?.date}
            </h2>
            <Badge
              style={{
                color: ride?.status === "Cancelled" ? "#E33629" : "green",
                backgroundColor:
                  ride?.status === "Cancelled" ? "#e336291a" : "#10B9811a",
              }}
              variant="outline"
              className="flex items-center w-fit gap-2.5 px-2.5 py-2 bg-[#e336291a] text-[] rounded-[40px] font-semibold text-base"
            >
              <HugeiconsIcon icon={MultiplicationSignIcon} width={20} />
              {ride?.status}
            </Badge>
          </div>
          <Badge
            variant="outline"
            className="flex w-[50px] h-[50px] items-center gap-1 bg-[#631cff1a] rounded-full"
          >
            <Users2Icon className="w-[21.82px] h-[21.82px] text-[#631CFF]" />
            <span className="font-medium text-[#101828] text-lg leading-5">
              2
            </span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex  flex-col justify-between md:px-10 px-5 py-5 w-full bg-white">
        <div className="flex md:flex-row flex-col md:justify-between gap-6 py-4 bg-white  w-full">
          <div className="flex flex-col items-start gap-2.5 md:w-[300px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="text-xs font-medium text-[#515251]">
                {ride?.startTime}
              </div>
              <div className="text-xs font-medium text-[#515251] text-right">
                {ride?.endTime}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 w-full">
              <div className="flex items-center flex-1">
                <div className="relative w-7 h-7">
                  <div className="h-7 bg-[#631cff33] rounded-[14px]">
                    <div className="w-3 h-3 absolute top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0_0_30px_#631cff]" />
                  </div>
                </div>
                <div className="flex-1 h-0.5 border-t-2 border-dashed border-[#631cff]" />
              </div>

              <div className="text-sm font-bold text-black whitespace-nowrap">
                {ride?.duration}
              </div>

              <div className="flex items-center flex-1 justify-end">
                <div className="flex-1 h-0.5 border-t-2 border-dashed border-[#631cff]" />
                <div className="relative w-7 h-7 -ml-2.5">
                  <div className="h-7 bg-[#631cff33] rounded-[14px]">
                    <div className="w-3 h-3 absolute top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0_0_30px_#631cff]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex w-fit gap-2 items-center">
                <div className="text-xs text-[#515251] font-medium">From</div>
                <div className="text-sm font-bold text-black">{ride?.from}</div>
              </div>
              <div className="flex w-fit gap-2 items-center">
                <div className="text-xs text-[#515251] font-medium">To</div>
                <div className="text-sm font-bold text-black text-right">
                  {ride?.to}
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col flex-row md:items-end items-center md:gap-2.5 justify-between">
            <div className="flex items-end gap-2.5">
              {ride?.originalPrice && (
                <div className="text-base font-bold text-[#a1a1a1] line-through md:block hidden">
                  {ride.originalPrice}
                </div>
              )}
              <div className="md:text-[24px] font-bold text-[#190041]">
                {ride.price}
              </div>
            </div>
            <Button
              onClick={handleClick}
              className="flex items-center w-fit justify-center gap-1 md:px-4 px-2 py-2 bg-[#631CFF] rounded-[28px] shadow-[0px_2px_0px_#EEEEEE] text-white font-medium text-base tracking-[-0.13px] leading-[22.4px] font-['Inter',Helvetica]"
            >
              {btnLabel}
              <ArrowUpRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {ride?.driverInfo && (
          <div className="flex items-center justify-between  py-3 bg-white w-full border-t border-[#edecec]">
            <div className="flex items-center md:gap-2.5 justify-between w-full">
              <div className="flex items-center gap-2.5">
                 <Profile />
              <div className="text-base font-bold text-black">
                {ride.driver}
              </div>
             </div>
              <Badge
                className={`flex items-center gap-2 px-2 py-1.5 bg-[#631cff1a]  rounded-3xl`}
              >
                <HugeiconsIcon
                  icon={CarSignalIcon}
                  width={20}
                  color="#631CFF"
                />
                <span className={`text-sm font-medium text-[#631CFF] `}>
                  {ride.car}
                </span>
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
