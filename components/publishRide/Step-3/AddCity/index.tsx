"use client";
import { Button } from "@/components/ui/button";
import { PinLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";

export const AddCity = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex w-full h-screen items-start bg-white">
      {/* Left side - Form section */}
      <div className="flex flex-col items-center justify-center gap-[60px] px-[100px] py-0 flex-1 h-full">
        <div className="flex flex-col items-center justify-center gap-10 self-stretch w-full">
          {/* Header and Input section */}
          <div className="flex flex-col items-center gap-2.5 self-stretch w-full">
            <div className="flex flex-col items-center justify-center gap-[35px] self-stretch w-full">
              {/* Title and Step indicator */}
              <div className="flex items-center justify-between self-stretch w-full">
                <h1 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#353535] text-3xl">
                  Add a city
                </h1>
                <span className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#353535] text-base">
                  Step 3/7
                </span>
              </div>

              {/* Input field section */}
              <div className="flex flex-col items-start gap-[15px] self-stretch w-full">
                <label className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm">
                  Stopover
                </label>
                <div className="flex items-start gap-[15px] relative self-stretch w-full">
                  <div className="flex items-center gap-1 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                    <HugeiconsIcon icon={PinLocation01Icon} width={20} />

                    <input
                      type="text"
                      name="from"
                      placeholder={"Enter location"}
                      className="flex-1 bg-transparent border-none outline-none [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal] placeholder:text-[#b0b0b0]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button and Terms section */}
          <div className="flex flex-col items-center gap-[25px] self-stretch w-full">
            <Button
              onClick={() => router.push("/publish-ride/step-3")}
              className="w-full py-[15px]  rounded-[25px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-sm tracking-[-0.11px]"
            >
              Add
            </Button>

            <div className="flex flex-col items-center gap-[30px] self-stretch w-full">
              <div className="inline-flex flex-col items-start justify-center gap-[15px]">
                <div className="flex w-[500px] items-center justify-center gap-2.5">
                  <p className="text-center font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#a1a1a1] text-xs leading-[16.8px]">
                    By proceeding, you agree to our
                    <span className="underline"> Terms of Use</span> and confirm
                    you have read our Privacy and Cookie Statement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Map image */}
      <div className="h-full">
        <img
          className="w-full h-full object-cover"
          alt="Map showing route"
          src="/images/map.png"
        />
      </div>
    </div>
  );
};
