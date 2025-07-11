// components/ProfileLayout.tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete01Icon,
  Logout01Icon,
  PencilEdit02Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import React, { ReactNode } from "react";
import { TabOption } from "@/types"; // or define inline below

type ProfileLayoutProps = {
  children: ReactNode;
  handleTabClick: (id: string) => void;
  tabOptions: TabOption[];
};

export const ProfileLayout = ({
  children,
  handleTabClick,
  tabOptions,
}: ProfileLayoutProps): JSX.Element => {
  const profileData = {
    name: "Ritik B.",
    age: "22 y/o",
    email: "ritikbhardwaj@gmail.com",
    phone: "+917813897220",
  };

  return (
    <div className="inline-flex items-start gap-5 relative w-full">
      {/* Sidebar */}
      <div className="inline-flex flex-col h-[780px] items-center justify-between relative flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-5 relative self-stretch w-full">
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
                <h2 className="font-bold text-black text-2xl text-center leading-[33.6px] font-sans">
                  {profileData.name}
                </h2>
                <p className="text-[#515251] text-sm text-center leading-[22.4px] font-sans">
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
                  <span className="font-medium text-base font-sans">
                    Edit
                  </span>
                </Button>
              </Link>
            </CardContent>
          </div>

          {/* Tabs */}
          <div className="flex flex-col items-start gap-2.5 w-full">
            <Tabs
              defaultValue={tabOptions[0]?.id || ""}
              className="w-full max-w-[397px]"
            >
              <TabsList className="grid grid-cols-1 p-0 gap-2.5 bg-transparent">
                {tabOptions.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className="flex items-center justify-between gap-2.5 h-[62px] p-5 rounded-[20px] border 
                      data-[state=active]:bg-[#631CFF] data-[state=active]:text-white 
                      data-[state=active]:border-white data-[state=inactive]:border-[#F2F1F1] 
                      data-[state=inactive]:bg-transparent"
                  >
                    <span className="font-bold text-base font-sans">
                      {tab.label}
                    </span>
                    <HugeiconsIcon icon={tab.icon} className="w-6 h-6" />
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col items-start gap-2.5 w-full">
          <Button
            variant="outline"
            className="h-[68px] justify-between px-[30px] bg-white rounded-[20px] border border-[#e9e9eb] w-full"
          >
            <span className="font-bold text-black text-base font-sans">
              Logout
            </span>
            <HugeiconsIcon icon={Logout01Icon} width={20} color="red" />
          </Button>

          <Button
            variant="outline"
            className="h-[68px] justify-between px-[30px] bg-white rounded-[20px] border border-[#e9e9eb] w-full"
          >
            <span className="font-bold text-black text-base font-sans">
              Close my account
            </span>
            <HugeiconsIcon icon={Delete01Icon} width={20} color="red" />
          </Button>
        </div>
      </div>

      {/* Right section */}
      {children}
    </div>
  );
};
