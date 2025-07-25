"use client";

import Terms from "@/components/terms&Conditions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, MinusIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import React, { JSX, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep7Data } from "@/store/rideSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

export const StepSeven = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const step7Data = useSelector((state: RootState) => state.ride.step7);

  const [comments, setComments] = useState(step7Data.comments);
  const [luggageCount, setLuggageCount] = useState(
    step7Data.luggagePerPassenger
  );

  const handlePublish = () => {
    // Save data to Redux before navigating
    dispatch(
      setStep7Data({
        comments,
        luggagePerPassenger: luggageCount,
      })
    );
    router.push("/publish-ride/ride-published");
  };

  const handleLuggageChange = (type: "increment" | "decrement") => {
    const newCount =
      type === "increment"
        ? Math.min(luggageCount + 1, 10) // Assuming max 10
        : Math.max(luggageCount - 1, 0); // Min 0
    setLuggageCount(newCount);
  };

  return (
    <div className="flex items-center justify-center p-5 h-screen ">
      <div className="flex flex-col md:gap-10 justify-between relative w-full max-w-3xl h-full md:h-fit">
        <div className="inline-flex flex-col items-center justify-center gap-10 relative w-full max-w-3xl mx-auto">
          {/* Header Section - unchanged */}
          <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full">
            <div className="flex flex-col items-center gap-[35px] relative self-stretch w-full">
              <div className="flex items-center justify-between relative self-stretch w-full">
                <div className="flex gap-3 items-center">
                  <ChevronLeft
                    className="w-5 h-5 mt-2 text-[#631CFF] cursor-pointer"
                    onClick={() => router.back()}
                  />

                  <h1 className="font-bold text-[#353535] md:text-3xl text-[24px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                    Ready to publish
                  </h1>
                </div>
                <span className="font-medium text-[#353535] text-base [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Step 7/7
                </span>
              </div>
            </div>
          </div>

          {/* Comments Section - now controlled */}
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
            <label
              htmlFor="comments"
              className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]"
            >
              Comments for passengers
            </label>
            <Textarea
              id="comments"
              placeholder="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="h-36 rounded-[20px] border border-solid border-[#d9d9d9] px-5 py-[18px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm"
            />
          </div>

          {/* Luggage Counter Section - now functional */}
          <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
            <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Luggage Per Passenger
            </label>
            <div className="flex items-center gap-[15px] relative self-stretch w-full">
              <Button
                variant="default"
                size="icon"
                className="bg-[#631cff] rounded-[40px] h-11 w-11 flex items-center justify-center"
                onClick={() => handleLuggageChange("decrement")}
              >
                <MinusIcon className="h-6 w-6 text-white" />
              </Button>

              <Card className="flex-1 flex items-center justify-center px-5 py-3 rounded-[40px] border border-solid border-[#d9d9d9] bg-transparent">
                <span className="font-bold text-black text-sm tracking-[-0.11px] leading-[19.6px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  {String(luggageCount).padStart(2, "0")}
                </span>
              </Card>

              <Button
                variant="default"
                size="icon"
                className="bg-[#631cff] rounded-[40px] h-11 w-11 flex items-center justify-center"
                onClick={() => handleLuggageChange("increment")}
              >
                <PlusIcon className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Action Buttons - now with click handlers */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-5 w-full mt-4">
          <Link href={"/publish-ride/ride-published"} className="w-full">
            <Button
              variant="outline"
              className=" px-5 py-[15px] w-full bg-[#631cff1a] text-[#631cff] rounded-[25px] border-none [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-sm"
            >
              Skip and Publish
            </Button>
          </Link>

          <Button
            variant="default"
            className="px-5 py-[15px] bg-[#631cff] w-full text-white rounded-[25px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-sm"
            onClick={handlePublish}
          >
            Publish
          </Button>

          <div className="text-center mt-1 md:w-[500px] md:hidden block">
            <Terms />
          </div>
        </div>
      </div>
    </div>
  );
};
