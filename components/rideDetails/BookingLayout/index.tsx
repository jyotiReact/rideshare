"use client";

import { Card, CardContent } from "@/components/ui/card";
import StepLine from "@/components/ui/step-line";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface BookingLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const BookingLayout = ({
  title,
  description,
  children,
}: BookingLayoutProps): JSX.Element => {
  const router = useRouter();

  const journeyData = {
    date: "Monday, 23 June",
    startTime: "12:50",
    duration: "4h:30m",
    endTime: "12:50",
    locations: [
      {
        city: "Delhi",
        address: "Metro Station Jahangirpuri, 250, J Block, Jahangirpuri",
      },
      {
        city: "Delhi",
        address: "Metro Station Jahangirpuri, 250, J Block, Jahangirpuri",
      },
    ],
    price: {
      amount: "₹1320",
      seats: "2 Seats",
      paymentMethod: "Cash",
      paymentLocation: "Pay in car",
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-zinc-50 overflow-hidden py-5 px-20">
      <div className="flex w-full items-start gap-2.5">
        {/* Left Card */}
        <Card className="flex flex-col items-start gap-5 p-10 relative bg-white rounded-[10px] border-[#f2f2f2]">
          <div
            className="inline-flex items-center gap-2.5 p-2.5 bg-[#0000000d] rounded-[20px] cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
          <CardContent className="p-0 space-y-2">
            <h1 className="text-3xl font-bold text-[#353535]">
              {title}
            </h1>
            <p className="text-base text-[#515251]">
              {description}
            </p>
          </CardContent>
        </Card>

        {/* Right Card */}
        <Card className="w-full flex flex-col items-start gap-[30px] px-[60px] py-10 bg-white rounded-t-xl border border-[#f2f2f2]">
          <CardContent className="p-0 w-full">
            <h2 className="text-2xl font-bold text-black">
              {journeyData.date}
            </h2>

            <div className="flex gap-5 w-full mt-6">
              {/* Time Section */}
              <div className="flex flex-col justify-between">
                <div className="text-sm text-[#515251]">
                  {journeyData.startTime}
                </div>
                <div className="text-xs text-[#515251] text-right">
                  {journeyData.duration}
                </div>
                <div className="text-sm text-[#515251]">
                  {journeyData.endTime}
                </div>
              </div>

              {/* Vertical Step Line */}
              <div className="flex flex-col items-center justify-between">
                <StepLine />
                <div className="w-7 h-7 bg-[#631cff33] rounded-[14px] relative">
                  <div className="w-3 h-3 bg-[#d0f500] border border-[#631cff] shadow-[0_0_30px_#631cff] rounded-md absolute top-2 left-2" />
                </div>
              </div>

              {/* Locations */}
              <div className="flex flex-col gap-16 h-full">
                {journeyData.locations.map((loc, index) => (
                  <div key={index} className="flex flex-col gap-1 w-full">
                    <div className="text-base font-bold text-[#515251]">
                      {loc.city}
                    </div>
                    <div className="text-xs font-medium text-[#515251]">
                      {loc.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Info */}
            <div className="flex flex-col gap-5 mt-[30px]">
              <div className="flex flex-col gap-[30px] pb-[30px] border-b border-[#cbcbcb]">
                <h2 className="text-2xl font-bold text-black">
                  Price to be paid
                </h2>

                <div className="flex justify-between items-center px-10 py-4 bg-[#0000000a] rounded-[10px] shadow-sm opacity-80">
                  <div>
                    <div className="text-base font-bold text-[#5b5b5b]">
                      {journeyData.price.seats}
                    </div>
                    <div className="text-xl font-bold text-black">
                      {journeyData.price.amount}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-[#5b5b5b]">
                      {journeyData.price.paymentLocation}
                    </div>
                    <div className="text-xl font-bold text-black">
                      {journeyData.price.paymentMethod}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">{children}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
