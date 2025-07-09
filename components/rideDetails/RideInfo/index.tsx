"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Profile from "@/components/ui/profile";
import StepLine from "@/components/ui/step-line";
import { CarSignalIcon, ZapFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const journeyData = {
  date: "Monday, 23 June",
  departureTime: "12:50",
  arrivalTime: "12:50",
  duration: "4h:30m",
  locations: [
    {
      city: "Delhi",
      address: "Metro Station jahangirpuri,250, J Block, Jahangipuri",
    },
    {
      city: "Delhi",
      address: "Metro Station jahangirpuri,250, J Block, Jahangipuri",
    },
  ],
};

const driverData = {
  name: "Ritik B.",
  rating: "4.8",
  avatar: "/ellipse-11-4.png",
  verified: true,
};

const vehicleData = {
  brand: "Tata",
  model: "Tiago",
};

export const RideDetailsSection = ({ alreadyDeparted }): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full max-w-[450px] items-start gap-[30px] relative">
      <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
        <CardContent className="flex flex-col items-start gap-[30px] px-10 py-5">
          <div className="flex flex-col items-start gap-[30px] pt-0 pb-[30px] px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#cbcbcb]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
              {journeyData.date}
            </div>

            <div className="flex  justify-center gap-5  w-full h-full">
              <div className="inline-flex flex-col items-start justify-between relative self-stretch flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal]">
                    {journeyData.departureTime}
                  </div>
                </div>

                <div className="inline-flex items-center justify-end gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-xs text-right tracking-[0] leading-[normal]">
                    {journeyData.duration}
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal]">
                      {journeyData.arrivalTime}
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-between relative self-stretch flex-[0_0_auto]">
                <StepLine />

                <div className="flex items-center relative flex-1 self-stretch w-full">
                  <div className="relative w-7 h-7">
                    <div className="h-7 bg-[#631cff33] rounded-[14px]">
                      <div className="relative w-3 h-3 top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-solid border-[#631cff] shadow-[0px_0px_30px_#631cff]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col   gap-10  h-full">
                {journeyData.locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#515251] text-base tracking-[0] leading-[normal]">
                        {location.city}
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-xs tracking-[0] leading-[normal]">
                        {location.address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
              <Profile />

              <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-base tracking-[-0.13px] leading-[22.4px]">
                  {driverData.name}
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <Badge className="inline-flex gap-1 px-2 py-1 bg-[#0e7a31] items-center relative flex-[0_0_auto] rounded-3xl">
                    <img
                      className="relative w-3 h-[11px]"
                      alt="Svg"
                      src="/images/whitestar.png"
                    />

                    <div className="w-fit font-medium text-white text-sm relative [font-family:'Manrope',Helvetica] text-center tracking-[0] leading-5 whitespace-nowrap">
                      {driverData.rating}
                    </div>
                  </Badge>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
              <HugeiconsIcon icon={CarSignalIcon} />

              <div className="inline-flex items-end gap-1 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-base tracking-[-0.13px] leading-[22.4px] whitespace-nowrap">
                    <span className="text-black tracking-[-0.02px]">
                      {vehicleData.brand}{" "}
                    </span>
                    <span className="text-[#747574] tracking-[-0.02px]">
                      {vehicleData.model}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Button
        onClick={() => {
          router.push(`/booking`);
        }}
        className="w-full px-4 py-[18px] bg-[#631cff] rounded-[28px] border border-solid flex gap-2 items-center"
      >
        <HugeiconsIcon icon={ZapFreeIcons} color="#ffffff" />

        <span className="font-medium text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap font-['Plus_Jakarta_Sans',Helvetica]">
          Book
        </span>
      </Button>
    </div>
  );
};
