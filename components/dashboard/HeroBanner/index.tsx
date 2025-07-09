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
import React from "react";

export const HeroBannerSection = (): JSX.Element => {
  // Feature cards data
  const featureCards = [
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
    <section className="flex flex-col items-center w-full bg-[url('/images/bannerbg.png')] bg-contain bg-no-repeat px-12 ">
      <div className="relative w-full  py-20">
        {/* Main content container */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full max-w-[581px] items-start gap-10">
            {/* Header section */}
            <div className="flex flex-col items-center gap-4 w-full">
              {/* Rating badge */}
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
                <span className="font-normal text-neutral-900 text-sm leading-[22px] whitespace-nowrap font-['Plus_Jakarta_Sans',Helvetica]">
                  Average customer rating
                </span>
              </Badge>

              {/* Main heading */}
              <h1 className="w-full font-extrabold text-black text-[56px] text-center leading-[normal] font-['Plus_Jakarta_Sans',Helvetica]">
                Share Your Ride. Save on Travel.
              </h1>

              {/* Subheading */}
              <p className="w-[541px] font-normal text-[#515251] text-lg text-center leading-[25.2px] font-['Plus_Jakarta_Sans',Helvetica]">
                Connect with verified co-travelers going your way. Save money,
                reduce your carbon footprint, and enjoy the journey together.
              </p>
            </div>

            {/* Search form */}
            <div className="flex flex-col w-full gap-4">
              {/* From/To fields */}
              <div className="flex flex-col items-start justify-center gap-2.5 w-full relative">
                {/* From field */}
                <div className="flex items-center gap-1 px-5 py-[18px] w-full rounded-[40px] border-2 border-[#631cff]">
                  <HugeiconsIcon icon={PinLocation01Icon} width={20} />
                  <span className="font-bold text-black text-sm leading-[normal] font-['Plus_Jakarta_Sans',Helvetica]">
                    From:
                  </span>
                  <span className="font-medium text-sm leading-[normal] font-['Plus_Jakarta_Sans',Helvetica]">
                    <span className="text-[#515251]">Chandigarh</span>
                    <span className="text-black">|</span>
                  </span>
                </div>

                {/* To field */}
                <div className="flex items-center gap-1 px-5 py-[18px] w-full rounded-[40px] border border-[#d9d9d9]">
                  <HugeiconsIcon icon={PinLocation01Icon} width={20} />

                  <span className="font-bold text-black text-sm leading-[normal] font-['Plus_Jakarta_Sans',Helvetica]">
                    To:
                  </span>
                  <span className="font-medium text-[#515251] text-sm leading-[normal] font-['Plus_Jakarta_Sans',Helvetica]">
                    Shimla
                  </span>
                </div>

                {/* Swap button */}
                <Button
                  className="absolute top-[39px] left-[268px] p-2.5 bg-[#D0F500] rounded-[30px] hover:bg-[#bfe000]"
                  size="icon"
                >
                  <HugeiconsIcon
                    icon={ArrowDataTransferVerticalIcon}
                    width={20}
                    color="#631cff"
                  />
                </Button>
              </div>

              {/* Date and Passengers */}
              <div className="flex items-center gap-2.5 w-full">
                {/* Date field */}
                <div className="flex items-center gap-1.5 px-5 py-[18px] flex-1 rounded-[40px] border border-[#d9d9d9]">
                  <HugeiconsIcon icon={Calendar02Icon} width={20} />
                  <span className="font-bold text-black text-sm leading-[normal] font-['Plus_Jakarta_Sans',Helvetica]">
                    Tomorrow
                  </span>
                </div>

                {/* Passengers field */}
                <div className="flex items-center gap-1.5 px-5 py-[18px] flex-1 rounded-[40px] border border-[#d9d9d9]">
                  <HugeiconsIcon icon={UserGroupIcon} width={20} />
                  <span className="font-bold text-black text-sm leading-[normal] font-['Plus_Jakarta_Sans',Helvetica]">
                    2 Passenger
                  </span>
                </div>
              </div>

              {/* Search button */}
              <Button className="w-full px-4 py-[18px]  rounded-[28px] border border-solid shadow-[0px_2px_0px_#4100d11a] hover:bg-[#5016d1]">
                <span className="font-bold text-white text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap font-['Plus_Jakarta_Sans',Helvetica]">
                  Search
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature cards section */}
      <div className="flex items-start gap-10 px-5 py-8 w-full justify-center">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="w-[370px] bg-transparent border-none shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-5 px-0 py-3">
              <div className="flex items-center justify-center p-[14.55px] bg-[#631cff] rounded-[29.09px]">
                {card.type === "icon" ? (
                  <HugeiconsIcon icon={card?.src} width={20} color="#D0F500" />
                ) : (
                  <Image
                    src={card?.src}
                    alt={card.title}
                    width={20}
                    height={20}
                  />
                )}
              </div>
              <div className="flex flex-col items-start gap-2.5 w-full">
                <h3 className="w-full mt-[-1.00px] font-bold text-[#232f1a] text-[22px] tracking-[-0.18px] leading-[30.8px] font-['Plus_Jakarta_Sans',Helvetica]">
                  {card.title}
                </h3>
                <p className="w-full font-normal text-[#515251] text-sm leading-[22.4px] font-['Plus_Jakarta_Sans',Helvetica]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
