"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { BookingLayout } from "../BookingLayout";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, TickDouble02Icon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";

export const BookingRequest = (): JSX.Element => {
  const [isBooked, setIsBooked] = useState(false);
  const router = useRouter();
  return (
    <BookingLayout
      title="Booking Request"
      description="Booking will only be confirmed once the driver approves of your request."
    >
      {isBooked && (
        <div className="flex items-center justify-center w-full h-screen bg-white fixed top-0 z-20 right-0 left-0">
          <div className="bg-[#631cff] rounded-full w-24 h-24 flex items-center justify-center">
            <HugeiconsIcon
              icon={TickDouble02Icon}
              color="white"
              className="w-14 h-14"
            />
          </div>
        </div>
      )}
      <div className="w-full">
        <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
          <label className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
            Comments/ Introduction
          </label>
          <Textarea
            placeholder="Comments"
            className="h-36 px-5 py-[18px] rounded-[20px] border border-[#d9d9d9]"
          />
        </div>
        {/* Book Button */}
        <div className="inline-flex flex-col items-start gap-5 relative mt-[30px]">
          <Button
            onClick={() => {
              router.push("/ride-details/instant-ride-details");
            }}
            className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px]  rounded-[100px] text-white"
          >
            <HugeiconsIcon icon={Calendar01Icon} width={20} color="white" />
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base text-center tracking-[-0.13px] leading-[22.4px]">
              Request to book
            </span>
          </Button>
        </div>
      </div>
    </BookingLayout>
  );
};
