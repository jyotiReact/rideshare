"use client";

import Terms from "@/components/terms&Conditions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep2Data } from "@/store/rideSlice";
import { RootState } from "@/store/store";
import { ChevronLeft } from "lucide-react";

interface RouteOption {
  id: string;
  duration: string;
  tollInfo: string;
  distance: string;
  path: string;
}

export const StepTwo = (): JSX.Element => {
  const dispatch = useDispatch();
  // Get stored route selection from Redux
  const { step2 } = useSelector((state: RootState) => state.ride);
  // Initialize with stored selection or default to route1
  const [selectedRouteId, setSelectedRouteId] = useState<string>(
    step2?.selectedRoute?.id || "route1"
  );

  // Route options data
  const routeOptions: RouteOption[] = [
    {
      id: "route1",
      duration: "19 min",
      tollInfo: "No tolls",
      distance: "10.2 km",
      path: "Via Udyog Path and Kurali Chandigarh Road",
    },
    {
      id: "route2",
      duration: "22 min",
      tollInfo: "₹75 toll at Kurali Plaza",
      distance: "11.5 km",
      path: "Via NH5 and Industrial Area",
    },
    {
      id: "route3",
      duration: "25 min",
      tollInfo: "No tolls",
      distance: "9.8 km",
      path: "Via Village Roads and Shortcuts",
    },
    {
      id: "route4",
      duration: "28 min",
      tollInfo: "₹110 total tolls",
      distance: "12.3 km",
      path: "Via Expressway and Service Lane",
    },
  ];

  // Sync with Redux if it changes (optional safety measure)
  useEffect(() => {
    if (step2?.selectedRoute?.id) {
      setSelectedRouteId(step2.selectedRoute.id);
    }
  }, [step2]);

  const handleRouteSelect = (value: string) => {
    setSelectedRouteId(value);
  };

  const handleContinue = () => {
    const selectedRoute = routeOptions.find(
      (route) => route.id === selectedRouteId
    );
    if (selectedRoute) {
      dispatch(
        setStep2Data({
          selectedRoute,
        })
      );
    }
  };

  return (
    <div className="flex lg:flex-row flex-col w-full lg:h-screen h-auto min-h-screen items-start bg-white">
      {/* Image Section - comes first in mobile view */}
      <div className="lg:h-full h-[250px] w-full lg:order-2 order-1 lg:flex-1">
        <img
          className="w-full h-full object-cover"
          alt="Map showing route"
          src="/images/map.png"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:order-1 order-2 items-center justify-center lg:px-[100px] px-4 py-6 lg:flex-1 w-full lg:overflow-y-auto">
        <div className="flex flex-col justify-center md:gap-10 gap-8 w-full max-w-[600px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-start gap-3">
              <Link
                href="/publish-ride/step-1"
                className="text-[#631cff] hover:text-[#4e16cc] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mt-2" />
              </Link>
              <h1 className="text-[#353535] md:text-3xl text-[24px] font-bold leading-normal">
                Select Route
              </h1>
            </div>
            <span className="font-medium text-[#353535] text-base">
              Step 2/7
            </span>
          </div>

          <RadioGroup
            value={selectedRouteId}
            onValueChange={handleRouteSelect}
            className="w-full"
          >
            {routeOptions.map((route, index) => (
              <React.Fragment key={route.id}>
                <div className="flex items-center gap-2 px-1 pl-4 py-3 w-full">
                  <div className="inline-flex items-center gap-2.5">
                    <RadioGroupItem
                      value={route.id}
                      id={route.id}
                      className={
                        selectedRouteId === route.id
                          ? "md:w-[18px] h-[18px] bg-[#d0f500] border-[5px] border-[#631cff]"
                          : "md:w-[18px] h-[18px] border-2 border-[#e6e7e8]"
                      }
                    />
                    <div className="inline-flex flex-col items-start justify-center gap-1">
                      <div className=" font-bold text-neutralblackb-600 text-base leading-7 whitespace-nowrap">
                        {route.duration} - {route.tollInfo}
                      </div>
                      <div className=" font-medium text-neutralblackb-600 text-sm leading-[24.5px] ">
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

          <div className="flex flex-col items-center gap-6 w-full">
            <Link
              href="/publish-ride/step-3"
              onClick={handleContinue}
              className="w-full py-4 bg-[#631cff] rounded-[25px] font-bold text-white text-sm text-center hover:bg-[#4e16cc] transition-colors"
            >
              Continue
            </Link>
            <div className="text-center w-full px-4">
              <Terms />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
