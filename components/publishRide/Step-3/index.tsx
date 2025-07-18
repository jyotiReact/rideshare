"use client";
import PublishLayout from "@/components/layout/PublishLayout";
import { StepOvers } from "@/components/stepOvers";
import { CheckCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { JSX, useState } from "react";

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
    { type: "From", location: "New Delhi", hasPin: false },
    { type: "Via", location: "Ambala", hasPin: true },
    { type: "To", location: "Chandigarh", hasPin: false },
  ];

  return (
    <PublishLayout
      stepCount={3}
      title="Add Stopovers"
      buttons={[
        {
          label: "Add City",
          handleClick: () => router.push("/publish-ride/step-3/add-city"),
          variant: "twoTone",
        },
        {
          label: "Continue",
          handleClick: () => {
            !showSteps
              ? setShowSteps(true)
              : router.push("/publish-ride/step-4");
          },
          variant: "default",
        },
      ]}
    >
      <section className="flex flex-col items-start self-stretch w-full pl-4 ">
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
    </PublishLayout>
  );
};
