// components/Messages.tsx

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HugeiconsIcon } from "@hugeicons/react";
import { Navigation03Icon, TickDouble02Icon } from "@hugeicons/core-free-icons";
import React from "react";

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
  return (
    <Card className="h-[691px] rounded-[20px] border border-solid border-[#f2f2f2] relative overflow-hidden bg-neutral-100">
      {/* Chat header */}
      <div className="flex items-center gap-5 p-5 w-full bg-white rounded-[20px_20px_0px_0px] backdrop-blur-md">
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
              className={`flex flex-col w-[400px] gap-[5px] pt-5 pb-2.5 px-5 rounded-[20px] relative ${
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

              {/* Optional: message tail image */}
              {/* {message.isOutgoing ? (
                <img
                  className="absolute w-2 h-[15px] top-[49px] left-[400px]"
                  alt="Message tail"
                  src="/frame-221.svg"
                />
              ) : (
                <img
                  className="absolute w-2 h-[15px] top-[46px] -left-2"
                  alt="Message tail"
                  src="/frame-221-1.svg"
                />
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-[5px] px-5">
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
