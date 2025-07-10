import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

export const Account = (): JSX.Element => {
  // Define menu items data for better organization and mapping
  const menuItems = [
    // First card - single item
    [{ title: "Ratings" }],
    // Second card - account settings
    [
      { title: "Communication Preferences" },
      { title: "Password" },
      { title: "Postal address" },
    ],
    // Third card - payment settings
    [
      { title: "Payment methods" },
      { title: "Payouts" },
      { title: "Payout methods" },
      { title: "Payout & refunds" },
    ],
    // Fourth card - single item
    [{ title: "Data protection" }],
  ];

  return (
    <div className="flex flex-col items-start justify-center gap-5 relative w-full">
      {/* First card with single item */}
      <Card className="w-full border border-solid border-[#e9e9eb] rounded-[20px]">
        <CardContent className="p-0">
          <div className="flex items-center justify-between px-[30px] py-5">
            <div className="inline-flex items-center gap-2.5">
              <div className="inline-flex flex-col items-start justify-center gap-1">
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base leading-7">
                  {menuItems[0][0].title}
                </div>
              </div>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-purple-500" />
          </div>
        </CardContent>
      </Card>

      {/* Second card with multiple items */}
      <Card className="w-full border border-solid border-[#e9e9eb] rounded-[20px]">
        <CardContent className="p-0">
          {menuItems[1].map((item, index) => (
            <div
              key={`account-${index}`}
              className={`flex items-center justify-between px-[30px] py-5 ${
                index !== menuItems[1].length - 1
                  ? "border-b border-[#f2f2f2]"
                  : ""
              }`}
            >
              <div className="inline-flex items-center gap-2.5">
                <div className="inline-flex flex-col items-start justify-center gap-1">
                  <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base leading-7">
                    {item.title}
                  </div>
                </div>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-purple-500" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Third card with payment items */}
      <Card className="w-full border border-solid border-[#e9e9eb] rounded-[20px]">
        <CardContent className="p-0">
          {menuItems[2].map((item, index) => (
            <div
              key={`payment-${index}`}
              className={`flex items-center justify-between px-[30px] py-5 ${
                index !== menuItems[2].length - 1
                  ? "border-b border-[#f2f2f2]"
                  : ""
              }`}
            >
              <div className="inline-flex items-center gap-2.5">
                <div className="inline-flex flex-col items-start justify-center gap-1">
                  <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base leading-7">
                    {item.title}
                  </div>
                </div>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-purple-500" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Fourth card with single item */}
      <Card className="w-full border border-solid border-[#e9e9eb] rounded-[20px]">
        <CardContent className="p-0">
          <div className="flex items-center justify-between px-[30px] py-5">
            <div className="inline-flex items-center gap-2.5">
              <div className="inline-flex flex-col items-start justify-center gap-1">
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-neutralblackb-600 text-base leading-7">
                  {menuItems[3][0].title}
                </div>
              </div>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-purple-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
