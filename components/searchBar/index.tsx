"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDataTransferHorizontalFreeIcons,
  ArrowDataTransferVerticalIcon,
  Calendar02Icon,
  PinLocation01Icon,
  Search01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusIcon, PlusIcon } from "lucide-react";
import CustomDatePicker from "../ui/date-picker";

type SearchParams = {
  from: string;
  to: string;
  date: Date | null;
  passengers: number;
};

type SearchFormProps = {
  searchParams: SearchParams;
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
  handleSearch: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  searchParams,
  setSearchParams,
  handleSearch,
}) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [showPassengerPopup, setShowPassengerPopup] = useState(false);

  const { from, to, date, passengers } = searchParams;

  return (
    <div className="flex lg:flex-row flex-col w-full items-start lg:gap-2.5 gap-4">
      {/* From/To Location Fields */}
      <div className="flex md:flex-row flex-col items-center lg:gap-2.5 gap-4 relative flex-1 w-full">
        {/* From Location */}
        <div className="flex items-center gap-1 px-5 py-3 rounded-[40px] border w-full border-[#d9d9d9] relative">
          <HugeiconsIcon icon={PinLocation01Icon} width={20} color="#631CFF" />
          <label
            htmlFor="fromLocation"
            className="font-bold text-black text-sm"
          >
            From:
          </label>
          <input
            id="fromLocation"
            name="fromLocation"
            type="text"
            placeholder="Enter location"
            value={from}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, from: e.target.value }))
            }
            className="flex-1 border-none focus:outline-none bg-transparent font-medium text-[#515251] text-sm placeholder:text-[#b0b0b0]"
          />
        </div>

        {/* To Location */}
        <div className="flex items-center gap-1 px-5 py-3 rounded-[40px] border w-full border-[#d9d9d9] relative">
          <HugeiconsIcon icon={PinLocation01Icon} width={20} color="#631CFF" />
          <label htmlFor="toLocation" className="font-bold text-black text-sm">
            To:
          </label>
          <input
            id="toLocation"
            name="toLocation"
            type="text"
            placeholder="Enter location"
            value={to}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, to: e.target.value }))
            }
            className="flex-1 border-none focus:outline-none bg-transparent font-medium text-[#515251] text-sm placeholder:text-[#b0b0b0]"
          />
        </div>

        {/* Swap Button */}
        <Button
          className="absolute top-1/2 lg:left-[52%] md:left-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-[#D0F500] rounded-full hover:bg-[#bfe000] transition z-8"
          size="icon"
          onClick={() =>
            setSearchParams((prev) => ({ ...prev, from: to, to: from }))


          }
        >
          <HugeiconsIcon
            icon={ArrowDataTransferVerticalIcon}
            width={20}
            color="#631cff "
            className="md:hidden lg:hidden block "
          />
          <HugeiconsIcon
            icon={ArrowDataTransferHorizontalFreeIcons}
            width={20}
            color="#631cff "
            className="md:block lg:block hidden "
          />
        </Button>
      </div>

      {/* Date and Passenger Selection */}
      <div className="flex items-center gap-2.5 w-full relative">
        <div className="flex-1">
          <CustomDatePicker
            selected={date}
            onChange={(newDate) =>
              setSearchParams((prev) => ({ ...prev, date: newDate }))
            }
            renderCustomInput={() => (
              <Button
                variant="outline"
                className="flex-1 gap-2 items-center w-full bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
              >
                <HugeiconsIcon
                  icon={Calendar02Icon}
                  width={20}
                  color="#631CFF"
                />
                <span className="font-bold text-black text-sm">
                  {date
                    ? date.toLocaleDateString("en-IN", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      })
                    : "Select date"}
                </span>
              </Button>
            )}
          />
        </div>

        {/* Passenger Selector */}
        <div className="relative flex-1 ">
          <Button
            variant="outline"
            className="flex gap-2 items-center w-full bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
            onClick={() => setShowPassengerPopup(!showPassengerPopup)}
          >
            <HugeiconsIcon icon={UserGroupIcon} width={20} color="#631CFF" />
            <span className="font-bold text-black text-sm">
              {passengers} Passenger{passengers > 1 ? "s" : ""}
            </span>
          </Button>

          {showPassengerPopup && (
            <div
              ref={popupRef}
              className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-2xl shadow-xl p-4 transition-all duration-200 ease-out origin-top transform-gpu opacity-0 scale-95 animate-[fadeIn_200ms_ease-out_forwards]"
            >
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={() =>
                    setSearchParams((prev) => ({
                      ...prev,
                      passengers: Math.max(1, prev.passengers - 1),
                    }))
                  }
                  className="flex-1 flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <MinusIcon className="w-4 h-4 text-[#631CFF]" />
                </button>

                <span className="text-sm font-medium w-8 text-center">
                  {passengers}
                </span>

                <button
                  onClick={() =>
                    setSearchParams((prev) => ({
                      ...prev,
                      passengers: Math.min(10, prev.passengers + 1),
                    }))
                  }
                  className="flex-1 flex items-center justify-center p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <PlusIcon className="w-4 h-4 text-[#631CFF]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Button */}
      <Button
        className="inline-flex items-center lg:w-fit justify-center gap-1 px-[30px] py-6 rounded-full"
        onClick={handleSearch}
      >
        <HugeiconsIcon icon={Search01Icon} width={20} color="#ffffff" />
        <span className="font-medium text-white text-sm">Search Rides</span>
      </Button>
    </div>
  );
};

export default SearchForm;
