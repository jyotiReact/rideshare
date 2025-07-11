// components/InboxLayout.tsx

import { TabsComponent } from "@/components/tabs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { InboxLayoutProps } from "@/types";
import { AlertCircleIcon } from "lucide-react";


function InboxLayout({
  tabOptions,
  handleTabClick,
  data,
  children,
  alertIcon = false,
}: InboxLayoutProps): JSX.Element {
  return (
    <div className="flex gap-5 w-full">
      <div className="flex flex-col min-w-[400px] items-center gap-10">
        {/* Navigation Tabs */}
        <TabsComponent tabOptions={tabOptions} handleTabClick={handleTabClick} />

        {/* Notifications Card */}
        <Card className="flex flex-col items-start w-full bg-white rounded-[20px] border border-solid border-[#f2f1f1] overflow-hidden">
          <CardContent className="p-0 w-full">
            {data.map((notification,index) => (
              <div
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
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}

export default InboxLayout;
