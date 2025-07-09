"use client";
import Terms from "@/components/terms&Conditions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PinLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";

import React from "react";

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
    <div className="relative w-full h-screen bg-white overflow-hidden items-center flex ">
      {/* Main Content */}
      <div className="flex flex-col  items-center justify-center gap-10 absolute  left-1/2 -translate-x-1/2">
        <Card className="w-full border-none shadow-none">
          <CardContent className="flex flex-col items-center gap-2.5 p-0">
            <div className="flex flex-col items-center justify-center gap-[35px] relative self-stretch w-full">
              {/* Header */}
              <div className="flex items-center justify-between relative self-stretch w-full">
                <h1 className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#353535] text-3xl tracking-[0] leading-[normal]">
                  Publish a ride
                </h1>
                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#353535] text-base tracking-[0] leading-[normal]">
                  Step 1/7
                </div>
              </div>

              {/* Address Fields */}
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
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-[25px] relative self-stretch w-full">
          <Button
            className="flex items-center justify-center gap-2.5 px-5 py-[15px] relative self-stretch w-full bg-[#631cff] rounded-[25px] text-white font-bold text-sm tracking-[-0.11px] leading-[19.6px]"
            onClick={() => {
              router.push("/publish-ride/step-2");
            }}
          >
            Continue
          </Button>

          {/* Terms and Conditions */}
          <Terms />
        </div>
      </div>
    </div>
  );
};
