"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"; 

export const ContentDisplaySection: React.FC = () => {
  return (
    <section className="flex items-center justify-center gap-[100px] w-full px-12">
      <div className="flex flex-col w-[410px] items-start gap-7">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="font-bold text-[#232f1a] text-4xl tracking-[-0.29px] leading-[50.4px] font-plus-jakarta-sans">
            Got a car? Share your ride, save your money.
          </h2>

          <p className="font-normal text-[#515251] text-sm leading-[22.4px] font-plus-jakarta-sans">
            Make your next journey fun, affordable, eco-friendly — and a great
            way to meet new people along the way.
          </p>
        </div>

        <Button
          variant="outline"
          className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-basewhite rounded-[28px] border border-[#e5e5e5] shadow-[0px_2px_0px_#d0f500] font-medium text-neutral-900 text-base leading-[22.4px] font-inter"
        >
          Offer Ride
          <ArrowUpRightIcon className="w-5 h-5" />
        </Button>
      </div>

      <Image
        src="/images/family.png"
        alt="People sharing a ride in a car"
        width={628}
        height={401}
        className="w-[628.81px] h-[401px]"
      />
    </section>
  );
};
