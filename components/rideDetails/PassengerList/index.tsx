"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Profile from "@/components/ui/profile";
import {
  Agreement01Icon,
  ArrowRight01Icon,
  Backpack01Icon,
  Car01Icon,
  CheckmarkBadge02Icon,
  CheckmarkSquare01Icon,
  Flag01Icon,
  SecurityCheckIcon,
  ZapFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

interface PassengerListSectionProps {
  alreadyDeparted: boolean;
}

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

const passengers = [
  {
    name: "Ritik Bhardwaj",
    from: "New Delhi",
    to: "Chandigarh",
    avatar: "/images/profile.jpg",
  },
  {
    name: "Ritik Bhardwaj",
    from: "New Delhi",
    to: "Chandigarh",
    avatar: "/images/profile.jpg",
  },
];

export const PassengerListSection = ({
  alreadyDeparted,
}: PassengerListSectionProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-[30px]">
      {/* Driver Profile Card */}
      <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
        <CardContent className="flex flex-col gap-5 px-10 py-5">
          {/* Driver Info */}
          <div className="flex justify-between border-b border-[#cbcbcb] pb-5">
            <div className="flex items-center gap-3.5">
              <Profile />
              <div className="flex flex-col gap-2.5">
                <h4 className="font-bold text-base text-black">{driverInfo.name}</h4>
                <div className="flex items-center gap-2.5">
                  <Badge className="gap-1 px-2 py-1 bg-[#0e7a31] rounded-3xl">
                    <img src="/images/whitestar.png" className="w-3 h-[11px]" alt="star" />
                    <span className="text-white text-sm font-medium">{driverInfo.rating}</span>
                  </Badge>
                  <span className="text-sm font-medium text-black">{driverInfo.totalRatings}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Button className="gap-2.5 px-5 py-[15px] bg-[#631cff1a] rounded-[25px] hover:bg-[#631cff1a]">
                <HugeiconsIcon icon={CheckmarkBadge02Icon} color="#631CFF" />
                <span className="text-sm font-bold text-[#631cff]">Contact Ritik</span>
              </Button>
              <HugeiconsIcon icon={ArrowRight01Icon} />
            </div>
          </div>

          {/* Driver Stats */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <HugeiconsIcon icon={SecurityCheckIcon} color="#631CFF" />
              <span className="text-sm font-medium text-black">Verified Profile</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2.5">
                <img src="/images/ridePublish.svg" className="w-[21.38px] h-[21.38px]" alt="Rides" />
                <span className="text-sm font-medium text-black">Rides Published and Completed</span>
              </div>
              <span className="text-sm font-extrabold text-[#631cff]">{driverInfo.ridesCompleted}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <HugeiconsIcon icon={Agreement01Icon} color="#631CFF" />
              <span className="text-sm font-medium text-black">Never cancels Rides</span>
            </div>
          </div>

          {/* Car and Booking Info */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between">
              <div className="flex items-center gap-2.5">
                <HugeiconsIcon icon={Backpack01Icon} color="#631CFF" />
                <span className="text-sm font-medium text-black">Trunk Bag per Passenger</span>
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
                  <img src="/images/wheel.png" className="w-[10px] h-[10px]" alt="wheel" />
                  <span className="text-[6.8px] font-extrabold text-[#043ea2]">IND</span>
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
      <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
        <CardContent className="flex flex-col gap-5 px-10 py-5">
          {alreadyDeparted && (
            <h3 className="text-2xl font-bold text-black">
              Passengers <span className="text-[#631cff] text-lg">({passengers.length})</span>
            </h3>
          )}

          {alreadyDeparted ? (
            passengers.map((passenger, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-5">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage src={passenger.avatar} alt="Profile" />
                  </Avatar>

                  <div className="flex flex-col gap-2.5">
                    <div className="text-base font-bold text-black">{passenger.name}</div>
                    <div className="flex gap-2.5 text-sm text-[#101828]">
                      <span>{passenger.from}</span>
                      <span className="text-xs text-[#515251]">To</span>
                      <span>{passenger.to}</span>
                    </div>
                  </div>
                </div>
                <HugeiconsIcon icon={ArrowRight01Icon} />
              </div>
            ))
          ) : (
            <div className="text-base font-bold text-[#353535]">No Passengers yet</div>
          )}
        </CardContent>
      </Card>

      {/* Report Section */}
      <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
        <CardContent className="flex h-[68px] items-center justify-between px-[30px] py-0">
          <span className="text-base font-bold text-black">Report/FlagIcon this ride</span>
          <HugeiconsIcon icon={Flag01Icon} color="red" />
        </CardContent>
      </Card>
    </div>
  );
};
