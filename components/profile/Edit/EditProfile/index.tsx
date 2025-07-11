"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {  PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { BookingLayout } from "@/components/layout/BookingLayout";

const formFields = [
  {
    section: "personal",
    fields: [
      { id: "firstName", label: "First name", value: "Ritik" },
      { id: "lastName", label: "Last name", value: "Bhardwaj" },
    ],
  },
  {
    section: "details",
    fields: [{ id: "dob", label: "Date of Birth", value: "20/03/2003" }],
  },
];

export const EditProfile = (): JSX.Element => {
  return (
    <BookingLayout
      title="Edit Details"
      description="Edit your personal details which are visible to other people."
    >
      <div className="flex flex-col w-[785px] items-start gap-[25px]">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-end justify-end relative">
          <img
            className="relative w-[137.81px] h-[137.81px] object-cover rounded-full"
            alt="Profile picture"
            src="/images/profile.jpg"
          />
          <Button
            size="icon"
            className="mt-[-45px] bg-[#631CFF] hover:bg-[#5016D0] rounded-full w-10 h-10 p-2 z-10"
          >
            <HugeiconsIcon icon={PencilEdit02Icon} color="white" />
          </Button>
        </div>
        {/* Personal Information Card */}
        <Card className="w-full border border-solid border-[#F2F2F2] rounded-[10px] shadow-none">
          <CardContent className="p-10 space-y-[30px]">
            <div className="space-y-[30px] w-full">
              {formFields[0].fields.map((field) => (
                <div key={field.id} className="space-y-[15px]">
                  <Label
                    htmlFor={field.id}
                    className="font-bold text-sm text-black font-['Plus_Jakarta_Sans',Helvetica]"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    defaultValue={field.value}
                    className="rounded-[40px] px-5 py-[19px] h-auto border-[#D9D9D9] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Date of Birth Card */}
        <Card className="w-full border border-solid border-[#F2F2F2] rounded-[10px] shadow-none">
          <CardContent className="p-10 space-y-[15px]">
            {formFields[1].fields.map((field) => (
              <div key={field.id} className="space-y-[15px]">
                <Label
                  htmlFor={field.id}
                  className="font-bold text-sm text-black font-['Plus_Jakarta_Sans',Helvetica]"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  defaultValue={field.value}
                  className="rounded-[40px] px-5 py-[19px] h-auto border-[#D9D9D9] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm"
                />
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Save Button */}
        <div className="w-[393px]">
          <Button className="w-full bg-[#631CFF] hover:bg-[#5016D0] rounded-[50px] p-3 h-auto font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-base">
            Save
          </Button>
        </div>
      </div>
    </BookingLayout>
  );
};
