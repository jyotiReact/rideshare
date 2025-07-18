import Terms from "@/components/terms&Conditions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { JSX } from "react";

export const StepTwo = (): JSX.Element => {
  // Route options data
  const routeOptions = [
    {
      id: "route1",
      duration: "19 min",
      tollInfo: "No tolls",
      distance: "10 km",
      path: "Udyyog Path and Kurali Chandigarh Rd",
      selected: true,
    },
    {
      id: "route2",
      duration: "19 min",
      tollInfo: "No tolls",
      distance: "10 km",
      path: "Udyyog Path and Kurali Chandigarh Rd",
      selected: false,
    },
    {
      id: "route3",
      duration: "19 min",
      tollInfo: "No tolls",
      distance: "10 km",
      path: "Udyyog Path and Kurali Chandigarh Rd",
      selected: false,
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col w-full h-screen lg:gap-0 gap-6 items-start bg-white">
      <div className="flex flex-col lg:order-1 order-2 items-center justify-center gap-[60px] lg:px-[100px] px-5 py-0 flex-1 h-full w-full">
        <div className="flex flex-col items-center justify-center gap-10 self-stretch w-full">
          <div className="flex flex-col items-center gap-2.5 self-stretch w-full">
            <div className="flex flex-col items-center justify-center gap-[35px] self-stretch w-full">
              <div className="flex items-center justify-between self-stretch w-full">
                <h1 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#353535] text-3xl">
                  Select Route
                </h1>
                <span className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#353535] text-base">
                  Step 2/7
                </span>
              </div>
            </div>
          </div>

          <RadioGroup defaultValue="route1" className="w-full">
            {routeOptions.map((route, index) => (
              <React.Fragment key={route.id}>
                <div className="flex items-center gap-2 px-1 py-3 w-full">
                  <div className="inline-flex items-center gap-2.5">
                    <RadioGroupItem
                      value={route.id}
                      id={route.id}
                      className={
                        route.selected
                          ? "w-[18px] h-[18px] bg-[#d0f500] border-[5px] border-[#631cff]"
                          : "w-[18px] h-[18px] border-2 border-[#e6e7e8]"
                      }
                    />
                    <div className="inline-flex flex-col items-start justify-center gap-1">
                      <div className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base leading-7 whitespace-nowrap">
                        {route.duration} - {route.tollInfo}
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-neutralblackb-600 text-sm leading-[24.5px] whitespace-nowrap">
                        {route.distance} - {route.path}
                      </div>
                    </div>
                  </div>
                </div>
                {index < routeOptions.length - 1 && (
                  <Separator className="border-[#e9e9eb]" />
                )}
              </React.Fragment>
            ))}
          </RadioGroup>

          <div className="flex flex-col items-center gap-[25px] self-stretch w-full">
            <Link
              href="/publish-ride/step-3"
              className="w-full py-[15px] bg-[#631cff] rounded-[25px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px]  text-center"
            >
              Continue
            </Link>
            <div className="text-center mt-1 lg:w-[500px]">
              <Terms />
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="h-full lg:order-2 order-1 w-full">
        <img
          className="w-full h-full object-cover"
          alt="Map showing route"
          src="/images/map.png"
        />
      </div>
    </div>
  );
};
