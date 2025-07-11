"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, TickDouble02Icon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import StepLine from "@/components/ui/step-line";
import { BookingLayout } from "@/components/layout/BookingLayout";

export const BookingRequest = (): JSX.Element => {
  const [isBooked, setIsBooked] = useState(false);
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
    <BookingLayout
      title="Booking Request"
      description="Booking will only be confirmed once the driver approves of your request."
    >
      {isBooked && (
        <div className="flex items-center justify-center w-full h-screen bg-white fixed top-0 z-20 right-0 left-0">
          <div className="bg-[#631cff] rounded-full w-24 h-24 flex items-center justify-center">
            <HugeiconsIcon
              icon={TickDouble02Icon}
              color="white"
              className="w-14 h-14"
            />
          </div>
        </div>
      )}
      <Card className="w-full flex flex-col items-start gap-[30px] px-[60px] py-10 bg-white rounded-t-xl border border-[#f2f2f2]">
        <CardContent className="p-0 w-full">
          <h2 className="text-2xl font-bold text-black">{journeyData.date}</h2>

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
              <StepLine   />
              {/* <div className="w-7 h-7 bg-[#631cff33] rounded-[14px] relative">
                <div className="w-3 h-3 bg-[#d0f500] border border-[#631cff] shadow-[0_0_30px_#631cff] rounded-md absolute top-2 left-2" />
              </div> */}
              <StepLine  line={false} />
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

            <div className="w-full">
              <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
                <label className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
                  Comments/ Introduction
                </label>
                <Textarea
                  placeholder="Comments"
                  className="h-36 px-5 py-[18px] rounded-[20px] border border-[#d9d9d9]"
                />
              </div>
              {/* Book Button */}
              <div className="inline-flex flex-col items-start gap-5 relative mt-[30px]">
                <Button
                  onClick={() => {
                    setIsBooked(true);
                    setTimeout(() => {
                      setIsBooked(false);
                      router.push("/request-details");
                    }, 2000);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px]  rounded-[100px] text-white"
                >
                  <HugeiconsIcon
                    icon={Calendar01Icon}
                    width={20}
                    color="white"
                  />
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base text-center tracking-[-0.13px] leading-[22.4px]">
                    Request to book
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </BookingLayout>
  );
};
