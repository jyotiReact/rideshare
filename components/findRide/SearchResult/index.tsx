"use client";

import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon, XIcon } from "lucide-react";
import Link from "next/link";

interface SearchItem {
  route: string;
  date: string;
  passengers: string;
}

export const SearchResults = (): JSX.Element => {
  const recentSearches: SearchItem[] = [
    {
      route: "Chandigarh → Shimla",
      date: "Tomorrow",
      passengers: "2 Passengers",
    },
    {
      route: "Chandigarh → Shimla",
      date: "Tomorrow",
      passengers: "2 Passengers",
    },
    {
      route: "Chandigarh → Shimla",
      date: "Tomorrow",
      passengers: "2 Passengers",
    },
    {
      route: "Chandigarh → Shimla",
      date: "Tomorrow",
      passengers: "2 Passengers",
    },
    {
      route: "Chandigarh → Shimla",
      date: "Tomorrow",
      passengers: "2 Passengers",
    },
    {
      route: "Chandigarh → Shimla",
      date: "Tomorrow",
      passengers: "2 Passengers",
    },
  ];

  return (
    <section className="flex flex-col w-full  items-start gap-[23px] ">
      <h2 className="text-3xl font-bold text-[#363636] [font-family:'Plus_Jakarta_Sans',Helvetica]">
        Recent Searches
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[20px_40px] w-full">
        {recentSearches.map((search, index) => (
          <Link href={`/rides`}>
            <Card
              key={`search-${index}`}
              className="flex  items-center justify-between p-5 bg-white rounded-[20px] border border-solid border-[#f2f1f1] shadow-none"
            >
              <CardContent className="flex items-center justify-between w-full p-0">
                <div className="flex items-center gap-5">
                  <ClockIcon className="w-6 h-6 " />

                  <div className="flex flex-col items-start gap-[5px]">
                    <div className="text-sm font-medium text-black leading-6 whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      {search.route}
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="text-sm font-bold text-black leading-6 whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {search.date}
                      </div>

                      <div className="text-sm font-bold text-black leading-6 whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {search.passengers}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  aria-label="Remove recent search"
                  className="flex items-center justify-center"
                >
                  <XIcon className="w-6 h-6 " />
                </button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
