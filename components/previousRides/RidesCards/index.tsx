import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MultiplicationSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRightIcon, Users2Icon } from "lucide-react";
import React from "react";

export const RideStatusCard = ({
  handleClick = () => {},
}: {
  handleClick?: () => void;
}): JSX.Element => {
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
              <HugeiconsIcon icon={MultiplicationSignIcon} width={20} />
              Cancelled
            </Badge>
          </div>
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-2 py-1.5 bg-[#631cff1a] rounded-3xl"
          >
            <Users2Icon className="w-[21.82px] h-[21.82px] text-[#631CFF]" />
            <span className="font-bold text-[#101828] text-lg font-['Plus_Jakarta_Sans',Helvetica] leading-5">
              2
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between px-10 py-5 w-full bg-white">
        <div className="flex items-center justify-between px-10 py-5 bg-white border-b border-[#edecec]">
          {/* Ride Info */}
          <div className="flex flex-col items-start gap-2.5 w-[300px]">
            <div className="flex items-center justify-between w-full">
              <div className="text-xs font-medium text-[#515251]">
                12:50
              </div>
              <div className="text-xs font-medium text-[#515251] text-right">
                16:50
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 w-full">
              {/* Start icon */}
              <div className="flex items-center flex-1">
                <div className="relative w-7 h-7">
                  <div className="h-7 bg-[#631cff33] rounded-[14px]">
                    <div className="w-3 h-3 absolute top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0_0_30px_#631cff]" />
                  </div>
                </div>
                {/* Dashed line left */}
                <div className="flex-1 h-0.5 border-t-2 border-dashed border-[#631cff]" />
              </div>

              <div className="text-sm font-bold text-black whitespace-nowrap">
                4h 30m
              </div>

              {/* End icon */}
              <div className="flex items-center flex-1 justify-end">
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
            <div className="flex items-center justify-between w-full">
              <div className="flex w-[104px] justify-between items-center">
                <div className="text-xs text-[#515251] font-medium">From</div>
                <div className="text-sm font-bold text-black">New Delhi</div>
              </div>
              <div className="flex w-[99px] justify-between items-center">
                <div className="text-xs text-[#515251] font-medium ">To</div>
                <div className="text-sm font-bold text-black text-right">
                  Mumbai
                </div>
              </div>
            </div>
          </div>

        
        </div>
        <div className="flex flex-col items-end gap-2.5">
          <div className="flex items-end gap-2.5">
            <span className="font-extrabold text-[#190041] text-[26px] tracking-[-0.21px] leading-[36.4px] font-['Plus_Jakarta_Sans',Helvetica]">
              ₹1,000.00
            </span>
          </div>
          <Button
            onClick={handleClick}
            className="flex items-center justify-center gap-1 px-4 py-2 bg-[#631CFF] rounded-[28px] shadow-[0px_2px_0px_#EEEEEE] text-white font-medium text-base tracking-[-0.13px] leading-[22.4px] font-['Inter',Helvetica]"
          >
            View Details
            <ArrowUpRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
