import { HelpCenterSection } from "@/components/dashboard/HelpCenter";
import { RideListing } from "@/components/rideListing";
import React from "react";

export default function SearchRidesPage() {
  return (
    <>
      <RideListing />
      <HelpCenterSection />
    </>
  );
}
