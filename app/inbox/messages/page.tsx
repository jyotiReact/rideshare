import { Messages } from "@/components/inbox/Messages";
import { Message } from "@/types";
import React from "react";

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

export default function MessagesPage() {
  return (
    <>
      <Messages messages={chatMessages} />
    </>
  );
}
