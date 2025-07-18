"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { JSX, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, TickDouble02Icon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import StepLine from "@/components/ui/step-line";
import { BookingLayout } from "@/components/layout/BookingLayout";
import JourneyDetails from "@/components/journeyDetails";

export const BookingRequest = (): JSX.Element => {
  const [isBooked, setIsBooked] = useState(false);
  const router = useRouter();

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

  const priceDetails = {
    amount: "₹1320",
    seats: "2 Seats",
    paymentMethod: "Cash",
    paymentLocation: "Pay in car",
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
      <Card className="w-full flex flex-col items-start gap-[30px] md:px-[60px] px-5 py-10 bg-white rounded-t-xl border border-[#f2f2f2]">
        <CardContent className="p-0 w-full">
          <JourneyDetails journeyData={journeyData} />

          {/* Price Info */}
          <div className="flex flex-col gap-5 mt-[30px]">
            <div className="flex flex-col gap-[30px] pb-[30px] border-b border-[#cbcbcb]">
              <h2 className="text-2xl font-bold text-black">
                Price to be paid
              </h2>

              <div className="flex justify-between items-center px-10 py-4 bg-[#0000000a] rounded-[10px] shadow-sm opacity-80">
                <div>
                  <div className="text-base font-bold text-[#5b5b5b]">
                    {priceDetails.seats}
                  </div>
                  <div className="text-xl font-bold text-black">
                    {priceDetails.amount}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-[#5b5b5b]">
                    {priceDetails.paymentLocation}
                  </div>
                  <div className="text-xl font-bold text-black">
                    {priceDetails.paymentMethod}
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
              <div className="inline-flex flex-col items-start gap-5 relative mt-[30px] w-full">
                <Button
                  onClick={() => {
                    setIsBooked(true);
                    setTimeout(() => {
                      setIsBooked(false);
                      router.push("/request-details");
                    }, 2000);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px]  rounded-[100px] text-white w-full lg:w-fit"
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
