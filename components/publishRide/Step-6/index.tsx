"use client";

import PublishLayout from "@/components/layout/PublishLayout";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import React, { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep6Data } from "@/store/rideSlice";
import { RootState } from "@/store/store";

export const StepSix = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { bookingType } = useSelector((state: RootState) => state.ride.step6);

  const handleContinue = () => {
    router.push("/publish-ride/step-7");
  };

  const handleOptionChange = (value: 'instant' | 'manual') => {
    dispatch(setStep6Data({ bookingType: value }));
  };

  // Define booking options data for mapping
  const bookingOptions = [
    {
      id: "instant",
      title: "Instant Booking",
      description: "Ride gets automatically accepted as soon as someone books.",
      defaultChecked: true,
    },
    {
      id: "manual",
      title: "Select from requests manually",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      defaultChecked: false,
    },
  ];

  return (
    <PublishLayout
      stepCount={6}
      title="Enable Instant Booking?"
      buttons={[
        {
          label: "Continue",
          handleClick: handleContinue,
          variant: "default",
        },
      ]}
    >
      <RadioGroup
        value={bookingType}
        onValueChange={handleOptionChange}
        className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
      >
        {bookingOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center gap-2 px-1 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e9e9eb]"
          >
            <div className="flex w-[364px] items-center gap-2.5 relative">
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className={
                  bookingType === option.id
                    ? "relative w-[18px] h-[18px] bg-[#d0f500] rounded-[33px] border-[5px] border-solid border-[#631cff]"
                    : "relative w-[18px] h-[18px] rounded-[33px] border-2 border-solid border-[#e6e7e8]"
                }
              />
              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                <label
                  htmlFor={option.id}
                  className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base tracking-[0] leading-7 whitespace-nowrap"
                >
                  {option.title}
                </label>
                <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-sm tracking-[0] leading-[24.5px]">
                  {option.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </PublishLayout>
  );
};