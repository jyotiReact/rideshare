"use client";

import { Card, CardContent } from "@/components/ui/card";
import StepLine from "@/components/ui/step-line";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface BookingLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const BookingLayout = ({
  title,
  description,
  children,
}: BookingLayoutProps): JSX.Element => {
  const router = useRouter();

  

  return (
    <div className="relative w-full min-h-screen bg-zinc-50 overflow-hidden py-5 px-20">
      <div className="flex  items-start w-full  gap-2.5">
        {/* Left Card */}
        <Card className="flex flex-col items-start gap-5 p-10 relative bg-white rounded-[10px] border-[#f2f2f2]">
          <div
            className="inline-flex items-center gap-2.5 p-2 bg-[#0000000d] rounded-[20px] cursor-pointer"
            onClick={() => router.back()}
          >
           <HugeiconsIcon icon={ArrowLeft01Icon} width={30}  />
          </div>
          <CardContent className="p-0 space-y-2">
            <h1 className="text-3xl font-medium text-[#353535]">
              {title}
            </h1>
            <p className="text-base text-[#515251]">
              {description}
            </p>
          </CardContent>
        </Card>

        {/* Right Card */}
        {children}
      
      </div>
    </div>
  );
};
