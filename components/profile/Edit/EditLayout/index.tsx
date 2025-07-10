"use client";

import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

// Define props type
interface EditLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export const EditLayout: React.FC<EditLayoutProps> = ({
  title,
  description,
  children,
}) => {
  const router = useRouter();
  return (
    <div className="relative w-full min-h-screen bg-zinc-50 overflow-hidden py-5 px-20">
      <div className="flex w-full items-start gap-2.5">
        {/* Left Card - Booking Request */}
        <Card className="flex flex-col items-start gap-5 p-10 bg-white rounded-[10px] border border-[#f2f2f2]">
          <div
            className="inline-flex items-center gap-2.5 p-2.5 bg-[#0000000d] rounded-[20px] cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
          <CardContent className="p-0 space-y-2">
            <h1 className="font-medium text-[#353535] text-2xl font-['Plus_Jakarta_Sans',Helvetica]">
              {title}
            </h1>
            {description && (
              <p className="text-[#515251] text-base font-normal font-['Plus_Jakarta_Sans',Helvetica]">
                {description}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Right side content passed as children */}
        {children}
      </div>
    </div>
  );
};
