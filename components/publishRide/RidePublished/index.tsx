"use client"
import RideListCard from "@/components/rideListing/RideListCard";

import { Ride } from "@/types";
import { useRouter } from "next/navigation";

import React, { JSX } from "react";

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

export const RidePublished = (): JSX.Element => {
  const router =useRouter()
  return (
    <div className="relative h-screen   bg-white overflow-hidden w-full">
      <div className=" w-full  ">
        <div className="  h-[353px]  bg-[#d0f500] flex items-center justify-center">
          <h1 className=" font-extrabold text-[#631cff] lg:text-[56px] text-[44px]  text-center tracking-[0] leading-normal">
            Your ride is published !
          </h1>
        </div>

        <div className="lg:mx-auto lg:mt-[-80px] mt-[-40px] lg:w-[900px] mx-5 ">
          <RideListCard
            ride={rides[0]}
            btnLabel="View Details"
            handleCardClick={() => router.push(`/ride-details`)}
          />
        </div>
      </div>
    </div>
  );
};
