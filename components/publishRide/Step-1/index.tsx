"use client";
import PublishLayout from "@/components/layout/PublishLayout";
import { Button } from "@/components/ui/button";
import { PinLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";

import React, { JSX } from "react";

export const StepOne = (): JSX.Element => {
  const router = useRouter();
  // Address input fields data
  const addressFields = [
    {
      label: "Origin",
      placeholder: "Enter full address",
    },
    {
      label: "Destination",
      placeholder: "Enter full address",
    },
  ];

  return (
    <PublishLayout
      stepCount={1}
      title="Publish a ride"
      buttons={[
        {
          label: "Continue",
          handleClick: () => router.push("/publish-ride/step-2"),
          variant: "default",
        },
      ]}
    >
      <div className="flex flex-col gap-10 w-full">
        {addressFields.map((field, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-[15px] relative self-stretch w-full"
          >
            <label className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
              {field.label}
            </label>
            <div className="flex items-center gap-[15px] relative  w-full">
              <div className="flex items-start gap-[15px] relative self-stretch w-full">
                <div className="flex items-center gap-1 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                  <HugeiconsIcon icon={PinLocation01Icon} width={20} />

                  <input
                    type="text"
                    name="from"
                    placeholder={field.placeholder}
                    className="flex-1 bg-transparent border-none outline-none [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal] placeholder:text-[#b0b0b0]"
                  />
                </div>
              </div>

              <Button className="inline-flex items-center justify-center  w-[50px] h-[50px]  rounded-full">
                <HugeiconsIcon icon={PinLocation01Icon} color="white" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </PublishLayout>
  );
};
