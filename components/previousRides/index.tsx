"use client";
import React, { JSX, useState } from "react";
import {
  Message01Icon,
  Notification01FreeIcons,
} from "@hugeicons/core-free-icons";
import { TabsComponent } from "../tabs";
import { RideStatusCard } from "./RidesCards";
import { useRouter } from "next/navigation";

export const Bookings = [
  {
    status: "Cancelled",
    date: "Monday, 23 June",
    startTime: "12:50",
    endTime: "16:50",
    duration: "4h 30m",
    from: "New Delhi",
    to: "Mumbai",
    driver: "Amit Sharma",
    driverInfo: true,
    car: "Swift",
    carBg: "bg-[#e9dcff]",
    carColor: "text-[#631CFF]",
  },
  {
    status: "Completed",
    date: "Wednesday, 26 June",
    startTime: "09:00",
    endTime: "13:00",
    duration: "4h",
    from: "Bangalore",
    to: "Hyderabad",
    price: "₹1,200",
    originalPrice: "₹1,500",
    driver: "Riya Verma",
    driverInfo: true,
    car: "Hyundai i20",
    carBg: "bg-[#d1f5e8]",
    carColor: "text-[#10B981]",
  },
  {
    status: "Completed",
    date: "Friday, 28 June",
    startTime: "08:15",
    endTime: "12:45",
    duration: "4h 30m",
    from: "Pune",
    to: "Nashik",
    price: "₹3,800",
    originalPrice: "₹4,200",
    driver: "Kabir Mehta",
    driverInfo: true,
    car: "Honda City",
    carBg: "bg-[#ffe5ec]",
    carColor: "text-[#EF476F]",
  },
  {
    status: "Cancelled",
    date: "Saturday, 29 June",
    startTime: "10:30",
    endTime: "13:00",
    duration: "2h 30m",
    from: "Jaipur",
    to: "Agra",
    driver: "Simran Kaur",
    driverInfo: true,
    car: "Tata Punch",
    carBg: "bg-[#e0f7fa]",
    carColor: "text-[#00ACC1]",
  },
  {
    status: "Completed",
    date: "Sunday, 30 June",
    startTime: "06:00",
    endTime: "10:00",
    duration: "4h",
    from: "Chandigarh",
    to: "Amritsar",
    price: "₹1,700",
    originalPrice: "₹2,000",
    driver: "Raj Malhotra",
    driverInfo: true,
    car: "Toyota Innova",
    carBg: "bg-[#f3e8ff]",
    carColor: "text-[#8B5CF6]",
  },
];

export const Rides = [
  {
    status: "Cancelled",
    date: "Monday, 23 June",
    startTime: "12:50",
    endTime: "16:50",
    duration: "4h 30m",
    from: "New Delhi",
    to: "Mumbai",
    price: "₹2,000",
    driver: "Amit Sharma",
    car: "Swift",
    carBg: "bg-[#e9dcff]",
    carColor: "text-[#631CFF]",
  },
  {
    status: "Completed",
    date: "Wednesday, 26 June",
    startTime: "09:00",
    endTime: "13:00",
    duration: "4h",
    from: "Bangalore",
    to: "Hyderabad",
    price: "₹1,200",
    driver: "Riya Verma",
    car: "Hyundai i20",
    carBg: "bg-[#d1f5e8]",
    carColor: "text-[#10B981]",
  },
  {
    status: "Completed",
    date: "Friday, 28 June",
    startTime: "08:15",
    endTime: "12:45",
    duration: "4h 30m",
    from: "Pune",
    to: "Nashik",
    price: "₹3,800",
    driver: "Kabir Mehta",
    car: "Honda City",
    carBg: "bg-[#ffe5ec]",
    carColor: "text-[#EF476F]",
  },
  {
    status: "Cancelled",
    date: "Saturday, 29 June",
    startTime: "10:30",
    endTime: "13:00",
    duration: "2h 30m",
    from: "Jaipur",
    to: "Agra",
    price: "₹950",
    driver: "Simran Kaur",
    car: "Tata Punch",
    carBg: "bg-[#e0f7fa]",
    carColor: "text-[#00ACC1]",
  },
  {
    status: "Completed",
    date: "Sunday, 30 June",
    startTime: "06:00",
    endTime: "10:00",
    duration: "4h",
    from: "Chandigarh",
    to: "Amritsar",
    price: "₹1,700",
    driver: "Raj Malhotra",
    car: "Toyota Innova",
    carBg: "bg-[#f3e8ff]",
    carColor: "text-[#8B5CF6]",
  },
];

export const PreviousRides = (): JSX.Element => {
  const [tab, setTab] = useState("rides");
  const router = useRouter();
  const tabOptions = [
    {
      id: "rides",
      label: "Rides",
      icon: Message01Icon,
    },
    {
      id: "bookings",
      label: "Bookings",
      icon: Notification01FreeIcons,
    },
  ];
  return (
    <div className="flex flex-col w-full py-10 px-5">
      <TabsComponent
        title={tab === "rides" ? "Previous Rides" : "Previous Bookings"}
        tabOptions={tabOptions}
        handleTabClick={(tab) => setTab(tab)}
      />

      <div className="flex justify-center mt-8">
        <div className="lg:w-4/5 w-full flex flex-col gap-12 ">
          {(tab === "rides" ? Rides : Bookings)?.length > 0 &&
            (tab === "rides" ? Rides : Bookings).map((ride) => (
              <RideStatusCard
                ride={ride}
                handleClick={() => router.push("/previous-rides/view-details")}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
