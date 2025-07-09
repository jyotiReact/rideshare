import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-[100px] relative self-stretch w-full flex-[0_0_auto] px-12">
      <img
        className="relative w-[500.96px] h-[465.5px]"
        alt="Vector"
        src="/images/girls.png"
      />

      <div className="flex flex-col w-[410px] items-start gap-7 relative">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#232f1a] text-4xl tracking-[-0.29px] leading-[50.4px]">
            Help us keep you safe from scams
          </h2>

          <p className="relative self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#515251] text-sm tracking-[0] leading-[22.4px]">
            At BlaBlaCar, we&#39;re working hard to make our platform as secure
            as it can be. But when scams do happen, we want you to know exactly
            how to avoid and report them. Follow our tips to help us keep you
            safe.
          </p>
        </div>

        <Button
          variant="outline"
          className="inline-flex items-center justify-center gap-1 px-4 py-2 relative flex-[0_0_auto] bg-basewhite rounded-[28px] border border-solid border-[#e5e5e5] shadow-[0px_2px_0px_#d0f500] font-['Inter',Helvetica] font-medium text-neutral-900 text-base tracking-[-0.13px] leading-[22.4px]"
        >
          Learn More
          <ArrowUpRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
