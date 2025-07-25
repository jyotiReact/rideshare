"use client"

import { ChevronRightIcon, XIcon } from "lucide-react";
import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingLayout } from "@/components/layout/BookingLayout";
import PassengerInfoCard from "@/components/passengerInfoCard";
import Profile from "@/components/ui/profile";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CarSignalIcon } from "@hugeicons/core-free-icons";
import JourneyDetails from "@/components/journeyDetails";

export const RideDetails = (): JSX.Element => {
  // Driver and car data
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
    <>
      <BookingLayout
        title="Ride Details"
        description={"Booking will only be confirmed once the driver "}
      >
        <div className="flex flex-col lg::w-[785px] w-full items-start gap-[25px]">
          <Card className="w-full flex flex-col items-start gap-[30px] md:px-[60px] px-5 py-10 bg-white rounded-t-xl border border-[#f2f2f2]">
            <CardContent className="p-0 w-full">
              <JourneyDetails journeyData={journeyData} />

              {/* Price Info */}
              <div className="flex flex-col gap-5 mt-[30px]">
                <div className="flex flex-col gap-[30px] pb-[30px] border-b border-[#cbcbcb]">
                  <h2 className="text-2xl font-bold text-black">
                    Price to be paid
                  </h2>

                  <div className="flex justify-between items-center md:px-10 py-4 px-5 bg-[#0000000a] rounded-[10px] shadow-sm opacity-80">
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
              </div>
            </CardContent>
            <CardContent className="flex flex-col items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] p-0">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-1xl tracking-[0] leading-[normal]">
                Passengers
              </h2>

              <PassengerInfoCard />
            </CardContent>
          </Card>
          <Card className="flex flex-col items-start gap-[30px] md:px-10 px-5 py-[30px] w-full bg-white rounded-[10px] border border-solid border-[#f2f2f2]">
            <CardContent className="flex flex-col items-start justify-center gap-5 w-full p-0">
              <h2 className="self-stretch mt-[-1.00px]   font-bold text-black text-1xl">
                Driver and Car
              </h2>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-3.5 relative">
                    <Profile />

                    <div className="flex flex-col items-start gap-2.5">
                      <div className="  font-bold text-black text-base tracking-[-0.13px] leading-[22.4px]">
                        Ritik B.
                      </div>

                      <Badge className="flex items-center gap-1 px-2 py-1 bg-[#0e7a31] text-white rounded-3xl">
                        <img
                          className="w-3 h-[11px]"
                          alt="Star"
                          src="/images/star.svg"
                        />
                        <span className="font-['Manrope',Helvetica] font-medium text-sm leading-5">
                          4.8
                        </span>
                      </Badge>
                    </div>
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-black" />
              </div>
            </CardContent>

            <div className="flex   md:flex-row flex-col md:items-center  md:justify-between gap-4 w-full">
              <div className="flex items-center justify-center gap-1 px-4 py-2 bg-basewhite rounded-[28px] border border-solid border-[#e5e5e5] shadow-[0px_2px_0px_#eeeeee]">
                <div className="flex flex-col items-start">
                  <div className="relative w-[12.15px] h-[12.15px] rounded-[45.56px] overflow-hidden">
                    <div className="relative w-2.5 h-2.5 top-px left-px bg-[url(/group-1000004719.png)] bg-[100%_100%]">
                      <img
                        className="absolute w-[9px] h-[9px] top-px left-px"
                        alt="Indian flag"
                        src="/images/wheel.png"
                      />
                    </div>
                  </div>

                  <div className="w-fit font-['Inter',Helvetica] font-extrabold text-[#043ea2] text-[6.8px] text-center tracking-[-0.07px] whitespace-nowrap">
                    IND
                  </div>
                </div>

                <div className="flex items-center gap-[3px]">
                  <span className="  font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    PB
                  </span>
                  <span className="  font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    36
                  </span>
                  <span className="  font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    L2
                  </span>
                  <span className="  font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    2500
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-[5px]">
                <HugeiconsIcon icon={CarSignalIcon} color="#631CFF" />

                <div className="flex items-end gap-1">
                  <div className="flex items-center gap-[5px]">
                    <div className="  font-bold text-base tracking-[-0.13px] leading-[22.4px] whitespace-nowrap">
                      <span className="text-black tracking-[-0.02px]">
                        Tata{" "}
                      </span>
                      <span className="text-[#747574] tracking-[-0.02px]">
                        Tiago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div className="flex md:flex-row flex-col items-start gap-5 w-full">
            <Button
              variant="outline"
              className="flex-1 md:justify-center justify-between  w-full items-center gap-5 md:p-5 bg-white rounded-[50px] border border-solid border-[#f2f2f2]"
            >
              <span className="font-medium text-[#e33629] text-base leading-7">
                Cancel Ride
              </span>
              <XIcon className="w-5 h-5" color="#e33629" />
            </Button>

            <Button className="flex-1 md:justify-center justify-between items-center gap-5 md:p-5 bg-[#631cff] w-full rounded-[50px]">
              <span className="font-medium text-white text-base leading-7">
                See Ride Offer
              </span>
              <HugeiconsIcon icon={ArrowRight01Icon} color="white" />
            </Button>
          </div>
        </div>
      </BookingLayout>
    </>
  );
};
