"use client";
import React, { useState } from "react";
import { Message01Icon, Notification01Icon } from "@hugeicons/core-free-icons";
import { Ride } from "@/types";
import RideListCard from "../rideListing/RideListCard";
import { TabsComponent } from "../tabs";
import { RideStatusCard } from "./RidesCards";
import RidesBookings from "./RidesBookings";
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
export const PreviousRides = (): JSX.Element => {
  const [tab, setTab] = useState("rides");
  const router = useRouter();
  const tabOptions = [
    {
      id: "rides",
      label: "Previous Rides",
      icon: Message01Icon,
    },
    {
      id: "bookings",
      label: "Previous Bookings",
      icon: Notification01Icon,
    },
  ];
  return (
    <div className="flex flex-col w-full py-10">
      <TabsComponent
        title="Previous Rides"
        tabOptions={tabOptions}
        handleTabClick={(tab) => setTab(tab)}
      />

      <div className="flex justify-center mt-8">
        <div className="w-4/5">
          {tab === "rides" ? (
            <RideStatusCard
              handleClick={() =>
                router.push("/previous-rides/view-details")
              }
            />
          ) : (
            <div className="flex flex-col items-center gap-5 w-full">
              {rides?.map((ride) => {
                return (
                  <RidesBookings
                    ride={ride}
                    key={ride.id}
                    handleCardClick={() =>
                      router.push("/previous-rides/view-details")
                    }
                    btnLabel="View Details"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
