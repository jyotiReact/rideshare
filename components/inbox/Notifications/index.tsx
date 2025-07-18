// components/Notifications.tsx
import JourneyDetails from "@/components/journeyDetails";
import PassengerInfoCard from "@/components/passengerInfoCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JourneyDetailsType } from "@/types";
import { Agreement01Icon, MessengerIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckSquareIcon, XIcon } from "lucide-react";
import React, { JSX } from "react";

type NotificationsProps = {
  journeyDetails: JourneyDetailsType;
};

export const Notifications = ({
  journeyDetails,
}: NotificationsProps): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-5 relative p-5">
      {/* Map Card */}
      <Card className="md:p-5 p-2 bg-white rounded-[10px] border border-solid border-[#f2f2f2]">
        <CardContent className="p-0">
          <img
            className="w-full md:h-[248px] "
            alt="Map Screenshot"
            src="/images/inboxmap.svg"
          />
        </CardContent>
      </Card>

      {/* Journey Details Card */}
      <Card className="w-full md:px-10 px-5 md:py-5 bg-white rounded-[10px] border border-solid border-[#f2f2f2]">
        <CardContent className="p-0 flex flex-col gap-[30px]">
          {/* Journey Section */}
          <JourneyDetails journeyData={journeyDetails} />

          {/* Rider Profile Section */}
          <div className="flex flex-col items-start justify-center gap-5 w-full rounded-[10px]">
            <PassengerInfoCard />

            <div className="flex items-center gap-2.5 py-2.5 w-full">
              <HugeiconsIcon
                icon={Agreement01Icon}
                width={20}
                color="#631CFF"
              />

              <span className="font-medium text-black text-sm text-center leading-5">
                Never cancels Rides
              </span>
            </div>

            <Button
              variant="outline"
              className="inline-flex items-center w-fit justify-center gap-2.5 px-5 py-[15px] bg-[#631cff1a] text-[#631cff] rounded-[25px]"
            >
              <HugeiconsIcon icon={MessengerIcon} width={20} color="#631CFF" />
              <span className="font-bold text-sm tracking-[-0.11px] leading-[19.6px]">
                Contact Ritik
              </span>
            </Button>
          </div>

          {/* Revenue Section */}
          <div className="flex flex-col w-full md:gap-[30px] gap-4 pb-[30px] border-b border-[#cbcbcb]">
            <h2 className="font-bold text-black md:text-2xl text-[20px]">Revenue</h2>
            <div className="flex items-center justify-around gap-[39px] px-5 py-4 w-full bg-[#0000000a] rounded-[10px] shadow-[2px_2px_8px_#0000000d] opacity-80">
              <div className="flex items-center justify-between flex-1 rounded-[10px]">
                <span className="font-bold text-[#5b5b5b] text-base text-right leading-5 whitespace-nowrap">
                  2 Seats
                </span>
                <span className="font-bold text-black text-xl tracking-[-0.16px] leading-7 whitespace-nowrap">
                  ₹1320
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-start gap-5 w-full">
        <Button
          variant="outline"
          className="flex-1 justify-center items-center gap-5 p-5 bg-white rounded-[50px] border border-solid border-[#f2f2f2]"
        >
          <span className="font-semibold text-[#e33629] text-base leading-7">
            Reject
          </span>
          <XIcon className="w-5 h-5" />
        </Button>

        <Button className="flex-1 justify-center items-center gap-5 p-5 bg-[#631cff] rounded-[50px]">
          <span className="font-semibold text-white text-base leading-7">
            Approve
          </span>
          <CheckSquareIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
