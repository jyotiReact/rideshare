"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabOption } from "@/types";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

// Define tab option type


// Define props type
interface TabsComponentProps {
  title?: string;
  tabOptions?: TabOption[];
  handleTabClick?: (tabId: string) => void;
}

export const TabsComponent: React.FC<TabsComponentProps> = ({
  title,
  tabOptions=[],
  handleTabClick=()=>{},
}) => {
  return (
    <section className="flex flex-col items-center gap-5 w-full">
      <div className="flex flex-col items-center gap-[30px] w-full">
        {title && (
          <h2 className="font-bold text-4xl text-[#353535] font-['Plus_Jakarta_Sans',Helvetica]">
            {title}
          </h2>
        )}
      </div>
      <Tabs
        defaultValue={tabOptions[0]?.id || ""}
        className="w-full max-w-[397px]"
      >
        <TabsList className="grid grid-cols-2 h-auto p-0 bg-transparent gap-2.5">
          {tabOptions?.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="flex items-center justify-center gap-2.5 h-[62px] p-5 rounded-[20px] border border-solid 
                data-[state=active]:bg-[#631CFF] data-[state=active]:text-white 
                data-[state=active]:border-white data-[state=inactive]:border-[#F2F1F1] 
                data-[state=inactive]:bg-transparent"
            >
              <HugeiconsIcon icon={tab.icon} className="w-6 h-6" />
              <span className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-base tracking-[-0.13px] leading-[22.4px] whitespace-nowrap data-[state=inactive]:text-[#515251]">
                {tab.label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
};
