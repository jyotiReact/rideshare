import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StepLine from "@/components/ui/step-line";
import { Textarea } from "@/components/ui/textarea";
import { TickDouble02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const BookingLayout = ({
  title,
  description,
  children,
}): JSX.Element => {
  const router = useRouter();
  // Journey data
  const journeyData = {
    date: "Monday, 23 June",
    startTime: "12:50",
    duration: "4h:30m",
    endTime: "12:50", // This would typically be calculated based on start time + duration
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
    price: {
      amount: "₹1320",
      seats: "2 Seats",
      paymentMethod: "Cash",
      paymentLocation: "Pay in car",
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-zinc-50 overflow-hidden  py-5 px-20  ">
      {/* Main Content */}
      <div className="flex w-full  items-start gap-2.5">
        {/* Left Card - Booking Request */}
        <Card className="flex flex-col items-start gap-5 p-10 relative min-w-auto  bg-white rounded-[10px]  border-[#f2f2f2]">
          <div
            className="inline-flex items-center gap-2.5 p-2.5 relative bg-[#0000000d] rounded-[20px] cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
          <CardContent className="p-0 space-y-2">
            <h1 className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#353535] text-3xl tracking-[0] leading-[normal]">
              {title}
            </h1>
            <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#515251] text-base tracking-[0] ">
              {description}
            </p>
          </CardContent>
        </Card>

        {/* Right Card - Booking Details */}
        <Card className="inline-flex flex-col w-full items-start gap-[30px] px-[60px] py-10 relative bg-white rounded-t-xl border border-[#f2f2f2]">
          <CardContent className="p-0 w-full">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
              Mon,23 June
            </h2>
            {/* Journey Date and Details */}
            <div className="flex   gap-5  w-full h-full mt-6">
              <div className="inline-flex flex-col items-start justify-between relative self-stretch flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal]">
                    {journeyData.startTime}
                  </div>
                </div>

                <div className="inline-flex items-center justify-end gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-xs text-right tracking-[0] leading-[normal]">
                    {journeyData.duration}
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal]">
                      {journeyData.endTime}
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-between relative self-stretch flex-[0_0_auto]">
                <StepLine />

                <div className="flex items-center relative flex-1 self-stretch w-full">
                  <div className="relative w-7 h-7">
                    <div className="h-7 bg-[#631cff33] rounded-[14px]">
                      <div className="relative w-3 h-3 top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-solid border-[#631cff] shadow-[0px_0px_30px_#631cff]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col   gap-16  h-full ">
                {journeyData.locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#515251] text-base tracking-[0] leading-[normal]">
                        {location.city}
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-xs tracking-[0] leading-[normal]">
                        {location.address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Section */}
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full mt-[30px]">
              <div className="flex flex-col w-full  items-start gap-[30px] pt-0 pb-[30px] px-0 relative border-b border-[#cbcbcb]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                  Price to be paid
                </h2>

                <div className="flex items-center justify-between px-10 py-4 relative self-stretch w-full bg-[#0000000a] rounded-[10px] shadow-[2px_2px_8px_#0000000d] opacity-80">
                  <div className="inline-flex flex-col items-start justify-center gap-1 px-2.5 py-1.5 relative rounded-[10px]">
                    <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#5b5b5b] text-base text-right tracking-[0] leading-5 whitespace-nowrap">
                      {journeyData.price.seats}
                    </div>
                    <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-xl tracking-[-0.16px] leading-7 whitespace-nowrap">
                      {journeyData.price.amount}
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-end gap-[5px] relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#5b5b5b] text-base text-right tracking-[0] leading-5 whitespace-nowrap">
                      {journeyData.price.paymentLocation}
                    </div>
                    <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-xl tracking-[-0.16px] leading-7 whitespace-nowrap">
                      {journeyData.price.paymentMethod}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">{children}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
