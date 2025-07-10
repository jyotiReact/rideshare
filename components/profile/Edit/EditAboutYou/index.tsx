"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { EditLayout } from "../EditLayout";
import { HugeiconsIcon } from "@hugeicons/react";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const EditAboutYou = (): JSX.Element => {
  return (
    <EditLayout
      title="About You"
      description="Edit the details of your preferences and about you"
    >
      <div className="flex flex-col w-[785px] items-start gap-[10px]">
        <Card className="w-full py-5 px-[40px]">
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
            <label className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
              Comments/ Introduction
            </label>
            <Textarea
              placeholder="Comments"
              className="h-36 px-5 py-[18px] rounded-[20px] border border-[#d9d9d9]"
            />
          </div>
        </Card>
        {/* Book Button */}
        <div className="inline-flex flex-col items-start gap-5 relative mt-[30px] w-[300px]">
          <Button className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px]  rounded-[100px] text-white w-full">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base text-center tracking-[-0.13px] leading-[22.4px]">
              Save
            </span>
          </Button>
        </div>
      </div>
    </EditLayout>
  );
};
