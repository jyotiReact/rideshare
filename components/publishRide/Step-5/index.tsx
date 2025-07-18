"use client";

import PublishLayout from "@/components/layout/PublishLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckIcon, MinusIcon, PlusIcon, UsersIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { JSX } from "react";

export const StepFive = (): JSX.Element => {
  // Data for passenger count and price
  const router = useRouter();

  const passengerCount = "02";
  const priceValue = "1000";
  const priceIncrement = "₹100";
  const recommendedPrice = {
    min: "₹1200",
    max: "₹1500",
  };

  return (
    <PublishLayout
      stepCount={5}
      title="Passengers And Price"
      buttons={[
        {
          label: "Continue",
          handleClick: () => router.push("/publish-ride/step-6"),
          variant: "default",
        },
      ]}
    >
      <div className="flex flex-col items-start gap-10 justify-between relative self-stretch  flex-[0_0_auto]">
        {/* Passengers Section */}
        <div className="flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
              Passengers
            </div>

            <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5 px-4 py-2.5 relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px] h-auto"
              >
                <MinusIcon className="w-6 h-6" />
              </Button>

              <div className="flex items-center justify-center gap-1 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                  {passengerCount}
                </div>
              </div>

              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5 px-4 py-2.5 relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px] h-auto"
              >
                <PlusIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <Card className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] border-none shadow-none">
            <CardContent className="flex items-center gap-2.5 px-1 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e9e9eb] p-0">
              <UsersIcon className="w-6 h-6" />

              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] text-[#474B57] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-base tracking-[0] leading-7 whitespace-nowrap">
                    Maximum 2 passengers in the backseat
                  </div>
                </div>

                <CheckIcon className="w-[18px] h-[18px]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price per Passenger Section */}
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
              Price per Passenger
            </div>

            <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5  md:px-6 md:py-2.5  px-2  relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px] "
              >
                <MinusIcon className="w-6 h-6" />
                <div className="relative w-fit  font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                  {priceIncrement}
                </div>
              </Button>

              <div className="flex items-center gap-[5px] relative flex-1 self-stretch grow">
                <div className=" gap-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] items-center justify-center p-4 rounded-[40px] border border-solid border-[#d9d9d9] inline-flex relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px]  font-bold text-black text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                    ₹
                  </div>
                </div>

                <Input
                  className="flex items-center justify-center gap-1 md:px-5 md:py-[18px] relative flex-1 self-stretch grow rounded-[40px] border border-solid border-[#d9d9d9] "
                  defaultValue={priceValue}
                />
              </div>

              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5 md:px-6 md:py-2.5  px-2  relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px] "
              >
                <PlusIcon className="w-[17.5px] h-[17.5px] ml-[-0.75px]" />
                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                  {priceIncrement}
                </div>
              </Button>
            </div>
          </div>

          <div className="inline-flex flex-col w-full   gap-[30px] mt-4 px-2.5  py-[5px] relative flex-[0_0_auto] bg-[#319f431a] rounded-[10px] md:rounded-full">
            <div className="relative  mt-[-1.00px]  font-normal text-[#319f43] text-xs  tracking-[0] leading-[16.8px] ">
              <span className="font-medium">Generally </span>
              <span className="font-bold">
                {recommendedPrice.min} - {recommendedPrice.max}
              </span>
              <span className="font-medium">
                {" "}
                is recommended price for such distances.
              </span>
            </div>
          </div>
        </div>
      </div>
    </PublishLayout>
  );
};
