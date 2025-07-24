"use client";
import InboxLayout from "@/components/layout/InboxLayout";
import { JourneyDetailsType, Notification } from "@/types";
import { useRouter } from "next/navigation";
import React, { JSX } from "react";
import { BookingDetail } from "../BookingDetail";

const journeyDetails: JourneyDetailsType = {
  date: "Monday, 23 June",
  departureTime: "12:50",
  arrivalTime: "12:50",
  duration: "4h:30m",
  locations: [
    {
      city: "Delhi",
      address: "Metro Station jahangirpuri,250, J Block, Jahangipuri",
    },
    {
      city: "Delhi",
      address: "Metro Station jahangirpuri,250, J Block, Jahangipuri",
    },
  ],
};

const notifications: Notification[] = [
  {
    id: 1,
    name: "Ritik Bhardwaj",
    message: "Sent a request for Booking",
    image: "/images/profile.jpg",
  },
  {
    id: 2,
    name: "Ritik Bhardwaj",
    message: "Sent a request for Booking",
    image: "/images/profile.jpg",
  },
];

export const Bookings = (): JSX.Element => {
  const router = useRouter();
  return (
    <InboxLayout
      title="Request"
      description="Booking will only be confirmed once the driver "
      showTabs={false}
      data={notifications}
      handleMessageClick={() => router.push("/your-rides/bookings/details")}
    >
      <BookingDetail />
    </InboxLayout>
  );
};
