"use client";
import { StepOvers } from "@/components/stepOvers";
import Terms from "@/components/terms&Conditions";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const StepThree = (): JSX.Element => {
  const [showSteps, setShowSteps] = useState(false);
  const router = useRouter();
  // Data for the stopover cities
  const cities = [
    { name: "Ambala", selected: true },
    { name: "Karnal", selected: false },
    { name: "Pipli", selected: false },
  ];
  const locations = [
    { type: "From", location: "New Delhi" },
    { type: "Via", location: "Ambala", hasPin: true },
    { type: "To", location: "Chandigarh" },
  ];

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="flex flex-col  items-center justify-center gap-10">
        <header className="flex flex-col items-center gap-2.5 self-stretch w-full">
          <div className="flex flex-col items-center gap-[35px] self-stretch w-full">
            <div className="flex items-center justify-between self-stretch w-full">
              <h1 className="text-[#353535] text-3xl tracking-[0] leading-[normal] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold">
                Add Stopovers
              </h1>

              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#353535] text-base tracking-[0] leading-[normal]">
                Step 3/7
              </span>
            </div>
          </div>
        </header>

        <section className="flex flex-col items-start self-stretch w-full">
          {!showSteps ? (
            cities.map((city, index) => (
              <div
                key={city.name}
                className={`flex items-center gap-2 px-1 py-3 relative self-stretch w-full ${
                  index < cities.length - 1 ? "border-b border-[#e9e9eb]" : ""
                }`}
              >
                <div className="inline-flex items-center gap-2.5">
                  {city.selected ? (
                    <CheckCircleIcon className="w-[18px] h-[18px] text-[#631cff]" />
                  ) : (
                    <div className="relative w-[18px] h-[18px] rounded-[33px] border-2 border-solid border-[#e6e7e8]" />
                  )}

                  <div className="inline-flex flex-col items-start justify-center gap-1">
                    <div className="mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base tracking-[0] leading-7 whitespace-nowrap">
                      {city.name}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <StepOvers steps={locations} />
          )}
        </section>

        <footer className="flex flex-col items-center gap-[25px] self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Link href="/publish-ride/step-3/add-city " className="w-full">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2.5 px-5 py-[15px] self-stretch w-full bg-[#631cff1a] rounded-[25px]  text-sm tracking-[-0.11px] leading-[19.6px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold border-none "
              >
                Add City
              </Button>
            </Link>

            <Button
              onClick={
                !showSteps
                  ? () => setShowSteps(true)
                  : () => router.push("/publish-ride/step-4")
              }
              className="flex items-center justify-center gap-2.5 px-5 py-[15px] self-stretch w-full  rounded-[25px] text-white text-sm tracking-[-0.11px] leading-[19.6px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold "
            >
              Continue
            </Button>
          </div>

          <Terms />
        </footer>
      </div>
    </section>
  );
};
