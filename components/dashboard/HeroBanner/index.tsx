// components/HeroBannerSection.tsx

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowDataTransferVerticalIcon,
  Calendar02Icon,
  IdIcon,
  Money04Icon,
  PinLocation01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import React, { JSX } from "react";

// Define the card type
type FeatureCard = {
  src: any; // You can replace `any` with a more specific type if you know one (e.g., for icons or string for images)
  title: string;
  description: string;
  type: "icon" | "image";
};

export const HeroBannerSection = (): JSX.Element => {
  // Feature cards data
  const featureCards: FeatureCard[] = [
    {
      src: Money04Icon,
      title: "Your pick of rides at low prices",
      description:
        "No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
      type: "icon",
    },
    {
      src: IdIcon,
      title: "Trust who you travel with",
      description:
        "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with and can book your ride at ease on our secure platform.",
      type: "icon",
    },
    {
      src: "/images/carIcon.png",
      title: "Scroll, click, tap and go!",
      description:
        "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
      type: "image",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full bg-[url('/images/bannerbg.png')] bg-contain bg-no-repeat md:px-12 px-5">
      <div className="relative w-full md:py-20 py-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full max-w-[581px] items-start gap-10">
            <div className="flex flex-col items-center gap-4 w-full">
              <Badge
                variant="outline"
                className="flex items-center gap-1 py-0.5 pl-0.5 pr-2.5 bg-basewhite rounded-[99px] border-[#e5e5e5] shadow-[0px_1px_1px_#e8e8e8]"
              >
                <div className="flex items-center gap-1 pl-1.5 pr-2 py-1 bg-neutral-100 rounded-3xl">
                  <Image
                    alt="Star icon"
                    width={12}
                    height={12}
                    src="/images/star.svg"
                  />
                  <span className="w-[21.71px] h-[17px] font-medium text-[#101828] text-sm text-center whitespace-nowrap font-['Manrope',Helvetica]">
                    4.8
                  </span>
                </div>
                <span className="font-normal text-neutral-900 text-sm leading-[22px] whitespace-nowrap  ">
                  Average customer rating
                </span>
              </Badge>

              <h1 className="w-full font-extrabold text-black md:text-[56px]  text-[36px] text-center leading-[normal]  ">
                Share Your Ride. Save on Travel.
              </h1>

              <p className="lg:w-[541px] md:w-[353px] font-normal text-[#515251] text-lg text-center leading-[25.2px]  ">
                Connect with verified co-travelers going your way. Save money,
                reduce your carbon footprint, and enjoy the journey together.
              </p>
            </div>

            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col items-start justify-center gap-2.5 w-full relative">
                <div className="flex items-center gap-1 px-5 py-[18px] w-full rounded-[40px] border-2 border-[#631cff]">
                  <HugeiconsIcon icon={PinLocation01Icon} width={20} />
                  <span className="font-bold text-black text-sm leading-[normal]  ">
                    From:
                  </span>
                  <span className="font-medium text-sm leading-[normal]  ">
                    <span className="text-[#515251]">Chandigarh</span>
                    <span className="text-black">|</span>
                  </span>
                </div>

                <div className="flex items-center gap-1 px-5 py-[18px] w-full rounded-[40px] border border-[#d9d9d9]">
                  <HugeiconsIcon icon={PinLocation01Icon} width={20} />
                  <span className="font-bold text-black text-sm leading-[normal]  ">
                    To:
                  </span>
                  <span className="font-medium text-[#515251] text-sm leading-[normal]  ">
                    Shimla
                  </span>
                </div>

                <Button
                  className="absolute top-[35%] left-1/2 -translate-x-1/2 p-3 bg-[#D0F500] rounded-full hover:bg-[#bfe000] transition"
                  size="icon"
                >
                  <HugeiconsIcon
                    icon={ArrowDataTransferVerticalIcon}
                    width={20}
                    color="#631cff"
                    className="align-middle shrink-0"
                  />
                </Button>
              </div>

              <div className="flex items-center gap-2.5 w-full">
                <div className="flex items-center gap-1.5 px-5 py-[18px] flex-1 rounded-[40px] border border-[#d9d9d9]">
                  <HugeiconsIcon icon={Calendar02Icon} width={20} />
                  <span className="font-bold text-black text-sm leading-[normal]  ">
                    Tomorrow
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-5 py-[18px] flex-1 rounded-[40px] border border-[#d9d9d9]">
                  <HugeiconsIcon icon={UserGroupIcon} width={20} />
                  <span className="font-bold text-black text-sm leading-[normal]  ">
                    2 Passenger
                  </span>
                </div>
              </div>

              <Button className="w-full px-4 py-[18px] rounded-[28px] border border-solid shadow-[0px_2px_0px_#4100d11a] hover:bg-[#5016d1]">
                <span className="font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap  ">
                  Search
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full">
        {featureCards.map((card, index) => {
          const isCenterOnTablet = featureCards.length === 3 && index === 2; // center 3rd card on md

          return (
            <Card
              key={index}
              className={`
          w-full max-w-[370px] bg-transparent border-none shadow-none
          ${
            isCenterOnTablet
              ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto"
              : ""
          }
        `}
            >
              <CardContent className="flex flex-col md:text-center md:items-center lg:text-left lg:items-start gap-5 px-0 py-3">
                <div className="flex items-center justify-center p-[14.55px] w-fit bg-[#631cff] rounded-[29.09px]">
                  {card.type === "icon" ? (
                    <HugeiconsIcon icon={card.src} width={20} color="#D0F500" />
                  ) : (
                    <Image
                      src={card.src}
                      alt={card.title}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2.5 w-full">
                  <h3 className="w-full mt-[-1.00px] font-bold text-[#232f1a] text-[22px] tracking-[-0.18px] leading-[30.8px]">
                    {card.title}
                  </h3>
                  <p className="w-full font-normal text-[#515251] text-sm leading-[22.4px]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
