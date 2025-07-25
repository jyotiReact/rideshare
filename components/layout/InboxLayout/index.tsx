// components/InboxLayout.tsx
"use client";
import { TabsComponent } from "@/components/tabs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { InboxLayoutProps } from "@/types";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX } from "react";

function InboxLayout({
  tabOptions,
  handleTabClick,
  data,
  children,
  alertIcon = false,
  showTabs = true,
  title,
  description,
  handleMessageClick,
}: InboxLayoutProps): JSX.Element {
  const router = useRouter();
  return (
    <div className="flex gap-5  py-5 lg:px-20 px-5 w-full  h-full">
      <div className="flex flex-col  items-center gap-10 flex-1 w-full ">
        {/* Navigation Tabs */}
        {showTabs ? (
          <TabsComponent
            tabOptions={tabOptions}
            handleTabClick={handleTabClick}
          />
        ) : (
          <Card className="flex flex-col items-start gap-5 md:p-10 p-5 relative bg-white rounded-[10px] border-[#f2f2f2] w-full">
            <div
              className="inline-flex items-center gap-2.5 p-2 bg-[#0000000d] rounded-[20px] cursor-pointer"
              onClick={() => router.back()}
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} width={30} />
            </div>
            <CardContent className="p-0 space-y-2">
              <h1 className="text-3xl font-medium text-[#353535]">{title}</h1>
              <p className="text-base text-[#515251]">{description}</p>
            </CardContent>
          </Card>
        )}

        {/* Notifications Card */}
        <Card className="flex flex-col items-start  w-full bg-white rounded-[20px] border border-solid border-[#f2f1f1] overflow-hidden">
          <CardContent className="p-0 w-full">
            {data?.map((notification, index) => (
              // <Link href="/your-rides/bookings/details">
                <div
                  onClick={handleMessageClick}
                  key={index}
                  className="flex items-center gap-2 p-5 w-full relative border-b border-[#e9e9eb] last:border-b-0"
                >
                  <div className="flex items-center gap-2.5 flex-1">
                    <Avatar className="w-[53px] h-[53px]">
                      <AvatarImage
                        src="/images/profile.jpg"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </Avatar>

                    <div className="flex flex-col items-start justify-center flex-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold text-neutralblackb-600 text-base leading-7">
                          {notification.name}
                        </span>
                        {alertIcon && (
                          <AlertCircleIcon className="w-5 h-5 text-[#631CFF]" />
                        )}
                      </div>

                      <span className="font-medium text-neutralblackb-600 text-sm leading-[24.5px]">
                        {notification.message}
                      </span>
                    </div>
                  </div>
                </div>
              // </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="w-[700px] lg:block hidden">{children}</div>
    </div>
  );
}

export default InboxLayout;
