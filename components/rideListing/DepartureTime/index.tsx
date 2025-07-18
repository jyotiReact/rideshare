"use client";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon, RefreshCwIcon } from "lucide-react";
import React, { JSX } from "react";
import { Ride } from "@/types";
import RideListCard from "../RideListCard";
import { useRouter } from "next/navigation";

const rides: Ride[] = [
  {
    id: 1,
    departureTime: "12:50",
    arrivalTime: "16:50",
    duration: "04 h 00m",
    from: "New Delhi",
    to: "Chandigarh",
    rating: "4.8",
    originalPrice: "₹1,000.00",
    price: "₹1,000.00",
    driver: "Ritik B.",
    driverImage: "/ellipse-11-4.png",
    car: "Tiago, White",
    carColor: "text-[#631cff]",
    carBg: "bg-[#631cff1a]",
  },
  {
    id: 2,
    departureTime: "12:50",
    arrivalTime: "16:50",
    duration: "04 h 00m",
    from: "New Delhi",
    to: "Chandigarh",
    rating: "4.8",
    originalPrice: "₹1,000.00",
    price: "₹1,000.00",
    driver: "Ritik B.",
    driverImage: "/ellipse-11-4.png",
    car: "Tiago, White",
    carColor: "text-[#631cff]",
    carBg: "bg-[#631cff1a]",
  },
  {
    id: 3,
    departureTime: "12:50",
    arrivalTime: "16:50",
    duration: "04 h 00m",
    from: "New Delhi",
    to: "Chandigarh",
    rating: "4.8",
    originalPrice: "₹1,000.00",
    price: "₹1,000.00",
    driver: "Ritik B.",
    driverImage: "/ellipse-11-4.png",
    car: "Baleno, White",
    carColor: "text-[#631cff]",
    carBg: "bg-[#631cff1a]",
  },
  {
    id: 4,
    departureTime: "12:50",
    arrivalTime: "16:50",
    duration: "04 h 00m",
    from: "New Delhi",
    to: "Chandigarh",
    rating: "4.8",
    originalPrice: "₹1,000.00",
    price: "₹1,000.00",
    driver: "Ritik B.",
    driverImage: "/ellipse-11-4.png",
    car: "Baleno, White",
    carColor: "text-[#631cff]",
    carBg: "bg-[#631cff1a]",
  },
];

export const DepartureTimeSection = (): JSX.Element => {
    const router = useRouter();
  
  return (
    <section className="flex flex-col w-full  gap-10">
      {/* Header section */}
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center justify-between px-5 py-2.5 w-full bg-white rounded-t-[10px] border-t border-r border-l border-[#f2f1f1]">
          <div className="flex md:flex-row flex-col  gap-2.5">
            <div className="font-bold text-sm text-neutralblackb-500">
              Tomorrow
            </div>
            <div className="font-medium text-sm text-neutralblackb-500">
              Chandigarh → Shimla
            </div>
          </div>

          <Button
            variant="outline"
            className="  bg-transparent w-fit font-medium text-[#515251] text-sm tracking-[0] leading-[normal] rounded-full py-4 "
          >
            <span className="font-medium text-sm text-neutralblackb-500">
              Sort by
            </span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Stats info bar */}
        <div className=" w-full bg-[#D0F500]  relative">
          <div className="flex items-center justify-between px-5 py-2.5 h-full">
            <div className="text-sm text-black">
              <span className="font-normal">Showing </span>
              <span className="font-bold">1-9 </span>
              <span className="font-normal">of </span>
              <span className="font-bold">36</span>
              <span className="font-normal"> results.</span>
            </div>
            <div className="text-sm md:block hidden">
              <span className="font-bold text-black">1000</span>
              <span className="font-medium text-black">
                {" "}
                searches on this route last month
              </span>
            </div>
          </div>
          <img src="/images/wave.png" alt="wave" className="w-full absolute " />
        </div>

        {/* Decorative wave */}
        <div className="w-full h-[20.15px] bg-[url(/wave.png)] bg-[100%_100%]" />
      </div>

      {/* Ride cards */}
      <div className="flex flex-col items-center gap-5 w-full">
        {rides?.map((ride) => {
          return (
            <RideListCard
              key={ride.id}
              ride={ride}
              btnLabel="Book now"
              handleCardClick={() => router.push(`/ride-details`)}
            />
          );
        })}
      </div>
      <Button className="flex items-center justify-center gap-2.5 px-[30px] py-[18px] w-fit mx-auto   rounded-[28px] border ">
        <RefreshCwIcon className="w-5 h-5" />
        <span className="font-bold text-white text-sm">Load more rides</span>
      </Button>
    </section>
  );
};
