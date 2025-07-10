import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight01Icon,
  Delete01Icon,
  Logout01Icon,
  PencilEdit02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import React from "react";

export const ProfileLayout = ({
  children,
  handleTabClick,
  tabOptions,
}): JSX.Element => {
  // Profile data
  const profileData = {
    name: "Ritik B.",
    age: "22 y/o",
    email: "ritikbhardwaj@gmail.com",
    phone: "+917813897220",
  };

  return (
    <div className="inline-flex items-start gap-5 relative w-full">
      {/* Left sidebar */}
      <div className="inline-flex flex-col h-[780px] items-center justify-between relative flex-[0_0_auto]">
        {/* Profile section */}
        <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="w-[397px] items-center px-[30px] py-5 rounded-[20px] border-none bg-transparent">
            <CardContent className="p-0 flex flex-col items-center justify-center gap-2.5">
              <Avatar className="w-[137.81px] h-[137.81px]">
                <AvatarImage
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>

              <div className="inline-flex flex-col items-center">
                <h2 className="self-stretch mt-[-1.00px] font-bold text-black text-2xl text-center tracking-[-0.19px] leading-[33.6px] font-sans">
                  {profileData.name}
                </h2>
                <p className="self-stretch font-normal text-[#515251] text-sm text-center tracking-[0] leading-[22.4px] font-sans">
                  {profileData.age}
                </p>
              </div>

              <Link href="/profile/edit-profile">
                <Button
                  variant="outline"
                  className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-[#631cff1a] text-[#631cff] rounded-3xl border-none"
                >
                  <HugeiconsIcon
                    icon={PencilEdit02Icon}
                    width={20}
                    color="#631CFF"
                  />
                  <span className="font-medium text-base tracking-[-0.13px] leading-[22.4px] font-sans">
                    Edit
                  </span>
                </Button>
              </Link>
            </CardContent>
          </div>

          {/* Navigation menu */}
          <div className="flex flex-col items-start gap-2.5 w-full">
            <Tabs
              defaultValue={tabOptions[0]?.id || ""}
              className="w-full max-w-[397px]"
            >
              <TabsList className="grid grid-cols-1 h-auto p-0 bg-transparent gap-2.5">
                {tabOptions.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className="flex items-center justify-between gap-2.5 h-[62px] p-5 rounded-[20px] border border-solid 
                data-[state=active]:bg-[#631CFF] data-[state=active]:text-white 
                data-[state=active]:border-white data-[state=inactive]:border-[#F2F1F1] 
                data-[state=inactive]:bg-transparent"
                  >
                    <span className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-base tracking-[-0.13px] leading-[22.4px] whitespace-nowrap data-[state=inactive]:text-[#515251]">
                      {tab.label}
                    </span>
                    <HugeiconsIcon icon={tab.icon} className="w-6 h-6" />
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Button
            variant="outline"
            className="h-[68px] items-center justify-between px-[30px] py-0 bg-white rounded-[20px] border border-solid border-[#e9e9eb] flex relative self-stretch w-full"
          >
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-bold text-black text-base tracking-[0] leading-7 whitespace-nowrap font-sans">
                  Logout
                </span>
              </div>
            </div>
            <HugeiconsIcon icon={Logout01Icon} width={20} color="red" />
          </Button>

          <Button
            variant="outline"
            className="h-[68px] items-center justify-between px-[30px] py-0 bg-white rounded-[20px] border border-solid border-[#e9e9eb] flex relative self-stretch w-full"
          >
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-bold text-black text-base tracking-[0] leading-7 whitespace-nowrap font-sans">
                  Close my account
                </span>
              </div>
            </div>
            <HugeiconsIcon icon={Delete01Icon} width={20} color="red" />
          </Button>
        </div>
      </div>

      {children}
    </div>
  );
};
