// components/Notifications.tsx
import JourneyDetails from "@/components/journeyDetails";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Profile from "@/components/ui/profile";
import { JourneyDetailsType } from "@/types";
import { ArrowRightIcon, CheckSquareIcon, XIcon } from "lucide-react";
import React from "react";



type NotificationsProps = {
  journeyDetails: JourneyDetailsType;
};

export const Notifications = ({
  journeyDetails,
}: NotificationsProps): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-5 relative">
      {/* Map Card */}
      <Card className="p-5 bg-white rounded-[10px] border border-solid border-[#f2f2f2]">
        <CardContent className="p-0">
          <img
            className="w-full h-[248px]"
            alt="Map Screenshot"
            src="/images/inboxmap.svg"
          />
        </CardContent>
      </Card>

      {/* Journey Details Card */}
      <Card className="w-full px-10 py-5 bg-white rounded-[10px] border border-solid border-[#f2f2f2]">
        <CardContent className="p-0 flex flex-col gap-[30px]">
          {/* Journey Section */}
          <JourneyDetails journeyData={journeyDetails} />

          {/* Rider Profile Section */}
          <div className="flex flex-col items-start justify-center gap-5 w-full rounded-[10px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3.5">
                <Profile />
                <div className="flex flex-col items-start gap-2.5">
                  <span className="font-bold text-black text-base tracking-[-0.13px] leading-[22.4px]">
                    Ritik Bhardwaj
                  </span>
                  <div className="flex items-center gap-2.5 w-full">
                    <span className="font-medium text-[#101828] text-sm">
                      Chandigarh → Shimla
                    </span>
                    <div className="w-[99px] h-[18px]" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-5 w-[229px]">
                <span className="font-bold text-[#5b5b5b] text-base text-right leading-5 whitespace-nowrap">
                  2 Seats
                </span>
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center gap-2.5 py-2.5 w-full">
              <img
                className="w-6 h-6"
                alt="Agreement icon"
                src="/agreement-01.svg"
              />
              <span className="font-medium text-black text-sm text-center leading-5">
                Never cancels Rides
              </span>
            </div>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-[15px] bg-[#631cff1a] text-[#631cff] rounded-[25px]"
            >
              <img
                className="w-5 h-5"
                alt="Messenger icon"
                src="/messenger.svg"
              />
              <span className="font-bold text-sm tracking-[-0.11px] leading-[19.6px]">
                Contact Ritik
              </span>
            </Button>
          </div>

          {/* Revenue Section */}
          <div className="flex flex-col w-full gap-[30px] pb-[30px] border-b border-[#cbcbcb]">
            <h2 className="font-bold text-black text-2xl">Revenue</h2>
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
