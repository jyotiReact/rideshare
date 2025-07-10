"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "lucide-react";
import { AddCircleHalfDotIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// Example data types (can be extended if needed)
interface ListItem {
  text: string;
}

interface ProgressData {
  completed: number;
  total: number;
}

const VerifyAccount: React.FC = () => {
  // Verification items data
  const verifyProfileItems: ListItem[] = [
    { text: "Verify your Govt. ID" },
    { text: "Confirm email" },
    { text: "Confirm phone" },
  ];

  const aboutYouItems: ListItem[] = [
    { text: "Add a mini bio" },
    { text: "Edit travel preferences" },
  ];

  const vehiclesItems: ListItem[] = [{ text: "Add a vehicle" }];

  // Progress data
  const progressData: ProgressData = {
    completed: 2,
    total: 6,
  };

  return (
    <div className="flex flex-col w-[840px] items-start justify-center gap-5 relative">
      {/* Verification banner */}
      <Card className="flex flex-col items-start justify-center gap-[15px] p-[30px] relative self-stretch w-full rounded-[20px] bg-[linear-gradient(0deg,rgba(202,230,44,1)_0%,rgba(221,255,29,1)_100%)] border-none">
        <CardContent className="p-0 space-y-[15px] w-full">
          <div className="inline-flex flex-col items-start justify-center gap-2.5">
            <h3 className="text-black tracking-[-0.14px] leading-[25.2px] font-semibold text-lg font-sans">
              Verify your Account
            </h3>
            <p className="font-normal text-black text-sm tracking-[-0.11px] leading-[19.6px] font-sans">
              This helps build trust, encouraging members to travel with you.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[15px] w-full">
            <p className="font-semibold text-black text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap font-sans">
              {progressData.completed} of {progressData.total} complete
            </p>

            <div className="flex items-center gap-1.5 w-full">
              {Array.from({ length: progressData.total }).map((_, index) => (
                <div
                  key={`progress-${index}`}
                  className={`flex-1 h-1 rounded-[100px] ${
                    index < progressData.completed
                      ? "bg-[#631cff]"
                      : "bg-[#0000000f]"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main content card */}
      <Card className="flex flex-col items-start gap-5 p-10 w-full bg-white rounded-[20px] border border-solid border-[#f2f1f1]">
        <CardContent className="p-0 space-y-5 w-full">
          {/* Verify your profile section */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="text-neutralblackb-900 tracking-[0] leading-[31.5px] relative self-stretch mt-[-1.00px] font-semibold text-lg font-sans">
              Verify your profile
            </h3>

            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              {verifyProfileItems.map((item, index) => (
                <div
                  key={`verify-${index}`}
                  className={`p-5 ${
                    index < verifyProfileItems.length - 1
                      ? "border-b [border-bottom-style:solid] border-[#e9e9eb]"
                      : ""
                  } flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]`}
                >
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <HugeiconsIcon
                      icon={AddCircleHalfDotIcon}
                      width={20}
                      color="#631cff"
                    />

                    <span className="relative w-fit mt-[-1.00px] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px] whitespace-nowrap font-sans">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About you section */}
          <div className="flex-col items-start gap-2.5 flex-[0_0_auto] flex relative self-stretch w-full">
            <h3 className="relative self-stretch mt-[-1.00px] font-semibold text-neutralblackb-900 text-lg tracking-[0] leading-[31.5px] font-sans">
              About you
            </h3>

            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              {aboutYouItems.map((item, index) => (
                <div
                  key={`about-${index}`}
                  className={`p-5 ${
                    index < aboutYouItems.length - 1
                      ? "border-b [border-bottom-style:solid] border-[#e9e9eb]"
                      : ""
                  } flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]`}
                >
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <HugeiconsIcon
                      icon={AddCircleHalfDotIcon}
                      width={20}
                      color="#631cff"
                    />

                    <span className="relative w-fit mt-[-1.00px] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px] whitespace-nowrap font-sans">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicles section */}
          <div className="flex-col items-start gap-2.5 flex-[0_0_auto] flex relative self-stretch w-full">
            <h3 className="relative self-stretch mt-[-1.00px] font-semibold text-neutralblackb-900 text-lg tracking-[0] leading-[31.5px] font-sans">
              Vehicles
            </h3>

            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              {vehiclesItems.map((item, index) => (
                <div
                  key={`vehicle-${index}`}
                  className="px-5 py-3 flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <HugeiconsIcon
                      icon={AddCircleHalfDotIcon}
                      width={20}
                      color="#631cff"
                    />

                    <span className="relative w-fit mt-[-1.00px] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px] whitespace-nowrap font-sans">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyAccount;
