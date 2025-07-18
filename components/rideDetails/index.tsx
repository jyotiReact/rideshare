"use client";

import React, { JSX } from "react";
import { PassengerListSection } from "./PassengerList";
import { useRouter } from "next/navigation";
import { RideDetailsLayout } from "../layout/RideDetailsLayout";
import { Card, CardContent } from "../ui/card";
import Profile from "../ui/profile";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Agreement01Icon, ArrowRight01Icon, Backpack01Icon, Car01Icon, CheckmarkBadge02Icon, CheckmarkSquare01Icon, Flag01Icon, SecurityCheckIcon, ZapFreeIcons } from "@hugeicons/core-free-icons";

const driverInfo = {
  name: "Ritik B.",
  fullName: "Ritik Bhardwaj",
  rating: "4.8/5",
  totalRatings: "11 Ratings",
  ridesCompleted: "200",
  avatar: "/ellipse-11-4.png",
  verified: true,
  carModel: "Renault Triber",
  carColor: "White",
  licensePlate: "PB 36 L2 2500",
};

export const RideDetails = (): JSX.Element => {
  const alreadyDeparted = false;
  const router = useRouter();

  return (
    <RideDetailsLayout>
      <div className="flex flex-col w-full items-start gap-[30px]">
        {/* Driver Profile Card */}
        <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
          <CardContent className="flex flex-col gap-5 lg:px-10 px-5 py-5">
            {/* Driver Info */}
            <div className="flex justify-between border-b border-[#cbcbcb] pb-5">
              <div className="flex items-center gap-3.5">
                <Profile />
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-bold text-base text-black">
                    {driverInfo.name}
                  </h4>
                  <div className="flex items-center gap-2.5">
                    <Badge className="gap-1 px-2 py-1 bg-[#0e7a31] rounded-3xl">
                      <img
                        src="/images/whitestar.png"
                        className="w-3 h-[11px]"
                        alt="star"
                      />
                      <span className="text-white text-sm font-medium">
                        {driverInfo.rating}
                      </span>
                    </Badge>
                    <span className="text-sm font-medium text-black">
                      {driverInfo.totalRatings}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Button className="lg:gap-2.5 lg:px-5 lg:py-[15px] p-0 bg-[#631cff1a] w-10 h-10 lg:w-fit rounded-[25px] hover:bg-[#631cff1a]">
                  <HugeiconsIcon icon={CheckmarkBadge02Icon} color="#631CFF" width={20} />
                  <span className="text-sm font-bold text-[#631cff] lg:block hidden">
                    Contact Ritik
                  </span>
                </Button>
                <HugeiconsIcon icon={ArrowRight01Icon} />
              </div>
            </div>

            {/* Driver Stats */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <HugeiconsIcon icon={SecurityCheckIcon} color="#631CFF" />
                <span className="text-sm font-medium text-black">
                  Verified Profile
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/ridepublish.svg"
                    className="w-[21.38px] h-[21.38px]"
                    alt="Rides"
                  />
                  <span className="text-sm font-medium text-black">
                    Rides Published and Completed
                  </span>
                </div>
                <span className="text-sm font-extrabold text-[#631cff]">
                  {driverInfo.ridesCompleted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <HugeiconsIcon icon={Agreement01Icon} color="#631CFF" />
                <span className="text-sm font-medium text-black">
                  Never cancels Rides
                </span>
              </div>
            </div>

            {/* Car and Booking Info */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between">
                <div className="flex items-center gap-2.5">
                  <HugeiconsIcon icon={Backpack01Icon} color="#631CFF" />
                  <span className="text-sm font-medium text-black">
                    Trunk Bag per Passenger
                  </span>
                </div>
                <span className="text-sm font-extrabold text-[#631cff]">1</span>
              </div>

              <div className="flex items-center gap-2.5">
                <HugeiconsIcon
                  icon={alreadyDeparted ? ZapFreeIcons : CheckmarkSquare01Icon}
                  color="#631CFF"
                />
                <span className="text-sm font-medium text-[#101828]">
                  {alreadyDeparted
                    ? "Instant Booking Confirmation"
                    : "Request approval required by rider"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <HugeiconsIcon icon={Car01Icon} color="#631CFF" />
                  <span className="text-sm font-medium text-[#101828]">
                    {driverInfo.carModel} - {driverInfo.carColor}
                  </span>
                </div>

                <div className="flex items-center gap-2 border border-[#e5e5e5] px-4 py-2 rounded-[28px] shadow-[0px_2px_0px_#eeeeee]">
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/wheel.png"
                      className="w-[10px] h-[10px]"
                      alt="wheel"
                    />
                    <span className="text-[6.8px] font-extrabold text-[#043ea2]">
                      IND
                    </span>
                  </div>
                  <span className="text-sm font-extrabold text-[#332f2a]">
                    {driverInfo.licensePlate}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passenger List */}
        <PassengerListSection alreadyDeparted={alreadyDeparted} />

        {/* Report Section */}
        <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
          <CardContent className="flex h-[68px] items-center justify-between lg:px-[30px] px-5 py-0">
            <span className="text-base font-bold text-black">
              Report/FlagIcon this ride
            </span>
            <HugeiconsIcon icon={Flag01Icon} color="red" />
          </CardContent>
        </Card>
      </div>
    </RideDetailsLayout>
  );
};
