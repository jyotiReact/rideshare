"use client";

import { Card, CardContent } from "@/components/ui/card";
import StepLine from "@/components/ui/step-line";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { JSX, ReactNode } from "react";

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
    <div className="relative w-full min-h-screen bg-zinc-50 overflow-hidden py-5 lg:px-20 px-5">
      <div className="flex lg:flex-row flex-col  items-start w-full  gap-2.5 ">
        {/* Left Card */}
        <Card className="flex flex-col items-start gap-5 lg:p-10 p-5 relative bg-white rounded-[10px] lg:flex-1 w-full border-[#f2f2f2]">
          <div
            className="inline-flex items-center gap-2.5 p-2 bg-[#0000000d] rounded-[20px] cursor-pointer"
            onClick={() => router.back()}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} width={30} />
          </div>
          <CardContent className="p-0 space-y-2">
            <h1 className="lg:text-3xl text-[24px] font-medium text-[#353535]">
              {title}
            </h1>
            <p className="text-base text-[#515251]">{description}</p>
          </CardContent>
        </Card>

        {/* Right Card */}
        <div className="lg:w-[700px] w-full">{children}</div>
      </div>
    </div>
  );
};
