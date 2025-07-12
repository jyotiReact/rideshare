import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";


export const StepSix = (): JSX.Element => {
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
    <div className="inline-flex flex-col items-center justify-center gap-10 relative">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-[35px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#353535] text-4xl tracking-[0] leading-[normal]">
              Enable Instant Booking?
            </h1>
            <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#353535] text-base tracking-[0] leading-[normal]">
              Step 11/5
            </div>
          </div>
        </div>
      </div>

      {/* Radio Options Section */}
      <RadioGroup
        defaultValue="instant"
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
                  option.defaultChecked
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

      {/* Continue Button Section */}
      <div className="inline-flex flex-col items-center gap-10 relative flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center gap-5 relative flex-[0_0_auto]">
            <Button className="flex w-[514px] items-center justify-center gap-2.5 px-5 py-[15px] relative flex-[0_0_auto] bg-[#631cff] rounded-[25px] hover:bg-[#5016d0]">
              <span className="relative w-fit mt-[-2.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                Continue
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
