"use client";
import PublishLayout from "@/components/layout/PublishLayout";
import { Button } from "@/components/ui/button";
import { PinLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep1Data } from "@/store/rideSlice";
import { RootState } from "@/store/store";

export const StepOne = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  // Get stored data from Redux
  const { step1 } = useSelector((state: RootState) => state.ride);
  
  const [addresses, setAddresses] = useState({
    origin: step1?.origin || "Chandigarh", 
    destination: step1?.destination || "Shimla", 
  });

  useEffect(() => {
    if (step1) {
      setAddresses({
        origin: step1.origin || "Chandigarh", 
        destination: step1.destination || "Shimla", 
      });
    }
  }, [step1]);

  const handleInputChange = (
    field: "origin" | "destination",
    value: string
  ) => {
    setAddresses((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContinue = () => {
    // Save all step1 data in one dispatch
    dispatch(
      setStep1Data({
        origin: addresses.origin,
        destination: addresses.destination,
      })
    );
    router.push("/publish-ride/step-2");
  };

  const addressFields = [
    {
      label: "Origin",
      placeholder: "Enter full address",
      field: "origin" as const,
      value: addresses.origin,
    },
    {
      label: "Destination",
      placeholder: "Enter full address",
      field: "destination" as const,
      value: addresses.destination,
    },
  ];

  return (
    <PublishLayout
      stepCount={1}
      title="Publish a ride"
      buttons={[
        {
          label: "Continue",
          handleClick: handleContinue,
          variant: "default",
        },
      ]}
    >
      <div className="flex flex-col gap-10 w-full">
        {addressFields.map((field, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-[15px] relative self-stretch w-full"
          >
            <label className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
              {field.label}
            </label>
            <div className="flex items-center gap-[15px] relative w-full">
              <div className="flex items-start gap-[15px] relative self-stretch w-full">
                <div className="flex items-center gap-1 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                  <HugeiconsIcon icon={PinLocation01Icon} width={20} />
                  <input
                    type="text"
                    name={field.field}
                    value={field.value}
                    onChange={(e) =>
                      handleInputChange(field.field, e.target.value)
                    }
                    placeholder={field.placeholder}
                    className="flex-1 bg-transparent border-none outline-none [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal] placeholder:text-[#b0b0b0]"
                  />
                </div>
              </div>
              <Button className="inline-flex items-center justify-center w-[50px] h-[50px] rounded-full">
                <HugeiconsIcon icon={PinLocation01Icon} color="white" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </PublishLayout>
  );
};