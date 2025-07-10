"use client";
import React, { useState } from "react";
import { Messages } from "./Messages";
import { TabsComponent } from "../tabs";
import { Message01Icon, Notification01Icon } from "@hugeicons/core-free-icons";
import { Notifications } from "./Notifications";
import InboxLayout from "./InboxLayout";
// import { ChatFrameSection } from "./sections/ChatFrameSection/ChatFrameSection";
// import { NavigationBarSection } from "./sections/NavigationBarSection";
// import { ToolbarSection } from "./sections/ToolbarSection";

const chatPreviews = [
  {
    name: "Ritik Bhardwaj",
    message: "Message Preview this is a message Preview.",
    avatar: "/ellipse-11-1.svg",
  },
  {
    name: "Ritik Bhardwaj",
    message: "Message Preview this is a message Preview.",
    avatar: "/ellipse-11-1.svg",
  },
  {
    name: "Ritik Bhardwaj",
    message: "Message Preview this is a message Preview.",
    avatar: "/ellipse-11-1.svg",
  },
  {
    name: "Ritik Bhardwaj",
    message: "Message Preview this is a message Preview.",
    avatar: "/ellipse-11-1.svg",
  },
];

// Chat messages data
const chatMessages = [
  {
    content: "🛍 Your Exclusive Offer Awaits!",
    time: "23:00",
    isOutgoing: true,
  },
  {
    content: "🛍 Your Exclusive Offer Awaits!",
    time: "23:00",
    isOutgoing: false,
  },
];

// Notification data
const notifications = [
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

// Journey data
const journeyData = {
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
const tabOptions = [
  {
    id: "messages",
    label: "Messages",
    icon: Message01Icon,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Notification01Icon,
  },
];

export const Inbox = (): JSX.Element => {
  const [tab, setTab] = useState("messages");

  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full px-20 pt-5 pb-20 border-4">
      <div className="flex justify-center items-start ">
        {tab === "messages" ? (
          <InboxLayout
            tabOptions={tabOptions}
            handleTabClick={(tab) => setTab(tab)}
            data={chatPreviews}
            alertIcon={false}
          >
            <Messages tabOptions={tabOptions} messages={chatMessages} />
          </InboxLayout>
        ) : (
          <InboxLayout
            tabOptions={tabOptions}
            handleTabClick={(tab) => setTab(tab)}
            data={notifications}
            alertIcon={true}
          >
            <Notifications
              tabOptions={tabOptions}
              journeyDetails={journeyData}
            />
          </InboxLayout>
        )}
      </div>
    </div>
  );
};
