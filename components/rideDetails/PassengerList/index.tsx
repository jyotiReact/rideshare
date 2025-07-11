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
    <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
      <CardContent className="flex flex-col gap-5 px-10 py-5">
        {alreadyDeparted && (
          <h3 className="text-2xl font-bold text-black">
            Passengers{" "}
            <span className="text-[#631cff] text-lg">
              ({passengers.length})
            </span>
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
                  <div className="text-base font-bold text-black">
                    {passenger.name}
                  </div>
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
          <div className="text-base font-bold text-[#353535]">
            No Passengers yet
          </div>
        )}
      </CardContent>
    </Card>
  );
};
