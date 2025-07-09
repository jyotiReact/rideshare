"use client";
import Terms from "@/components/terms&Conditions";
import { Button } from "@/components/ui/button";
import { Calendar03Icon, Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";
import React from "react";

const StepFour = () => {
  const router = useRouter();
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="flex flex-col  items-center justify-center gap-10 ">
        <header className="flex flex-col items-center gap-2.5 self-stretch w-full">
          <div className="flex flex-col items-center gap-[35px] self-stretch w-full">
            <div className="flex items-center justify-between self-stretch w-full">
              <h1 className="text-[#353535] text-3xl tracking-[0] leading-[normal] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold">
                Date and Time
              </h1>

              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#353535] text-base tracking-[0] leading-[normal]">
                Step 4/7
              </span>
            </div>
          </div>
        </header>
        <section className="flex flex-col items-start gap-6 self-stretch w-full">
          {/* Date Field */}
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
            <label
              htmlFor="date"
              className="relative w-fit mt-[-1.00px] font-bold text-black text-sm"
            >
              Date
            </label>

            <div className="flex items-start gap-[15px] relative self-stretch w-full">
              <div className="flex items-center gap-1.5 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                <HugeiconsIcon icon={Calendar03Icon} width={20} />

                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="DD/MM/YYYY"
                  className="bg-transparent outline-none border-none text-[#515251] font-medium text-sm w-full placeholder:text-[#b0b0b0] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                />
              </div>
            </div>
          </div>

          {/* Time Field */}
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
            <label
              htmlFor="time"
              className="relative w-fit mt-[-1.00px] font-bold text-black text-sm"
            >
              Time
            </label>

            <div className="flex items-start gap-[15px] relative self-stretch w-full">
              <div className="flex items-center gap-1.5 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                <HugeiconsIcon icon={Clock01Icon} width={20} />

                <input
                  type="text"
                  id="time"
                  name="time"
                  placeholder="HH:MM:SS"
                  className="bg-transparent outline-none border-none text-[#515251] font-medium text-sm w-full placeholder:text-[#b0b0b0] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <Button
            onClick={() => {
              router.push("/publish-ride/step-5");
            }}
            className="flex items-center justify-center gap-2.5 px-5 py-[15px] relative self-stretch w-full  rounded-[25px] font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px]"
          >
            Continue
          </Button>
        </section>
        <Terms />
      </div>
    </section>
  );
};

export default StepFour;
