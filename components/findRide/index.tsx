"use client";

import React, { useState, useEffect, useCallback } from "react";
import SearchForm from "../searchBar";
import { SearchResults } from "./SearchResult";
import { useSearchParams } from "next/navigation";
import { allRides } from "@/settings";
import { SearchItem } from "@/types";

const DEFAULT_FROM = "Chandigarh";
const DEFAULT_TO = "Shimla";
const DEFAULT_PASSENGERS = 2;

interface SearchParams {
  from: string;
  to: string;
  date: Date | null;
  passengers: number;
}

export const FindRide = () => {
  const searchParams = useSearchParams();

  const [searchParamsObj, setSearchParamsObj] = useState<SearchParams>({
    from: searchParams.get("from") || DEFAULT_FROM,
    to: searchParams.get("to") || DEFAULT_TO,
    date: searchParams.get("date")
      ? new Date(searchParams.get("date")!)
      : (() => {
          const t = new Date();
          t.setDate(t.getDate() + 1);
          return t;
        })(),
    passengers: searchParams.get("passengers")
      ? parseInt(searchParams.get("passengers")!)
      : DEFAULT_PASSENGERS,
  });

  const [activeSearchQuery, setActiveSearchQuery] = useState<{
    from: string;
    to: string;
  } | null>(null);

  const [searchPerformed, setSearchPerformed] = useState(
    searchParams.has("from") || false
  );
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);

  const formatDateDisplay = useCallback((date: Date | null): string => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }, []);

  useEffect(() => {
    if (searchParams.get("from")) {
      handleSearch();
    }
  }, [searchParams]);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches));
      } catch (e) {
        console.error("Failed to parse recent searches", e);
      }
    }
  }, []);

  const filteredRides = React.useMemo(() => {
    if (!activeSearchQuery) return [];

    const fromLower = activeSearchQuery.from.toLowerCase();
    const toLower = activeSearchQuery.to.toLowerCase();

    return allRides.filter(
      (ride) =>
        ride.from.toLowerCase().includes(fromLower) &&
        ride.to.toLowerCase().includes(toLower)
    );
  }, [activeSearchQuery]);

  const handleSearch = useCallback(() => {
    setSearchPerformed(true);
    setActiveSearchQuery({
      from: searchParamsObj.from,
      to: searchParamsObj.to,
    });

    const newSearch: SearchItem = {
      route: `${searchParamsObj.from} → ${searchParamsObj.to}`,
      date: formatDateDisplay(searchParamsObj.date),
      passengers: `${searchParamsObj.passengers} Passenger${
        searchParamsObj.passengers !== 1 ? "s" : ""
      }`,
      timestamp: Date.now(),
    };

    setRecentSearches((prev) => {
      const updated = [
        newSearch,
        ...prev
          .filter(
            (search) =>
              search.route !== newSearch.route || search.date !== newSearch.date
          )
          .slice(0, 4),
      ];
      localStorage.setItem("recentSearches", JSON.stringify(updated));
      return updated;
    });
  }, [searchParamsObj, formatDateDisplay]);

  return (
    <div className="flex flex-col w-full bg-neutral-50 overflow-x-hidden py-5 lg:px-20 px-5 gap-6">
      <div className="flex flex-col gap-6 mt-6">
        <h2 className="text-3xl font-bold text-[#363636] text-center">
          Find a Ride
        </h2>

        <p className="block md:hidden text-[#515251] text-center">
          Connect with verified co-travelers going your way. Save money, reduce
          your carbon footprint, and enjoy the journey together.
        </p>

        <SearchForm
          searchParams={searchParamsObj}
          setSearchParams={setSearchParamsObj}
          handleSearch={handleSearch}
        />
      </div>

      <div className="flex flex-col w-full gap-6 mt-6">
        <SearchResults
          rides={filteredRides}
          searchPerformed={searchPerformed}
          searchParams={searchParamsObj}
          recentSearches={recentSearches}
        />
      </div>
    </div>
  );
};
