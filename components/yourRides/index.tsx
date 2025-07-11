"use client";
import React, { useState } from "react";
import { YourBookingsSection } from "./YourBookings";
import { Message01Icon, Notification01Icon } from "@hugeicons/core-free-icons";
import { Ride } from "@/types";
import RideListCard from "../rideListing/RideListCard";
import { TabsComponent } from "../tabs";
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
export const YourRides = (): JSX.Element => {
  const [tab, setTab] = useState("published");
  const router = useRouter();
  const tabOptions = [
    {
      id: "published",
      label: "Published Rides",
      icon: Message01Icon,
    },
    {
      id: "bookings",
      label: "Your Bookings",
      icon: Notification01Icon,
    },
  ];
  return (
    <div className="flex flex-col w-full py-10">
      <TabsComponent
        title="Your Rides"
        tabOptions={tabOptions}
        handleTabClick={(tab) => setTab(tab)}
      />
      <div className="flex justify-center mt-8">
        <div className="w-4/5">
          {tab === "published" ? (
            <YourBookingsSection />
          ) : (
            <div className="flex flex-col items-center gap-5 w-full">
              {rides?.map((ride) => {
                return (
                  <RideListCard
                    key={ride.id}
                    ride={ride}
                    btnLabel="View Details"
                    handleCardClick={() => router.push(`/request-details`)}
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
