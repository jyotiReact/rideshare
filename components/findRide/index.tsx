"use client";

import React, { JSX } from "react";
import SearchForm from "../searchBar";
import { SearchResults } from "./SearchResult";
import { useRouter } from "next/navigation";

export const FindRide = (): JSX.Element => {
  const router = useRouter();

  function handleSearch() {
    router.push("/rides", {
      scroll: false,
    });
  }
  return (
    <div className="flex flex-col w-full bg-neutral-50 overflow-x-hidden py-5 lg:px-20 px-5 gap-6">
      <div className="flex flex-col gap-6 mt-6">
        <h2 className="text-3xl font-bold text-[#363636]   text-center ">
          Find a Ride
        </h2>

        <p className="block md:hidden text-[#515251] text-center">
          Connect with verified co-travelers going your way. Save money, reduce
          your carbon footprint, and enjoy the journey together.
        </p>

        <SearchForm handleSearch={handleSearch} />
      </div>

      <div className="flex flex-col w-full gap-6 mt-6 ">
        <SearchResults />
      </div>
    </div>
  );
};
