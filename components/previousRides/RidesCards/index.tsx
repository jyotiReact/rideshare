import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRightIcon, Users2Icon } from "lucide-react";
import React from "react";

export const RideStatusCard = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full items-start relative border border-solid border-[#F2F1F1] rounded-[10px] overflow-hidden">
      <CardHeader className="flex items-center w-full px-10 py-5 bg-white border-b border-[#EDECEC]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <h2 className="font-bold text-black text-2xl font-['Plus_Jakarta_Sans',Helvetica]">
              Monday, 23 June
            </h2>
            <Badge
              variant="outline"
              className="flex items-center gap-2.5 px-2.5 py-2 bg-[#e336291a] text-[#E33629] rounded-[40px] font-semibold text-base font-['Plus_Jakarta_Sans',Helvetica]"
            >
              <img className="w-4 h-4" alt="Vector" src="/vector.svg" />
              Cancelled
            </Badge>
          </div>
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-2 py-1.5 bg-[#631cff1a] rounded-3xl"
          >
            <Users2Icon className="w-[21.82px] h-[21.82px] text-[#101828]" />
            <span className="font-bold text-[#101828] text-lg font-['Plus_Jakarta_Sans',Helvetica] leading-5">
              2
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between px-10 py-5 w-full bg-white">
        <div className="flex flex-col w-[400px] items-start gap-2.5">
          {/* Time indicators */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[5px]">
              <span className="font-medium text-[#515251] text-xs font-['Plus_Jakarta_Sans',Helvetica]">
                12:50
              </span>
            </div>
            <div className="flex items-center justify-end gap-[5px]">
              <span className="font-medium text-[#515251] text-xs text-right font-['Plus_Jakarta_Sans',Helvetica]">
                16:50
              </span>
            </div>
          </div>
          {/* Journey timeline */}
          <div className="flex items-center justify-center gap-2.5 w-full">
            <div className="flex items-center flex-1">
              <div className="relative w-7 h-7">
                <div className="h-7 bg-[#631cff33] rounded-[14px]">
                  <div className="relative w-3 h-3 top-2 left-2 bg-[#D0F500] rounded-md border-[1.5px] border-solid border-[#631CFF] shadow-[0px_0px_30px_#631CFF]" />
                </div>
              </div>
              <img
                className="mr-[-1.00px] -ml-2 flex-1 h-0.5"
                alt="Vector"
                src="/vector-3.svg"
              />
            </div>
            <span className="font-bold text-black text-sm font-['Plus_Jakarta_Sans',Helvetica]">
              04 h 00m
            </span>
            <div className="flex items-center flex-1">
              <img
                className="ml-[-1.00px] flex-1 h-0.5"
                alt="Vector"
                src="/vector-3.svg"
              />
              <div className="relative w-7 h-7 -ml-2.5">
                <div className="h-7 bg-[#631cff33] rounded-[14px]">
                  <div className="relative w-3 h-3 top-2 left-2 bg-[#D0F500] rounded-md border-[1.5px] border-solid border-[#631CFF] shadow-[0px_0px_30px_#631CFF]" />
                </div>
              </div>
            </div>
          </div>
          {/* Origin and destination */}
          <div className="flex w-[400px] items-center justify-between">
            <div className="flex w-[104px] items-end justify-between">
              <span className="font-medium text-[#515251] text-xs font-['Plus_Jakarta_Sans',Helvetica]">
                From
              </span>
              <span className="font-bold text-black text-sm font-['Plus_Jakarta_Sans',Helvetica]">
                New Delhi
              </span>
            </div>
            <div className="flex w-[99px] items-end justify-between">
              <span className="font-medium text-[#515251] text-xs font-['Plus_Jakarta_Sans',Helvetica]">
                To
              </span>
              <span className="w-20 font-bold text-black text-sm text-right font-['Plus_Jakarta_Sans',Helvetica]">
                Chandigarh
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2.5">
          <div className="flex items-end gap-2.5">
            <span className="font-extrabold text-[#190041] text-[26px] tracking-[-0.21px] leading-[36.4px] font-['Plus_Jakarta_Sans',Helvetica]">
              ₹1,000.00
            </span>
          </div>
          <Button className="flex items-center justify-center gap-1 px-4 py-2 bg-[#631CFF] rounded-[28px] shadow-[0px_2px_0px_#EEEEEE] text-white font-medium text-base tracking-[-0.13px] leading-[22.4px] font-['Inter',Helvetica]">
            View Details
            <ArrowUpRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};





