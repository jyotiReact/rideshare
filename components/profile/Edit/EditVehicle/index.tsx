import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import { Input } from "@/components/ui/input";
import { BookingLayout } from "@/components/layout/BookingLayout";

export const EditVehicle = (): JSX.Element => {
  return (
    <BookingLayout
      title="Add/ Edit a vehicle"
      description="Add/ Edit Vehicle that you travel in"
    >
      <div className="inline-flex flex-col items-start justify-center gap-5  w-[785px]">
        <Card className="w-full border border-solid border-[#F2F2F2] rounded-[10px]">
          <CardContent className="flex flex-col items-start gap-[30px] px-10 py-5">
            <h1 className="font-bold text-[#353535] text-4xl [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Vehicle 1
            </h1>
            <div className="flex flex-col w-full items-start gap-[15px]">
              <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Whats your vehicle&apos;s brand ?
              </label>
              <Select>
                <SelectTrigger className="w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]">
                  <SelectValue placeholder="" />
                  {/* <ChevronDownIcon className="h-6 w-6" /> */}
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex items-start gap-[30px] w-full">
              <div className="flex flex-col items-start gap-[15px] flex-1">
                <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Vehicle model
                </label>
                <Select>
                  <SelectTrigger className="w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]">
                    <SelectValue placeholder="" />
                    {/* <ChevronDownIcon className="h-6 w-6" /> */}
                  </SelectTrigger>
                </Select>
              </div>
              <div className="flex flex-col items-start gap-[15px] flex-1">
                <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Vehicle color
                </label>
                <Select>
                  <SelectTrigger className="w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]">
                    <SelectValue placeholder="" />
                    {/* <ChevronDownIcon className="h-6 w-6" /> */}
                  </SelectTrigger>
                </Select>
              </div>
            </div>
            <div className="flex flex-col w-full items-start gap-[15px]">
              <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Vehicle Number
              </label>
              <Input
                className="w-full py-[22px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]"
                placeholder=""
              />
            </div>
          </CardContent>
        </Card>
        <Button
          variant="outline"
          className="w-full py-5 bg-[#631cff1a] text-[#631CFF] rounded-[40px] font-semibold text-base [font-family:'Plus_Jakarta_Sans',Helvetica] tracking-[-0.13px] leading-[22.4px] border-none"
        >
          Add vehicle
        </Button>
        <Button className="w-full py-5 bg-[#631CFF] text-white rounded-[50px] font-semibold text-base [font-family:'Plus_Jakarta_Sans',Helvetica] leading-7">
          Save
        </Button>
      </div>
    </BookingLayout>
  );
};
