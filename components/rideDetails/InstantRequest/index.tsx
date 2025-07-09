import { ArrowRightIcon, XIcon } from "lucide-react";
import React from "react";
import { BookingLayout } from "../BookingLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const InstantRequest = (): JSX.Element => {
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
  const driverData = {
    name: "Ritik B.",
    rating: "4.8",
    profileImage: "/ellipse-11-1.png",
    verificationBadge: "/checkmark-badge-01.svg",
    licensePlate: {
      state: "PB",
      number: "36 L2 2500",
    },
    car: {
      make: "Tata",
      model: "Tiago",
    },
  };

  return (
    <>
      <BookingLayout
        title="Instant Request"
        description={"Booking will only be confirmed once the driver "}
      >
        <div className="flex flex-col gap-[25px] w-full">
          {/* Passengers section */}
          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="font-bold [font-family:'Plus_Jakarta_Sans',Helvetica] text-2xl">
              Passengers
            </h2>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <Avatar className="w-[63.34px] h-[63.34px]">
                      <AvatarImage
                        src={passengerData.profileImage}
                        alt={passengerData.name}
                      />
                      <AvatarFallback>
                        {passengerData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex w-[27px] h-[27px] items-center gap-[7.85px] p-[3.92px] absolute top-[34px] left-[41px] bg-[#631cff] rounded-[39.23px]">
                      <img
                        className="w-[18.83px] h-[18.83px]"
                        alt="Verification badge"
                        src={passengerData.verificationBadge}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2.5">
                    <span className="font-bold [font-family:'Plus_Jakarta_Sans',Helvetica] text-black text-base tracking-[-0.13px] leading-[22.4px]">
                      {passengerData.name}
                    </span>

                    <div className="flex items-center gap-2.5 w-full">
                      <span className="font-medium [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#101828] text-sm">
                        {passengerData.route}
                      </span>
                      <div className="w-[99px] h-[18px]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span className="font-bold [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#5b5b5b] text-base text-right leading-5 whitespace-nowrap">
                  {passengerData.seats} Seats
                </span>
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        {/* Driver and Car section */}
        <div className="flex flex-col items-start gap-5 w-full bg-zinc-50">
          <Card className="border border-solid border-[#f2f2f2] rounded-[10px]">
            <CardContent className="p-10 space-y-[30px]">
              <div className="flex flex-col items-start gap-5 w-full">
                <h2 className="font-bold [font-family:'Plus_Jakarta_Sans',Helvetica] text-2xl">
                  Driver and Car
                </h2>

                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3.5">
                      <div className="relative">
                        <Avatar className="w-[63.34px] h-[63.34px]">
                          <AvatarImage
                            src={driverData.profileImage}
                            alt={driverData.name}
                          />
                          <AvatarFallback>
                            {driverData.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex w-[27px] h-[27px] items-center gap-[7.85px] p-[3.92px] absolute top-[34px] left-[41px] bg-[#631cff] rounded-[39.23px]">
                          <img
                            className="w-[18.83px] h-[18.83px]"
                            alt="Verification badge"
                            src={driverData.verificationBadge}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col w-[57.71px] items-start gap-2.5">
                        <span className="self-stretch font-bold [font-family:'Plus_Jakarta_Sans',Helvetica] text-black text-base tracking-[-0.13px] leading-[22.4px]">
                          {driverData.name}
                        </span>

                        <Badge className="flex items-center gap-1 px-2 py-1 self-stretch w-full bg-[#0e7a31] rounded-3xl">
                          <img
                            className="w-3 h-[11px]"
                            alt="Star"
                            src="/svg.svg"
                          />
                          <span className="w-[21.71px] h-[17px] [font-family:'Manrope',Helvetica] font-medium text-white text-sm text-center leading-5 whitespace-nowrap">
                            {driverData.rating}
                          </span>
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center gap-1 px-4 py-2 bg-basewhite rounded-[28px] border border-solid border-[#e5e5e5] shadow-[0px_2px_0px_#eeeeee]">
                  <div className="flex flex-col items-start">
                    <div className="relative w-[12.15px] h-[12.15px] rounded-[45.56px] overflow-hidden">
                      <div className="relative w-2.5 h-2.5 top-px left-px bg-[url(/group-1000004719.png)] bg-[100%_100%]">
                        <img
                          className="absolute w-[9px] h-[9px] top-px left-px"
                          alt="Group"
                          src="/group.png"
                        />
                      </div>
                    </div>

                    <span className="w-fit [font-family:'Inter',Helvetica] font-extrabold text-[#043ea2] text-[6.8px] text-center tracking-[-0.07px] whitespace-nowrap">
                      IND
                    </span>
                  </div>

                  <div className="flex items-center gap-[3px]">
                    <span className="font-extrabold [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#332f2a] text-lg tracking-[0.54px] leading-[26px] whitespace-nowrap">
                      {driverData.licensePlate.state}
                    </span>
                    <span className="font-extrabold [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#332f2a] text-lg tracking-[0.54px] leading-[26px] whitespace-nowrap">
                      {driverData.licensePlate.number}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-[5px]">
                  <img
                    className="w-[21.82px] h-[21.82px]"
                    alt="Car signal"
                    src="/car-signal.svg"
                  />

                  <div className="flex items-end gap-1">
                    <span className="font-bold [font-family:'Plus_Jakarta_Sans',Helvetica] text-base tracking-[-0.13px] leading-[22.4px] whitespace-nowrap">
                      <span className="text-black tracking-[-0.02px]">
                        {driverData.car.make}{" "}
                      </span>
                      <span className="text-[#747574] tracking-[-0.02px]">
                        {driverData.car.model}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="flex items-start gap-5 w-full">
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-5 p-5 bg-white rounded-[50px] border border-solid border-[#f2f2f2]"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#e33629] text-base leading-7 whitespace-nowrap">
                  Cancel Ride
                </span>
              </div>
              <XIcon className="w-5 h-5" />
            </Button>

            <Button className="flex-1 flex items-center justify-center gap-5 p-5 bg-[#631cff] rounded-[50px]">
              <div className="flex items-center gap-2.5">
                <span className="font-semibold [font-family:'Plus_Jakarta_Sans',Helvetica] text-white text-base leading-7 whitespace-nowrap">
                  See Ride Offer
                </span>
              </div>
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </BookingLayout>
    </>
  );
};
