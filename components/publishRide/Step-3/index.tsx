"use client";

import PublishLayout from "@/components/layout/PublishLayout";
import { StepOvers } from "@/components/stepOvers";
import { Checkbox } from "@/components/ui/checkbox";
import { RootState } from "@/store/store";
import { getStopovers } from "@/utils";
import { useRouter } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep3Data } from "@/store/rideSlice";

// Types
type Stopover = {
  name: string;
  selected: boolean;
};

type LocationStep = {
  type: "From" | "Via" | "To";
  location: string;
  hasPin: boolean;
};

interface City {
  name: string;
  selected: boolean;
}

export const StepThree = (): JSX.Element => {
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const [cities, setCities] = useState<Stopover[]>([]);
  const [locations, setLocations] = useState<LocationStep[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const { step1, step3 } = useSelector((state: RootState) => state.ride);

  useEffect(() => {
    if (step1) {
      if (step3?.stopovers) {
        setCities(step3.stopovers);
      } else {
        const initialCities = getStopovers(step1.origin, step1.destination);
        setCities(initialCities);
      }
    }
  }, [step1, step3]);
  console.log(cities);

  const handleCheckboxChange = (cityName: string) => {
    const updatedCities = cities.map((city) =>
      city.name === cityName ? { ...city, selected: !city.selected } : city
    );
    setCities(updatedCities);
  };

  const handleContinue = () => {
    if (!showSteps) {
      // Make sure cities is properly typed as City[]
      const selectedCities = cities.filter((city: City) => city.selected);

      dispatch(
        setStep3Data({
          stopovers: selectedCities,
        })
      );
      setShowSteps(true);

      const newLocations: LocationStep[] = [
        { type: "From", location: step1.origin, hasPin: false },
        ...selectedCities.map((city: City) => ({
          type: "Via" as const,
          location: city.name,
          hasPin: true,
        })),
        { type: "To" as const, location: step1.destination, hasPin: false },
      ];
      setLocations(newLocations);
    } else {
      router.push("/publish-ride/step-4");
    }
  };
  return (
    <PublishLayout
      stepCount={3}
      title="Add Stopovers"
      buttons={[
        {
          label: "Add City",
          handleClick: () => router.push("/publish-ride/step-3/add-city"),
          variant: "twoTone",
        },
        {
          label: "Continue",
          handleClick: handleContinue,
          variant: "default",
        },
      ]}
    >
      {!showSteps ? (
        <section className="flex flex-col items-start self-stretch w-full overflow-auto h-[300px] pl-4">
          {cities.map((city, index) => (
            <div
              key={city.name}
              className={`flex items-center gap-2 px-1 py-3 relative self-stretch w-full ${
                index < cities.length - 1 ? "border-b border-[#e9e9eb]" : ""
              }`}
            >
              <div className="inline-flex items-center gap-2.5">
                <Checkbox
                  checked={city.selected}
                  onCheckedChange={() => handleCheckboxChange(city.name)}
                />
                <div className="inline-flex flex-col items-start justify-center gap-1">
                  <div className="mt-[-1.00px] font-medium text-neutralblackb-600 text-base leading-7">
                    {city.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="flex flex-col items-start self-stretch w-full overflow-auto h-[300px] pl-4">
          <StepOvers steps={locations} />
        </section>
      )}
    </PublishLayout>
  );
};
