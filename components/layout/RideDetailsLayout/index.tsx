"use client";

import React, { JSX, ReactNode } from "react";
import {
  AlertCircleFreeIcons,
  AlertCircleIcon,
  CarSignalIcon,
  ZapFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JourneyDetails from "@/components/journeyDetails";
import Profile from "@/components/ui/profile";
import { Badge } from "@/components/ui/badge";

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

interface RideDetailsLayoutProps {
  children: ReactNode;
  btnLabel?: string;
}
export const RideDetailsLayout = ({
  children,
  btnLabel = "Book",
}: RideDetailsLayoutProps): JSX.Element => {
  const alreadyDeparted = false;
  const router = useRouter();

  return (
    <div className="flex flex-col w-full bg-neutral-50 lg:px-20 px-5 py-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-[#353535]">Ride Details</h1>

        {/* Alert Message */}
        {alreadyDeparted && (
          <div className="flex items-center gap-2.5 px-5 py-[15px] bg-[#631cff1a] rounded-3xl">
            <HugeiconsIcon icon={AlertCircleFreeIcons} color="#631CFF" />
            <p className="text-sm font-bold text-[#631cff]">
              This Ride has already departed
            </p>
          </div>
        )}

        {/* Main Content */}
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex-1 lg:order-1 order-2">{children}</div>

          <div className="lg:w-1/3 w-full order-1 lg:order-2">
            <div className="flex flex-col w-full  items-start gap-[30px] relative">
              <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
                <CardContent className="flex flex-col items-start gap-[30px] lg:px-10 px-5 py-5">
                  <JourneyDetails journeyData={journeyData} />

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

                <span className="font-medium text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap  ">
                  {btnLabel}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
