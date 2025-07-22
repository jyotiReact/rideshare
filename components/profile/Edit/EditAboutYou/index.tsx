"use client";

import { Button } from "@/components/ui/button";
import React, { JSX, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BookingLayout } from "@/components/layout/BookingLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setAboutYou } from "@/store/authslice";
import { useRouter } from "next/navigation";

export const EditAboutYou = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const aboutYou = useSelector((state: RootState) => state.user.aboutYou);

  const [comments, setComments] = useState(aboutYou || "");

  const handleSave = () => {
    dispatch(setAboutYou(comments));
    router.push("/profile");
  };

  return (
    <BookingLayout
      title="About You"
      description="Edit the details of your preferences and about you"
    >
      <div className="flex flex-col lg:w-[785px] w-full h-full items-start lg:gap-[10px] justify-between">
        <Card className="w-full lg:py-5 lg:px-[40px] px-2 py-2">
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
            <label className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
              Comments/ Introduction
            </label>
            <Textarea
              placeholder="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="h-36 px-5 py-[18px] rounded-[20px] border border-[#d9d9d9]"
            />
          </div>
        </Card>
        {/* Save Button */}
        <div className="inline-flex flex-col items-start gap-5 relative mt-[30px] lg:w-[300px] w-full">
          <Button
            className="inline-flex items-center justify-center gap-2.5 px-[50px] py-[15px] rounded-[100px] text-white w-full"
            onClick={handleSave}
          >
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base text-center tracking-[-0.13px] leading-[22.4px]">
              Save
            </span>
          </Button>
        </div>
      </div>
    </BookingLayout>
  );
};
