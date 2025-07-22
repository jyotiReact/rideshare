"use client";
import React, { JSX, useState } from "react";
import { YourBookingsSection } from "./YourBookings";
import { Message01Icon, Notification01Icon } from "@hugeicons/core-free-icons";
import RideListCard from "../RideListCard";
import { TabsComponent } from "../tabs"
import { useRouter } from "next/navigation";
import { allRides } from "@/settings";


export const YourRides = (): JSX.Element => {
  const [tab, setTab] = useState("published");
  const router = useRouter();
  const tabOptions = [
    {
      id: "published",
      label: "Published Rides",
      icon: Message01Icon,
    },
    {
      id: "bookings",
      label: "Your Bookings",
      icon: Notification01Icon,
    },
  ];
  return (
    <div className="flex flex-col w-full py-10 px-2">
      <TabsComponent
        title="Your Rides"
        tabOptions={tabOptions}
        handleTabClick={(tab) => setTab(tab)}
      />
      <div className="flex  mt-8">
        <div className="lg:w-4/5 w-full ">
          {tab === "published" ? (
            <YourBookingsSection />
          ) : (
            <div className="flex flex-col  gap-5 w-full">
              {allRides?.map((ride) => {
                return (
                  <RideListCard
                    key={ride.id}
                    ride={ride}
                    btnLabel="View Details"
                    handleCardClick={() => router.push(`/request-details`)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
