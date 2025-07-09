import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Profile from "@/components/ui/profile";
import {
  Agreement01Icon,
  ArrowRight01Icon,
  Backpack01Icon,
  Car01Icon,
  CheckmarkBadge02Icon,
  CheckmarkSquare01Icon,
  Flag01Icon,
  SecurityCheckIcon,
  ZapFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRightIcon,
  BackpackIcon,
  CarIcon,
  FlagIcon,
  MessageCircleIcon,
  ShieldIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const driverInfo = {
  name: "Ritik B.",
  fullName: "Ritik Bhardwaj",
  rating: "4.8/5",
  totalRatings: "11 Ratings",
  ridesCompleted: "200",
  avatar: "/ellipse-11-4.png",
  verified: true,
  carModel: "Renault Triber",
  carColor: "White",
  licensePlate: "PB 36 L2 2500",
};

const passengers = [
  {
    name: "Ritik Bhardwaj",
    from: "New Delhi",
    to: "Chandigarh",
    avatar: "/images/profile.jpg",
  },
  {
    name: "Ritik Bhardwaj",
    from: "New Delhi",
    to: "Chandigarh",
    avatar: "/images/profile.jpg",
  },
];

export const PassengerListSection = ({ alreadyDeparted }): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-[30px] relative">
    

      <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
          <CardContent className="flex flex-col items-start justify-center gap-5 px-10 py-5">
            <div className="flex flex-col items-start justify-center gap-5 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#cbcbcb]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                  <Profile />

                  <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-base tracking-[-0.13px] leading-[22.4px]">
                      {driverInfo.name}
                    </div>

                    <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <Badge className="inline-flex gap-1 px-2 py-1 bg-[#0e7a31] items-center relative flex-[0_0_auto] rounded-3xl">
                        <img
                          className="relative w-3 h-[11px]"
                          alt="Svg"
                          src="/images/whitestar.png"
                        />

                        <div className="w-fit font-medium text-white text-sm relative [font-family:'Manrope',Helvetica] text-center tracking-[0] leading-5 whitespace-nowrap">
                          {driverInfo.rating}
                        </div>
                      </Badge>

                      <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                        {driverInfo.totalRatings}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
                  <Button className="inline-flex items-center justify-center gap-2.5 px-5 py-[15px] relative flex-[0_0_auto] bg-[#631cff1a] rounded-[25px] hover:bg-[#631cff1a]">
                    <HugeiconsIcon
                      icon={CheckmarkBadge02Icon}
                      color="#631CFF"
                    />

                    <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#631cff] text-sm tracking-[-0.11px] leading-[19.6px] whitespace-nowrap">
                        Contact Ritik
                      </div>
                    </div>
                  </Button>

                  <HugeiconsIcon icon={ArrowRight01Icon} />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <HugeiconsIcon icon={SecurityCheckIcon} color="#631CFF" />
                  <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                    Verified Profile
                  </div>
                </div>

                <div className="flex items-center justify-between px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[21.38px] h-[21.38px] mt-[-0.75px] mb-[-0.62px] ml-[-0.62px]"
                      alt="Frame"
                      src="/images/ridePublish.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                      Rides Published and Completed
                    </div>
                  </div>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-extrabold text-[#631cff] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                    {driverInfo.ridesCompleted}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <HugeiconsIcon icon={Agreement01Icon} color="#631CFF" />

                  <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                    Never cancels Rides
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <HugeiconsIcon icon={Backpack01Icon} color="#631CFF" />

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                    Trunk Bag per Passenger
                  </div>
                </div>

                <div className="w-fit mt-[-1.00px] font-normal text-transparent text-base relative [font-family:'Manrope',Helvetica] text-center tracking-[0] leading-5 whitespace-nowrap">
                  <span className="font-medium text-black">&nbsp;</span>

                  <span className="font-extrabold text-[#631cff]">1</span>
                </div>
              </div>

              {alreadyDeparted ? (
                <div className="flex gap-2.5 px-0 py-2.5 self-stretch w-full items-center relative flex-[0_0_auto] rounded-3xl">
                  <HugeiconsIcon icon={ZapFreeIcons} color="#631CFF" />

                  <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#101828] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                    Instant Booking Confirmation
                  </div>
                </div>
              ) : (
                <div className="flex gap-2.5 px-0 py-2.5 self-stretch w-full items-center relative flex-[0_0_auto] rounded-3xl">
                  <HugeiconsIcon icon={CheckmarkSquare01Icon} color="#631CFF" />

                  <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#101828] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                    Request approval required by rider{" "}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-3xl">
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <HugeiconsIcon icon={Car01Icon} color="#631CFF" />

                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#101828] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                          {driverInfo.carModel}
                        </div>
                      </div>
                    </div>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                      -
                    </div>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                      {driverInfo.carColor}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center px-4 py-2 gap-2 relative self-stretch flex-[0_0_auto] bg-basewhite rounded-[28px] border border-solid border-[#e5e5e5] shadow-[0px_2px_0px_#eeeeee]">
                  <div className="inline-flex flex-col gap-[1px]  justify-center relative ">
                    <div className="relative w-[10px] h-[10px] rounded-full overflow-hidden">
                      <img
                        className=" w-ful h-full object-cover"
                        alt="Group"
                        src="/images/wheel.png"
                      />
                    </div>

                    <div className="relative w-fit [font-family:'Inter',Helvetica] font-extrabold text-[#043ea2] text-[6.8px] text-center  whitespace-nowrap">
                      IND
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#332f2a] text-sm tracking-[0.42px] leading-[26px] whitespace-nowrap">
                      {driverInfo.licensePlate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
        <CardContent className="flex flex-col items-start justify-center gap-5 px-10 py-5">
          {alreadyDeparted && (
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[normal]">
              <span className="text-black">Passengers </span>

              <span className="text-[#631cff] text-lg">(2)</span>
            </div>
          )}

          {alreadyDeparted ? (
            passengers.map((passenger, index) => (
              <div
                key={index}
                className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                    <Avatar className="w-[50px] h-[50px]">
                      <AvatarImage
                        src="/images/profile.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </Avatar>

                    <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-base tracking-[-0.13px] leading-[22.4px]">
                        {passenger.name}
                      </div>

                      <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                          <div className="w-fit relative mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-[normal]">
                            {passenger.from}
                          </div>
                        </div>

                        <div className="flex w-[99px] items-end justify-between relative">
                          <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-xs tracking-[0] leading-[normal]">
                            To
                          </div>

                          <div className="w-20 text-right relative mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-[normal]">
                            {passenger.to}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <HugeiconsIcon icon={ArrowRight01Icon} />
              </div>
            ))
          ) : (
            <div className="flex items-center text-bold justify-between relative self-stretch w-full flex-[0_0_auto]">
              No Passengers yet
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="w-full bg-white rounded-[20px] border border-solid border-[#f2f2f2]">
        <CardContent className="flex h-[68px] items-center justify-between px-[30px] py-0">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-base tracking-[0] leading-7 whitespace-nowrap">
                Report/FlagIcon this ride
              </div>
            </div>
          </div>

          <HugeiconsIcon icon={Flag01Icon} color="red" />
        </CardContent>
      </Card>
    </div>
  );
};
