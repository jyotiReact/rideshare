import { ArrowRightIcon, ChevronRightIcon, XIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingLayout } from "@/components/layout/BookingLayout";
import StepLine from "@/components/ui/step-line";
import PassengerInfoCard from "@/components/passengerInfoCard";
import Profile from "@/components/ui/profile";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CarSignalIcon } from "@hugeicons/core-free-icons";

export const RideDetails = (): JSX.Element => {
  // Trip data
  const tripData = {
    date: "Monday, 23 June",
    departureTime: "12:50",
    duration: "4h:30m",
    arrivalTime: "12:50", // This would typically be calculated based on departure + duration
    location: {
      name: "Delhi",
      address: "Metro Station jahangirpuri,250, J Block, Jahangipuri",
    },
  };

  // Price data
  const priceData = {
    seats: 2,
    amount: "₹1320",
    paymentMethod: "Cash",
    paymentLocation: "Pay in car",
  };

  // Passenger data
  const passengerData = {
    name: "Ritik Bhardwaj",
    route: "Chandigarh → Shimla",
    profileImage: "/ellipse-11-1.png",
    verificationBadge: "/checkmark-badge-01.svg",
    seats: 2,
  };

  // Driver and car data
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
    <>
      <BookingLayout
        title="Ride Details"
        description={"Booking will only be confirmed once the driver "}
      >
        <div className="flex flex-col w-[785px] items-start gap-[25px]">
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

                  <StepLine line={false} />
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
              </div>
            </CardContent>
            <CardContent className="flex flex-col items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] p-0">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-1xl tracking-[0] leading-[normal]">
                Passengers
              </h2>

              <PassengerInfoCard />
            </CardContent>
          </Card>
          <Card className="flex flex-col items-start gap-[30px] px-10 py-[30px] w-full bg-white rounded-[10px] border border-solid border-[#f2f2f2]">
            <CardContent className="flex flex-col items-start justify-center gap-5 w-full p-0">
              <h2 className="self-stretch mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-black text-1xl">
                Driver and Car
              </h2>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-3.5 relative">
                    <Profile />

                    <div className="flex flex-col items-start gap-2.5">
                      <div className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-black text-base tracking-[-0.13px] leading-[22.4px]">
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

            <div className="flex items-center justify-between w-full">
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
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    PB
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    36
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    L2
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#332f2a] text-lg tracking-[0.54px] leading-[26px]">
                    2500
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-[5px]">
                <HugeiconsIcon icon={CarSignalIcon} color="#631CFF" />

                <div className="flex items-end gap-1">
                  <div className="flex items-center gap-[5px]">
                    <div className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-base tracking-[-0.13px] leading-[22.4px] whitespace-nowrap">
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
          <div className="flex items-start gap-5 w-full">
            <Button
              variant="outline"
              className="flex-1 justify-center items-center gap-5 p-5 bg-white rounded-[50px] border border-solid border-[#f2f2f2]"
            >
              <span className="font-medium text-[#e33629] text-base leading-7">
               Cancel Ride
              </span>
              <XIcon className="w-5 h-5" color="#e33629" />
            </Button>

            <Button className="flex-1 justify-center items-center gap-5 p-5 bg-[#631cff] rounded-[50px]">
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
