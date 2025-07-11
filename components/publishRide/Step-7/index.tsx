import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MinusIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const StepSeven = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="inline-flex flex-col items-center justify-center gap-10 relative w-full max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full">
          <div className="flex flex-col items-center gap-[35px] relative self-stretch w-full">
            <div className="flex items-center justify-between relative self-stretch w-full">
              <h1 className="font-bold text-[#353535] text-3xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Ready to publish
              </h1>
              <span className="font-medium text-[#353535] text-base [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Step 12/5
              </span>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
          <label
            htmlFor="comments"
            className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]"
          >
            Comments for&nbsp;&nbsp;passengers
          </label>
          <Textarea
            id="comments"
            placeholder="Comments"
            className="h-36 rounded-[20px] border border-solid border-[#d9d9d9] px-5 py-[18px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm"
          />
        </div>

        {/* Luggage Counter Section */}
        <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
          <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
            Luggage Per Passenger
          </label>
          <div className="flex items-center gap-[15px] relative self-stretch w-full">
            <Button
              variant="default"
              size="icon"
              className="bg-[#631cff] rounded-[40px] h-11 w-11 flex items-center justify-center"
            >
              <MinusIcon className="h-6 w-6 text-white" />
            </Button>

            <Card className="flex-1 flex items-center justify-center px-5 py-3 rounded-[40px] border border-solid border-[#d9d9d9] bg-transparent">
              <span className="font-bold text-black text-sm tracking-[-0.11px] leading-[19.6px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                02
              </span>
            </Card>

            <Button
              variant="default"
              size="icon"
              className="bg-[#631cff] rounded-[40px] h-11 w-11 flex items-center justify-center"
            >
              <PlusIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-5 w-full">
          <Link href={"/publish-ride/ride-published"} className="w-full">
            <Button
              variant="outline"
              className="flex-1 px-5 py-[15px] w-full bg-[#631cff1a] text-[#631cff] rounded-[25px] border-none [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-sm"
            >
              Skip
            </Button>
          </Link>

          <Link href={"/publish-ride/ride-published"} className="w-full">
            <Button
              variant="default"
              className="flex-1 px-5 py-[15px] bg-[#631cff] w-full text-white rounded-[25px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-sm"
            >
              Publish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
