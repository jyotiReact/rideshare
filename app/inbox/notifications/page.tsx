import { Notifications } from "@/components/inbox/Notifications";
import { JourneyDetailsType } from "@/types";
import React from "react";

const journeyData: JourneyDetailsType = {
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

export default function NotificationsPage() {
  return (
    <>
      <Notifications journeyDetails={journeyData} />
    </>
  );
}
