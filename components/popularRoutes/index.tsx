"use client";

import React from "react";
import { Routes } from "./Routes";

export const PopularRoutes = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-neutral-50 overflow-x-hidden py-5 px-20 gap-6">
      <div className="flex flex-col gap-6 mt-6">
        <h2 className="text-3xl font-bold text-[#363636]   text-center ">
          Popular Routes
        </h2>
      </div>

      <div className="flex flex-col w-full gap-6 mt-6 ">
        <Routes />
      </div>
    </div>
  );
};
