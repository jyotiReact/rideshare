"use client";

import React from "react";
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
    <div className="flex flex-col w-full bg-neutral-50 overflow-x-hidden py-5 px-20 gap-6">
      <div className="flex flex-col gap-6 mt-6">
        <h2 className="text-3xl font-bold text-[#363636] font-['Plus_Jakarta_Sans',Helvetica] text-center ">
          Find a Ride
        </h2>

        <SearchForm handleSearch={handleSearch} />
      </div>

      <div className="flex flex-col w-full gap-6 mt-6 ">
        <SearchResults />
      </div>
    </div>
  );
};
