"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDataTransferHorizontalIcon,
  ArrowDataTransferVerticalIcon,
  Calendar02Icon,
  PinLocation01Icon,
  Search01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type SearchFormProps = {
  handleSearch: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ handleSearch }) => {
  return (
    <div className="flex lg:flex-row flex-col w-full items-start lg:gap-2.5 gap-4">
      {/* From/To Location Fields */}
      <div className="flex lg:flex-row flex-col items-center lg:gap-2.5 gap-4 relative flex-1  w-full">
        {/* From Location */}
        <div className="flex items-center gap-1 px-5 py-3 relative flex-1 rounded-[40px] border w-full border-[#d9d9d9]">
          <HugeiconsIcon icon={PinLocation01Icon} width={20} color="#631CFF" />

          <label
            htmlFor="fromLocation"
            className="font-bold text-black text-sm tracking-[0] leading-[normal]"
          >
            From:
          </label>

          <input
            id="fromLocation"
            name="fromLocation"
            type="text"
            placeholder="Enter location"
            defaultValue="Chandigarh"
            className="flex-1 border-none focus:outline-none bg-transparent font-medium text-[#515251] text-sm placeholder:text-[#b0b0b0]"
          />
        </div>

        {/* To Location */}
        <div className="flex items-center gap-1 px-5 py-3 relative flex-1 rounded-[40px] border w-full border-[#d9d9d9]">
          <HugeiconsIcon icon={PinLocation01Icon} width={20} color="#631CFF" />

          <label
            htmlFor="toLocation"
            className="font-bold text-black text-sm tracking-[0] leading-[normal]"
          >
            To:
          </label>

          <input
            id="toLocation"
            name="toLocation"
            type="text"
            placeholder="Enter location"
            defaultValue="Shimla"
            className="flex-1 border-none focus:outline-none bg-transparent font-medium text-[#515251] text-sm placeholder:text-[#b0b0b0]"
          />
        </div>

        {/* Swap Button */}
        <Button
          className="absolute top-[35%] md:top-[10%] left-1/2 md:left-[280px] -translate-x-1/2 p-3 bg-[#D0F500] rounded-full hover:bg-[#bfe000] transition"
          size="icon"
        >
          <HugeiconsIcon
            icon={ArrowDataTransferVerticalIcon}
            width={20}
            color="#631cff"
            className="align-middle shrink-0"
          />
        </Button>
      </div>

      {/* Date and Passenger Selection */}
      <div className="inline-flex items-center gap-2.5 w-full">
        <Button
          variant="outline"
          className="flex gap-2 md:w-fit w-fullitems-center bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
        >
          <HugeiconsIcon icon={Calendar02Icon} width={20} color="#631CFF" />
          <span className="font-bold text-black text-sm">Tomorrow</span>
        </Button>

        <Button
          variant="outline"
          className="flex gap-2 items-center md:w-fit bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
        >
          <HugeiconsIcon icon={UserGroupIcon} width={20} color="#631CFF" />
          <span className="font-bold text-black text-sm">2 Passenger</span>
        </Button>
      </div>

      {/* Search Button */}
      <Button
        className="inline-flex items-center md:w-fit justify-center gap-1 px-[30px] py-6 rounded-full"
        onClick={handleSearch}
      >
        <HugeiconsIcon icon={Search01Icon} width={20} color="#ffffff" />
        <span className="font-medium text-white text-sm">Search Rides</span>
      </Button>
    </div>
  );
};

export default SearchForm;
