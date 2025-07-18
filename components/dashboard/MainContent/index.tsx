import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import React, { JSX } from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row items-center  lg:gap-[100px] gap-[50px] w-full px-4 md:px-12  max-w-7xl mx-auto ">
      <img
        className="w-full max-w-[300px] lg:max-w-[500px] h-auto"
        alt="Help illustration"
        src="/images/girls.png"
      />

      <div className="flex flex-col items-start max-w-md gap-6">
        <div className="flex flex-col gap-5 w-full ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232f1a] leading-snug font-plus-jakarta-sans">
            Help us keep you safe from scams
          </h2>

          <p className="text-sm md:text-base text-[#515251] leading-relaxed font-plus-jakarta-sans">
            At BlaBlaCar, we&apos;re working hard to make our platform as secure
            as it can be. But when scams do happen, we want you to know exactly
            how to avoid and report them. Follow our tips to help us keep you safe.
          </p>
        </div>

        <Button
          variant="outline"
          className="inline-flex items-center w-fit justify-center gap-1 px-4 py-2 bg-basewhite rounded-[28px] border border-[#e5e5e5] shadow-[0px_2px_0px_#d0f500] text-neutral-900 text-base font-medium"
        >
          Learn More
          <ArrowUpRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
