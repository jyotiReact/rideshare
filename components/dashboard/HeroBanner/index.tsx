// components/HeroBannerSection.tsx
"use client";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CustomDatePicker from "@/components/ui/date-picker";
import {
  ArrowDataTransferVerticalIcon,
  Calendar02Icon,
  IdIcon,
  Money04Icon,
  PinLocation01Icon,
  Search01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import React, { JSX, useRef, useState } from "react";

// Define the card type
type FeatureCard = {
  src: any; // You can replace `any` with a more specific type if you know one (e.g., for icons or string for images)
  title: string;
  description: string;
  type: "icon" | "image";
};

export const HeroBannerSection = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [passengerCount, setPassengerCount] = useState<number>(2);
  const [showPassengerPopup, setShowPassengerPopup] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [fromLocation, setFromLocation] = useState("Chandigarh");
  const [toLocation, setToLocation] = useState("Shimla");
  const router = useRouter();

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

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      from: fromLocation,
      to: toLocation,
      date: selectedDate?.toISOString() ?? "",
      passengers: passengerCount.toString(),
    });

    router.push(`/search-ride?${queryParams.toString()}`);
  };
console.log(toLocation)
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

              <h1 className="w-full font-extrabold text-black md:text-[56px]  text-[32px] text-center leading-[normal]  ">
                Share Your Ride. Save on Travel.
              </h1>

              <p className="lg:w-[541px] md:w-[353px] font-normal text-[#515251] md:text-lg text-xs text-center md:leading-[25.2px] leading-5  ">
                Connect with verified co-travelers going your way. Save money,
                reduce your carbon footprint, and enjoy the journey together.
              </p>
            </div>
            <div className="flex flex-col w-full items-start lg:gap-2.5 gap-4 ">
              {/* From/To Location Fields */}
              <div className="flex flex-col items-center lg:gap-2.5 gap-4 relative w-full ">
                {/* From Location */}
                <div className="flex items-center gap-1 px-5 py-3 rounded-[40px] border w-full border-[#d9d9d9] relative">
                  <HugeiconsIcon
                    icon={PinLocation01Icon}
                    width={20}
                    color="#631CFF"
                  />
                  <label
                    htmlFor="fromLocation"
                    className="font-bold text-black text-sm"
                  >
                    From:
                  </label>
                  <input
                    id="fromLocation"
                    name="fromLocation"
                    type="text"
                    placeholder="Enter location"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="flex-1 border-none focus:outline-none bg-transparent font-medium text-[#515251] text-sm placeholder:text-[#b0b0b0]"
                  />
                </div>

                {/* To Location */}
                <div className="flex items-center gap-1 px-5 py-3 rounded-[40px] border w-full border-[#d9d9d9] relative">
                  <HugeiconsIcon
                    icon={PinLocation01Icon}
                    width={20}
                    color="#631CFF"
                  />
                  <label
                    htmlFor="toLocation"
                    className="font-bold text-black text-sm"
                  >
                    To:
                  </label>
                  <input
                    id="toLocation"
                    name="toLocation"
                    type="text"
                    placeholder="Enter location"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="flex-1 border-none focus:outline-none bg-transparent font-medium text-[#515251] text-sm placeholder:text-[#b0b0b0]"
                  />
                </div>

                {/* Swap Button - Centered between inputs */}
                <Button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-[#D0F500] rounded-full hover:bg-[#bfe000] transition z-10"
                  size="icon"
                  onClick={() => {
                    setFromLocation(toLocation);
                    setToLocation(fromLocation);
                  }}
                >
                  <HugeiconsIcon
                    icon={ArrowDataTransferVerticalIcon}
                    width={20}
                    color="#631cff"
                  />
                </Button>
              </div>

              <div className="flex gap-2.5 w-full relative">
                {/* Date Picker */}
                <div className="flex-1">
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    renderCustomInput={() => (
                      <Button
                        variant="outline"
                        className="flex gap-2 items-center w-full bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
                      >
                        <HugeiconsIcon
                          icon={Calendar02Icon}
                          width={20}
                          color="#631CFF"
                        />
                        <span className="font-bold text-black text-sm">
                          {selectedDate
                            ? selectedDate.toLocaleDateString("en-IN", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                              })
                            : "Select date"}
                        </span>
                      </Button>
                    )}
                  />
                </div>

                {/* Passenger Selector */}
                <div className="flex-1 relative">
                  <Button
                    variant="outline"
                    className="flex gap-2 items-center w-full bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
                    onClick={() => setShowPassengerPopup((prev) => !prev)}
                  >
                    <HugeiconsIcon
                      icon={UserGroupIcon}
                      width={20}
                      color="#631CFF"
                    />
                    <span className="font-bold text-black text-sm">
                      {passengerCount} Passenger{passengerCount > 1 ? "s" : ""}
                    </span>
                  </Button>

                  {showPassengerPopup && (
                    <div
                      ref={popupRef}
                      className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-2xl shadow-xl p-4 transition-all duration-200 ease-out origin-top transform-gpu opacity-0 scale-95 animate-[fadeIn_200ms_ease-out_forwards]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <button
                          onClick={() =>
                            setPassengerCount((prev) => Math.max(1, prev - 1))
                          }
                          className="flex-1 flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                          <MinusIcon className="w-4 h-4 text-[#631CFF]" />
                        </button>

                        <span className="text-sm font-medium w-8 text-center">
                          {passengerCount}
                        </span>

                        <button
                          onClick={() =>
                            setPassengerCount((prev) => Math.min(10, prev + 1))
                          }
                          className="flex-1 flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                          <PlusIcon className="w-4 h-4 text-[#631CFF]" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <Button
                className="inline-flex items-center w-full justify-center gap-1 px-[30px] py-6 rounded-full"
                onClick={handleSearch}
              >
                <HugeiconsIcon icon={Search01Icon} width={20} color="#ffffff" />
                <span className="font-medium text-white text-sm">
                  Search Rides
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
