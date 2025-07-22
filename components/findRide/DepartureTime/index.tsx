"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, RefreshCwIcon, FilterIcon, XIcon } from "lucide-react";
import RideListCard from "../../RideListCard";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Ride } from "@/types";
import moment from "moment";
import * as Dialog from "@radix-ui/react-dialog";

// Types
type DepartureTimeSectionProps = {
  rides: Ride[];
  fromLocation?: string;
  toLocation?: string;
  date?: Date | string | null | undefined;
};

const departureTimeOptions = [
  { label: "Before 06:00", value: "before_6" },
  { label: "06:00 - 12:00", value: "6_to_12" },
  { label: "12:00 - 18:00", value: "12_to_18" },
  { label: "After 18:00", value: "after_18" },
];

const amenitiesOptions = [
  { label: "Max. 2 in the back", value: "max_2_back" },
  { label: "Instant Booking", value: "instant_booking" },
  { label: "Smoking allowed", value: "smoking" },
  { label: "Pets allowed", value: "pets" },
];

export const DepartureTimeSection: React.FC<DepartureTimeSectionProps> = ({
  rides,
  fromLocation,
  toLocation,
  date,
}) => {
  const router = useRouter();
  const [selectedDepartureTimes, setSelectedDepartureTimes] = useState<
    string[]
  >([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleDepartureChange = (value: string) => {
    setSelectedDepartureTimes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleAmenitiesChange = (value: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const isInTimeRange = (time: string, range: string) => {
    const hour = parseInt(time.split(":")[0]);
    switch (range) {
      case "before_6":
        return hour < 6;
      case "6_to_12":
        return hour >= 6 && hour < 12;
      case "12_to_18":
        return hour >= 12 && hour < 18;
      case "after_18":
        return hour >= 18;
      default:
        return true;
    }
  };

  const filteredRides = rides.filter((ride) => {
    // Departure time filtering
    const departureTimeMatch =
      selectedDepartureTimes.length === 0 ||
      selectedDepartureTimes.some((range) =>
        isInTimeRange(ride.departureTime, range)
      );

    // Amenities filtering
    const amenitiesMatch =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) => {
        switch (amenity) {
          case "max_2_back":
            return ride.maxPassengers && ride.maxPassengers <= 2;
          case "instant_booking":
            return ride.instantRequest;
          // case "smoking":
          //   return ride.smokingAllowed;
          // case "pets":
          //   return ride.petsAllowed;
          default:
            return true;
        }
      });

    return departureTimeMatch && amenitiesMatch;
  });

  return (
    <div className="relative w-full bg-neutral-50 px-2">
      <div className="flex mt-6 gap-6">
        {/* Left Filter Panel - Desktop */}
        <Card className="lg:flex flex-col hidden w-[30%] gap-5 p-5 bg-white rounded-[10px] border border-solid border-[#F2F2F2] h-full">
          <CardContent className="p-0 space-y-5">
            <FilterSection
              title="Departure Time"
              options={departureTimeOptions}
              idPrefix="departure"
              selected={selectedDepartureTimes}
              handleChange={handleDepartureChange}
            />

            <FilterSection
              title="Amenities"
              options={amenitiesOptions}
              idPrefix="amenity"
              selected={selectedAmenities}
              handleChange={handleAmenitiesChange}
            />
          </CardContent>
        </Card>

        {/* Main Ride List Panel */}
        <div className="w-full ">
          <section className="flex flex-col w-full gap-10">
            {/* Header */}
            <div className="flex flex-col items-start w-full">
              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2 px-5 py-2.5 w-full bg-white rounded-t-[10px] border-t border-r border-l border-[#f2f1f1]">
                <div className="flex md:flex-row flex-col md:gap-2.5 ">
                  <div className="font-bold text-sm text-neutralblackb-500">
                    {date ? moment(date).format("ddd DD MMM") : "Tomorrow"}
                  </div>
                  <div className="font-medium text-sm text-neutralblackb-500 capitalize">
                    {fromLocation || "From"} → {toLocation || "To"}
                  </div>
                </div>
                <div className="flex gap-2 justify-between lg:hidden">
                  {/* Mobile Filter Button */}
                  <Dialog.Root
                    open={isFilterOpen}
                    onOpenChange={setIsFilterOpen}
                  >
                    <Dialog.Trigger asChild>
                      <button className="bg-transparent  rounded-full w-fit custom-shadow flex items-center border py-2 px-3 text-[#5C5F6A] border-[#E5E5E5]">
                        <FilterIcon className="h-4 w-4 mr-2 md:block  hidden" />
                        <span className="font-medium text-sm text-neutralblackb-500">
                          Filter
                        </span>
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-[500px] max-h-[80vh] -translate-x-1/2 -translate-y-1/2 bg-white rounded-[15px] shadow-xl overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-6">
                          <Dialog.Title className="text-xl font-bold text-neutralblackb-900">
                            Filters
                          </Dialog.Title>
                          <button
                            onClick={() => setIsFilterOpen(false)}
                            className="text-neutralblackb-500 hover:text-neutralblackb-700 focus:outline-none"
                          >
                            <XIcon className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="space-y-5">
                          <FilterSection
                            title="Departure Time"
                            options={departureTimeOptions}
                            idPrefix="mobile-departure"
                            selected={selectedDepartureTimes}
                            handleChange={handleDepartureChange}
                          />
                          <FilterSection
                            title="Amenities"
                            options={amenitiesOptions}
                            idPrefix="mobile-amenity"
                            selected={selectedAmenities}
                            handleChange={handleAmenitiesChange}
                          />
                        </div>
                        <div className="mt-6 flex justify-end">
                          <Button
                            onClick={() => setIsFilterOpen(false)}
                            className="bg-[#D0F500] hover:bg-[#C0E500] text-black font-bold py-2 px-6 rounded-full"
                          >
                            Apply Filters
                          </Button>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>

                  {/* Sort by Button */}
                  {/* <button className="bg-transparent rounded-full w-fit  custom-shadow flex items-center border p-2 text-[#5C5F6A] border-[#E5E5E5]">
                    <span className="font-medium text-sm text-neutralblackb-500">
                      Sort by
                    </span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </button> */}
                </div>
              </div>

              <div className="w-full relative ">
                <div className="flex items-center justify-between px-5 py-2.5 relative z-10 bg-[#D0F500] ">
                  <div className="text-sm text-black">
                    {filteredRides.length > 0 ? (
                      <>
                        <span className="font-normal">Showing </span>
                        <span className="font-bold">
                          1-{filteredRides.length}
                        </span>
                        <span className="font-normal"> of </span>
                        <span className="font-bold">
                          {filteredRides.length}
                        </span>
                        <span className="font-normal"> results.</span>
                      </>
                    ) : (
                      <span className="font-bold">0 results found.</span>
                    )}
                  </div>
                  {filteredRides.length > 0 && (
                    <div className="text-sm md:block hidden">
                      <span className="font-bold text-black">1000</span>
                      <span className="font-medium text-black">
                        {" "}
                        searches on this route last month
                      </span>
                    </div>
                  )}
                </div>
                <img
                  src="/images/wave.png"
                  alt="wave"
                  className="w-full absolute -bottom-1 left-0 z-0 pointer-events-none"
                />
              </div>
            </div>

            {/* Rides List */}
            <div className="flex flex-col items-center gap-5 w-full">
              {filteredRides.length > 0 ? (
                filteredRides.map((ride) => (
                  <RideListCard
                    key={ride.id}
                    ride={ride}
                    btnLabel="Book now"
                    handleCardClick={() => router.push(`/ride-details`)}
                  />
                ))
              ) : (
                <div className="text-center text-neutral-500 text-sm">
                  No rides found for this search.
                </div>
              )}
            </div>

            {filteredRides.length > 0 && (
              <Button className="flex items-center justify-center gap-2.5 px-[30px] py-[18px] w-fit mx-auto rounded-[28px] border ">
                <RefreshCwIcon className="w-5 h-5" />
                <span className="font-bold text-white text-sm">
                  Load more rides
                </span>
              </Button>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

const FilterSection: React.FC<{
  title: string;
  options: { label: string; value: string }[];
  idPrefix: string;
  selected: string[];
  handleChange: (value: string) => void;
}> = ({ title, options, idPrefix, selected, handleChange }) => (
  <div className="flex flex-col items-start gap-2.5 w-full">
    <h3 className="font-semibold text-neutralblackb-900 text-base leading-7">
      {title}
    </h3>
    <div className="flex flex-col w-full items-start justify-center">
      {options.map((option, index) => (
        <div
          key={`${idPrefix}-${index}`}
          className={`flex items-center gap-2 px-1 py-3 w-full ${
            index < options.length - 1 ? "border-b border-[#e9e9eb]" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2.5">
            <Checkbox
              id={`${idPrefix}-${index}`}
              checked={selected.includes(option.value)}
              onCheckedChange={() => handleChange(option.value)}
              className="w-[18px] h-[18px] rounded-[33px] border-2 border-[#e6e7e8]"
            />
            <label
              htmlFor={`${idPrefix}-${index}`}
              className="font-medium text-neutralblackb-600 text-sm leading-[24.5px]"
            >
              {option.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  </div>
);
