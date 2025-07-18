// components/Messages.tsx
"use client";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Navigation03Icon,
  TickDouble02Icon,
} from "@hugeicons/core-free-icons";
import React, { JSX } from "react";
import { useRouter } from "next/navigation";

// Define the shape of a message
type Message = {
  content: string;
  time: string;
  isOutgoing: boolean;
};

// Props type for Messages component
type MessagesProps = {
  messages: Message[];
};

export const Messages = ({ messages }: MessagesProps): JSX.Element => {
  const router = useRouter();
  return (
    <Card className="md:h-[691px] h-screen   rounded-[20px] border border-solid border-[#f2f2f2] relative overflow-hidden bg-neutral-100">
      {/* Chat header */}
      <div className="flex items-center gap-5 p-5 w-full bg-white rounded-[20px_20px_0px_0px] backdrop-blur-md">
        <div
          className="lg:hidden flex items-center gap-2.5 p-2 bg-[#0000000d] rounded-[20px] cursor-pointer"
          onClick={() => router.back()}
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} width={30} />
        </div>
        <div className="flex items-center gap-[5px]">
          <Avatar className="w-9 h-9">
            <img
              className="w-full h-full object-cover"
              alt="Ritik's avatar"
              src="/images/profile.jpg"
            />
          </Avatar>
          <div className="flex flex-col w-[107px] items-start">
            <div className="font-semibold text-black text-base leading-5">
              Ritik B.
            </div>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-5 h-[calc(100%-130px)] overflow-y-auto">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isOutgoing ? "justify-end" : "justify-start"
            } mb-5`}
          >
            <div
              className={`flex flex-col md:w-[400px] w-[300px] gap-[5px] pt-5 pb-2.5 px-5 rounded-[20px] relative ${
                message.isOutgoing ? "bg-[#631cff]" : "bg-[#00000008]"
              }`}
            >
              <div className="flex flex-col items-start gap-1 w-full">
                <div
                  className={`font-${
                    message.isOutgoing ? "semibold" : "bold"
                  } text-sm tracking-[-0.41px] leading-[26px] ${
                    message.isOutgoing ? "text-[#ffffffcc]" : "text-[#000000cc]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
              <div className="flex items-center justify-end gap-[5px]">
                <div
                  className={`font-medium text-xs tracking-[-0.41px] ${
                    message.isOutgoing ? "text-white" : "text-[#141b34]"
                  }`}
                >
                  {message.time}
                </div>
                {message.isOutgoing && (
                  <HugeiconsIcon icon={TickDouble02Icon} color="white" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="md:absolute  fixed left-0 right-0 bottom-0 flex items-center justify-center gap-[5px] px-5">
        <Input
          className="flex-1 px-5 py-[15px] bg-white rounded-[35px] border border-solid border-[#0000000f] h-auto placeholder:text-[#6b6b6b] placeholder:font-normal"
          placeholder="Type a message"
        />
        <Button
          className="w-[54px] h-[54px] bg-[#631cff] rounded-[56px] flex items-center justify-center p-0"
          aria-label="Send message"
        >
          <HugeiconsIcon icon={Navigation03Icon} color="white" />
        </Button>
      </div>
    </Card>
  );
};
