import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRightIcon, ArrowUpRightIcon, BellIcon } from "lucide-react";
import React from "react";

export const YourBookingsSection = (): JSX.Element => {
  // Booking data for reuse
  const bookings = [
    {
      departureTime: "12:50",
      arrivalTime: "16:50",
      duration: "04 h 00m",
      from: "New Delhi",
      to: "Chandigarh",
      price: "₹1,000.00",
      notifications: 3,
    },
    {
      departureTime: "12:50",
      arrivalTime: "16:50",
      duration: "04 h 00m",
      from: "New Delhi",
      to: "Chandigarh",
      price: "₹1,000.00",
      notifications: 3,
    },
  ];
  return (
    <section className="flex flex-col items-start gap-5">
      {bookings.map((booking, index) => (
        <Card
          key={`booking-${index}`}
          className="w-full border border-solid border-[#F2F1F1] rounded-[10px] overflow-hidden"
        >
          <CardContent className="p-0">
            <div className="flex items-center justify-between px-10 py-5 bg-white">
              <div className="flex flex-col items-start gap-2.5">
                <div className="flex flex-col items-start gap-2.5 w-[300px]">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-xs font-medium text-[#515251]">
                      {booking.departureTime}
                    </div>
                    <div className="text-xs font-medium text-[#515251] text-right">
                      {booking.arrivalTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2.5 w-full">
                    {/* Start icon */}
                    <div className="flex items-center flex-1">
                      <div className="relative w-7 h-7">
                        <div className="h-7 bg-[#631cff33] rounded-[14px]">
                          <div className="w-3 h-3 absolute top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0_0_30px_#631cff]" />
                        </div>
                      </div>
                      {/* Dashed line left */}
                      <div className="flex-1 h-0.5 border-t-2 border-dashed border-[#631cff]" />
                    </div>

                    <div className="text-sm font-bold text-black whitespace-nowrap">
                      {booking.duration}
                    </div>

                    {/* End icon */}
                    <div className="flex items-center flex-1 justify-end">
                      {/* Dashed line right */}
                      <div className="flex-1 h-0.5 border-t-2 border-dashed border-[#631cff]" />
                      <div className="relative w-7 h-7 -ml-2.5">
                        <div className="h-7 bg-[#631cff33] rounded-[14px]">
                          <div className="w-3 h-3 absolute top-2 left-2 bg-[#d0f500] rounded-md border-[1.5px] border-[#631cff] shadow-[0_0_30px_#631cff]" />
                        </div>
                      </div>
                    </div>
                  </div>

                 
                </div>
                {/* Time information */}
                {/* <div className="flex items-center justify-between w-full"> */}
                  
                {/* Origin and destination */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex w-[104px] items-end justify-between">
                    <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-xs">
                      From
                    </div>
                    <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm">
                      {booking.from}
                    </div>
                  </div>
                  <div className="flex w-[99px] items-end justify-between">
                    <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-xs">
                      To
                    </div>
                    <div className="w-20 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm text-right">
                      {booking.to}
                    </div>
                  </div>
                </div>
              </div>
              {/* Price and action button */}
              <div className="flex flex-col items-end gap-2.5">
                <div className="inline-flex items-end gap-2.5">
                  <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#190041] text-[26px] tracking-[-0.21px] leading-[36.4px] whitespace-nowrap">
                    {booking.price}
                  </div>
                </div>
                <Button className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-[#631CFF] rounded-[28px] shadow-[0px_2px_0px_#EEEEEE] text-white">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-base tracking-[-0.13px] leading-[22.4px]">
                    View Details
                  </span>
                  <ArrowUpRightIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between px-10 py-2.5 bg-[#0000000a]">
            <div className="inline-flex items-center gap-2.5">
              <div className="inline-flex items-center gap-[5px]">
                <div className="inline-flex items-center gap-2 p-2 bg-white rounded-3xl">
                  <BellIcon className="w-[21.82px] h-[21.82px]" />
                </div>
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-sm text-center leading-5 whitespace-nowrap">
                  booking requests
                </div>
              </div>
              <Badge className="inline-flex flex-col items-center justify-center gap-2.5 px-2 py-[5px] bg-[#E33629] rounded-[40px]">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-xs text-center">
                  {booking.notifications} New
                </span>
              </Badge>
            </div>
            <div className="inline-flex items-center justify-end gap-1">
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};
