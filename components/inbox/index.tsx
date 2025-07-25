"use client";

import React, { JSX, useState } from "react";
import { Messages } from "./Messages";
import { Message01Icon, Notification01Icon } from "@hugeicons/core-free-icons";
import { Notifications } from "./Notifications";
import InboxLayout from "../layout/InboxLayout";
import {
  ChatPreview,
  JourneyDetailsType,
  Message,
  Notification,
  TabOption,
} from "@/types";
import { useRouter } from "next/navigation";

// Dummy Data
const chatPreviews: ChatPreview[] = [
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

const chatMessages: Message[] = [
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

const tabOptions: TabOption[] = [
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

// Component
export const Inbox = (): JSX.Element => {
  const [tab, setTab] = useState<string>("messages");
  const router = useRouter();

  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full  pb-20 ">
      <div className="flex justify-center items-start w-full">
        {tab === "messages" ? (
          <InboxLayout
            tabOptions={tabOptions}
            handleTabClick={(selectedTab: string) => setTab(selectedTab)}
            data={chatPreviews}
            alertIcon={false}
            handleMessageClick={() => router.push("/inbox/messages")}
          >
            <Messages messages={chatMessages} />
          </InboxLayout>
        ) : (
          <InboxLayout
            tabOptions={tabOptions}
            handleTabClick={(selectedTab: string) => setTab(selectedTab)}
            data={notifications}
            alertIcon={true}
            handleMessageClick={() => router.push("/inbox/notifications")}
          >
            <Notifications journeyDetails={journeyData} />
          </InboxLayout>
        )}
      </div>
    </div>
  );
};
