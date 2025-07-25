"use client";
import RideListCard from "@/components/RideListCard";
import { RootState } from "@/store/store";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { JSX } from "react";
import { useSelector } from "react-redux";

export const RidePublished = (): JSX.Element => {
  const router = useRouter();
  const { step1, step4, step5, step6, step7 } = useSelector(
    (state: RootState) => state.ride
  );
  return (
    <div className="relative h-screen   bg-white  w-full">
      <div className=" w-full  ">
        <div className="  h-[353px]  bg-[#d0f500] flex items-center justify-center">
          <h1 className=" font-extrabold text-[#631cff] lg:text-[56px] text-[44px]  text-center tracking-[0] leading-normal">
            Your ride is published !
          </h1>
        </div>

        <div className="lg:mx-auto lg:mt-[-80px] mt-[-40px] lg:w-[900px] mx-5 ">
          <RideListCard
            ride={{
              id: 4,
              departureTime: moment(step4.datetime).format("HH:mm"),
              arrivalTime: "15:30",
              duration: "03 h 30m",
              from: step1.origin,
              to: step1.destination,
              rating: 4.9,
              originalPrice: 1800,
              price: step5.price,
              driver: "Neha K.",
              driverImage: "/ellipse-11-4.png",
              car: "Brezza, Red",
              carColor: "text-[#ff5733]",
              carBg: "bg-[#ff57331a]",
              maxPassengers: step5.seats,
              instantRequest: step6.bookingType == "manual" ? false : true,
            }}
            btnLabel="View Details"
            handleCardClick={() => router.push(`/ride-details/published-ride`)}
          />
        </div>
      </div>
    </div>
  );
};
