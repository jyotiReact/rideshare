"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDataTransferHorizontalIcon,
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
    <div className="flex w-full items-start gap-2.5">
      {/* From/To Location Fields */}
      <div className="flex items-center gap-2.5 relative flex-1">
        {/* From Location */}
        <div className="flex items-center gap-1 px-5 py-3 relative flex-1 rounded-[40px] border border-[#d9d9d9]">
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
        <div className="flex items-center gap-1 px-5 py-3 relative flex-1 rounded-[40px] border border-[#d9d9d9]">
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
          variant="outline"
          className="inline-flex items-center gap-2.5 p-2.5 absolute top-1.5 left-[300px] bg-[#d0f500] rounded-[30px] -rotate-90 border-none"
        >
          <HugeiconsIcon
            icon={ArrowDataTransferHorizontalIcon}
            width={20}
            color="#631CFF"
          />
        </Button>
      </div>

      {/* Date and Passenger Selection */}
      <div className="inline-flex items-center gap-2.5">
        <Button
          variant="outline"
          className="flex gap-2 items-center bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
        >
          <HugeiconsIcon icon={Calendar02Icon} width={20} color="#631CFF" />
          <span className="font-bold text-black text-sm">Tomorrow</span>
        </Button>

        <Button
          variant="outline"
          className="flex gap-2 items-center bg-transparent font-medium text-[#515251] text-sm rounded-full py-6"
        >
          <HugeiconsIcon icon={UserGroupIcon} width={20} color="#631CFF" />
          <span className="font-bold text-black text-sm">2 Passenger</span>
        </Button>
      </div>

      {/* Search Button */}
      <Button
        className="inline-flex items-center justify-center gap-1 px-[30px] py-6 rounded-full"
        onClick={handleSearch}
      >
        <HugeiconsIcon icon={Search01Icon} width={20} color="#ffffff" />
        <span className="font-medium text-white text-sm">Search Rides</span>
      </Button>
    </div>
  );
};

export default SearchForm;
