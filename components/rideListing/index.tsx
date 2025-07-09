import React from "react";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { DepartureTimeSection } from "./DepartureTime";

export const RideListing = (): JSX.Element => {
  // Filter options data
  const departureTimeOptions = [
    "Before 06:00",
    "06:00 - 12:00",
    "12:00 - 18:00",
    "Before 18:00",
  ];

  const trustAndSafetyOptions = ["Verified Profiles"];

  const amenitiesOptions = [
    "Max. 2 in the back",
    "Instant Booking",
    "Smoking allowed",
    "Pets allowed",
  ];

  return (
    <div className="relative w-full bg-neutral-50 px-20 ">
      <div className="flex mt-6 gap-6">
        <Card className="flex-col  gap-5 p-5  bg-white rounded-[10px] border border-solid border-[#F2F2F2] h-full">
          <CardContent className="p-0 space-y-5">
            {/* Departure Time Section */}
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h3 className="font-semibold text-neutralblackb-900 text-base leading-7 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Departure Time
              </h3>
              <div className="flex flex-col w-[200px] items-start justify-center">
                {departureTimeOptions.map((option, index) => (
                  <div
                    key={`departure-${index}`}
                    className={`flex items-center gap-2 px-1 py-3 w-full ${
                      index < departureTimeOptions.length - 1
                        ? "border-b border-[#e9e9eb]"
                        : ""
                    }`}
                  >
                    <div className="inline-flex items-center gap-2.5">
                      <Checkbox
                        id={`departure-${index}`}
                        className="w-[18px] h-[18px] rounded-[33px] border-2 border-[#e6e7e8]"
                      />
                      <label
                        htmlFor={`departure-${index}`}
                        className="font-medium text-neutralblackb-600 text-sm leading-[24.5px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                      >
                        {option}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust and Safety Section */}
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h3 className="font-semibold text-neutralblackb-900 text-base leading-7 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Trust and Safety
              </h3>
              <div className="flex flex-col w-[200px] items-start justify-center">
                {trustAndSafetyOptions.map((option, index) => (
                  <div
                    key={`trust-${index}`}
                    className="flex items-center gap-2 px-1 py-3 w-full border-b border-[#e9e9eb]"
                  >
                    <div className="inline-flex items-center gap-2.5">
                      <Checkbox
                        id={`trust-${index}`}
                        className="w-[18px] h-[18px] rounded-[33px] border-2 border-[#e6e7e8]"
                      />
                      <label
                        htmlFor={`trust-${index}`}
                        className="font-medium text-neutralblackb-600 text-sm leading-[24.5px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                      >
                        {option}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Section */}
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h3 className="font-semibold text-neutralblackb-900 text-base leading-7 [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Amenities
              </h3>
              <div className="flex flex-col w-[200px] items-start justify-center">
                {amenitiesOptions.map((option, index) => (
                  <div
                    key={`amenity-${index}`}
                    className={`flex items-center gap-2 px-1 py-3 w-full ${
                      index < amenitiesOptions.length - 1
                        ? "border-b border-[#e9e9eb]"
                        : ""
                    }`}
                  >
                    <div className="inline-flex items-center gap-2.5">
                      <Checkbox
                        id={`amenity-${index}`}
                        className="w-[18px] h-[18px] rounded-[33px] border-2 border-[#e6e7e8]"
                      />
                      <label
                        htmlFor={`amenity-${index}`}
                        className="font-medium text-neutralblackb-600 text-sm leading-[24.5px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                      >
                        {option}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="w-full">
          <DepartureTimeSection />
        </div>
      </div>
    </div>
  );
};
