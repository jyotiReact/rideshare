"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Ride, SearchItem } from "@/types";
import { DepartureTimeSection } from "../DepartureTime";
import moment from "moment";

interface SearchResultsProps {
  rides: Ride[];
  searchPerformed: boolean;
  searchParams: {
    from: string;
    to: string;
    date: Date | null;
  };
  recentSearches: SearchItem[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  rides,
  searchPerformed,
  searchParams,
  recentSearches,
}) => {
  const { from, to, date } = searchParams;
  
  if (searchPerformed) {
    return (
      <DepartureTimeSection
        rides={rides}
        fromLocation={from}
        toLocation={to}
        date={date}
      />
    );
  }

  return (
    <section className="flex flex-col w-full items-start gap-6">
      <h2 className="text-3xl font-bold text-[#363636]">Recent Searches</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 w-full">
        {recentSearches.map((search, index) => (
          <Link key={`search-${index}`} href={`/rides`}>
            <Card className="flex items-center justify-between p-5 bg-white rounded-[20px] border border-solid border-[#f2f1f1] shadow-none hover:bg-gray-50 transition">
              <CardContent className="flex items-center justify-between w-full p-0">
                <div className="flex items-center gap-5">
                  <ClockIcon className="w-6 h-6" />

                  <div className="flex flex-col items-start gap-1">
                    <div className="text-sm font-medium text-black leading-6">
                      {search.route}
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="text-sm font-bold text-black leading-6">
                        {moment(search.timestamp).format("ddd, D MMMM")}
                      </div>

                      <div className="text-sm font-bold text-black leading-6">
                        {search.passengers}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  aria-label="Remove recent search"
                  className="flex items-center justify-center hover:bg-gray-100 p-1 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Handle remove recent search here
                  }}
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};