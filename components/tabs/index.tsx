import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
export const TabsComponent = ({
  title,
  tabOptions,
  handleTabClick,
}): JSX.Element => {
  // Define the tab options

  return (
    <section className="flex flex-col items-center gap-5 w-full">
      <div className="flex flex-col items-center gap-[30px] w-full">
        <h2 className="font-bold text-4xl text-[#353535] font-['Plus_Jakarta_Sans',Helvetica]">
          {title}
        </h2>
      </div>
      <Tabs defaultValue="published" className="w-full max-w-[397px]">
        <TabsList className="grid grid-cols-2 h-auto p-0 bg-transparent gap-2.5">
          {tabOptions.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`flex items-center justify-center gap-2.5 h-[62px] p-5 rounded-[20px] border border-solid data-[state=active]:bg-[#631CFF] data-[state=active]:text-white data-[state=active]:border-white data-[state=inactive]:border-[#F2F1F1] data-[state=inactive]:bg-transparent`}
              onClick={() => handleTabClick(tab.id)}
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
