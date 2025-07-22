"use client";

import PublishLayout from "@/components/layout/PublishLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckIcon, MinusIcon, PlusIcon, UsersIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { JSX, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep5Data } from "@/store/rideSlice";
import { RootState } from "@/store/store";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01FreeIcons } from "@hugeicons/core-free-icons";

export const StepFive = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Get current values from Redux store
  const { seats, price } = useSelector((state: RootState) => state.ride.step5);
  
  // Recommended price values
  const recommendedPrice = {
    min: "1200",
    max: "1500",
  };

  // Initialize local state with Redux values
  const [passengerCount, setPassengerCount] = useState<number>(seats);
  const [priceValue, setPriceValue] = useState<string>(price.toString());
  const priceIncrement = 100; // Fixed increment/decrement value

  // Update Redux store whenever values change
  useEffect(() => {
    dispatch(setStep5Data({ 
      seats: passengerCount,
      price: parseInt(priceValue) || 0
    }));
  }, [passengerCount, priceValue, dispatch]);

  // Passenger count handlers
  const handlePassengerIncrement = () => {
    if (passengerCount < 4) {
      setPassengerCount(prev => prev + 1);
    }
  };

  const handlePassengerDecrement = () => {
    if (passengerCount > 1) {
      setPassengerCount(prev => prev - 1);
    }
  };

  // Price handlers
  const handlePriceIncrement = () => {
    setPriceValue(prev => {
      const currentPrice = parseInt(prev) || 0;
      return (currentPrice + priceIncrement).toString();
    });
  };

  const handlePriceDecrement = () => {
    setPriceValue(prev => {
      const currentPrice = parseInt(prev) || 0;
      const newPrice = currentPrice - priceIncrement;
      return (newPrice > 0 ? newPrice : currentPrice).toString();
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPriceValue(value || "0");
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
      <div className="flex flex-col items-start gap-10 justify-between relative self-stretch flex-[0_0_auto]">
        {/* Passengers Section */}
        <div className="flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
          <div className="flex flex-col items-start md:gap-[15px] gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
              Passengers
            </div>

            <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5 px-4 py-2.5 relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px] h-auto"
                onClick={handlePassengerDecrement}
              >
                <MinusIcon className="w-6 h-6" />
              </Button>

              <div className="flex items-center justify-center gap-1 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                  {passengerCount.toString().padStart(2, '0')}
                </div>
              </div>

              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5 px-4 py-2.5 relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px] h-auto"
                onClick={handlePassengerIncrement}
              >
                <PlusIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <Card className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] border-none shadow-none">
            <CardContent className="flex items-center gap-2.5 px-1 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e9e9eb] p-0">
              <UsersIcon className="w-6 h-6 text-[#631CFF] md:block hidden" />

              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] p-2 text-[#474B57] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-base tracking-[0] leading-7 whitespace-nowrap">
                    Maximum 4 passengers in the backseat
                  </div>
                </div>
                  <HugeiconsIcon icon={CheckmarkCircle01FreeIcons} className="w-6 h-6 text-[#631CFF] sm:block hidden" />
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

            <div className="flex items-start sm:gap-[15px] gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5 md:px-6 md:py-2.5 px-2 relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px]"
                onClick={handlePriceDecrement}
              >
                <MinusIcon className="w-6 h-6" />
                <div className="relative w-fit font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                  ₹{priceIncrement}
                </div>
              </Button>

              <div className="flex items-center gap-[5px] relative flex-1 self-stretch grow">
                <div className="gap-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] items-center justify-center p-4 rounded-[40px] border border-solid border-[#d9d9d9] inline-flex relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-bold text-black text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                    ₹
                  </div>
                </div>

                <Input
                  className="flex items-center justify-center gap-1 md:px-5 md:py-[18px] relative flex-1 self-stretch grow rounded-[40px] border border-solid border-[#d9d9d9]"
                  value={priceValue}
                  onChange={handlePriceChange}
                />
              </div>

              <Button
                variant="default"
                className="inline-flex w-fit items-center gap-2.5 md:px-6 md:py-2.5 px-2 relative self-stretch flex-[0_0_auto] bg-[#631cff] rounded-[40px]"
                onClick={handlePriceIncrement}
              >
                <PlusIcon className="w-[17.5px] h-[17.5px] ml-[-0.75px]" />
                <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                  ₹{priceIncrement}
                </div>
              </Button>
            </div>
          </div>

          <div className="inline-flex flex-col w-full gap-[30px] mt-4 px-2.5 py-[5px] relative flex-[0_0_auto] bg-[#319f431a] rounded-[10px] md:rounded-full">
            <div className="relative mt-[-1.00px] font-normal text-[#319f43] text-xs tracking-[0] leading-[16.8px]">
              <span className="font-medium">Generally </span>
              <span className="font-bold">
                ₹{recommendedPrice.min} - ₹{recommendedPrice.max}
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