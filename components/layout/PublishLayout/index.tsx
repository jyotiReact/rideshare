"use client";

import Terms from "@/components/terms&Conditions";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { JSX, ReactNode } from "react";



interface PublishLayoutProps {
  children: ReactNode;
  totalStep?: number;
  stepCount: number;
  title: string;
  terms?: boolean;
  buttons?: ButtonProps[];
}

const PublishLayout = ({
  children,
  totalStep = 7,
  stepCount,
  title,
  terms = true,
  buttons = [],
}: PublishLayoutProps): JSX.Element => {
  const router = useRouter();

  return (
    <section className="flex md:items-center justify-center h-full lg:h-screen p-2 ">
      <div className="flex flex-col md:items-center md:justify-center md:gap-10 gap-6  relative w-full md:w-fit">
        {/* Main Content */}
        <div className="flex flex-col md:items-center md:gap-10 gap-6 relative self-stretch ">
          <div className="flex flex-col md:items-center gap-6 relative self-stretch w-full">
            <div className="flex flex-col items-center gap-[35px] relative self-stretch w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-start gap-3">
                  {stepCount > 1 && (
                    <ChevronLeft
                      className="w-5 h-5 mt-2 text-[#631CFF] cursor-pointer"
                      onClick={() => router.back()}
                    />
                  )}

                  <h1 className="text-[#353535] md:text-3xl text-[24px] font-bold leading-normal">
                    {title}
                  </h1>
                </div>
                <span className="font-medium text-[#353535] text-base whitespace-nowrap">
                  Step {stepCount}/{totalStep}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center  justify-center w-full px-2 ">
            {children}
          </div>
        </div>

        {/* Continue Button */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 w-full">
            {buttons.length > 0 &&
              buttons.map((button, index) => (
                <Button
                  key={index}
                  onClick={button?.handleClick}
                  variant={button.variant}
                  className={button.className}
                  size={button.size}
                >
                  <div className="font-bold  text-sm">{button.label}</div>
                </Button>
              ))}
          </div>

          {terms && (
            <div className="text-center mt-6 md:w-[500px]">
              <Terms />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublishLayout;
