"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { JSX } from "react";

interface PassengerListSectionProps {
  alreadyDeparted?: {
    alreadyDeparted?: boolean | undefined;
    id?: string;
  };
  id?: string;
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
  id,
}: PassengerListSectionProps): JSX.Element => {
  return (
    <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
      <CardContent className="flex flex-col gap-5  px-5 py-5">
        {id != "instant" ? (
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Passengers{" "}
              <span className="text-[#631cff] text-lg">
                ({passengers.length})
              </span>
            </h3>
            <div className="flex flex-col gap-5">
              {passengers.map((passenger, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full "
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-[50px] h-[50px]">
                      <AvatarImage src={passenger.avatar} alt="Profile" />
                    </Avatar>

                    <div className="flex flex-col gap-1">
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
              ))}
            </div>
          </div>
        ) : (
          <div className="text-base font-bold text-[#353535]">
            No Passengers yet
          </div>
        )}
      </CardContent>
    </Card>
  );
};
