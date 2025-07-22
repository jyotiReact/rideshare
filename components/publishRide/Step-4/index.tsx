"use client";

import PublishLayout from "@/components/layout/PublishLayout";
import CustomDatePicker from "@/components/ui/date-picker";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep4Data } from "@/store/rideSlice";
import { RootState } from "@/store/store"; 

const StepFour = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const savedDate = useSelector(
    (state: RootState) => state.ride.step4?.datetime
  );

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (savedDate) {
      setSelectedDate(new Date(savedDate));
    } else {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow);
    }
  }, [savedDate]);

  const handleContinue = () => {
    if (selectedDate) {
      dispatch(setStep4Data({ datetime: selectedDate }));
      router.push("/publish-ride/step-5");
    }
  };

  return (
    <PublishLayout
      stepCount={4}
      title="Date and Time"
      buttons={[
        {
          label: "Continue",
          handleClick: handleContinue,
          variant: "default",
        },
      ]}
    >
      <section className="flex flex-col items-start gap-6 self-stretch w-full">
        {/* DateTime Picker */}
        <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
          <label
            htmlFor="datetime"
            className="relative w-fit mt-[-1.00px] font-bold text-black text-sm"
          >
            Date & Time
          </label>

          <div className="flex items-start gap-[15px] relative self-stretch w-full">
            <CustomDatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy HH:mm"
              renderCustomInput={() => (
                <div className="flex items-center gap-1.5 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                  <HugeiconsIcon icon={Calendar03Icon} width={20} />
                  <input
                    type="text"
                    id="datetime"
                    value={
                      selectedDate
                        ? moment(selectedDate).format("DD/MM/YYYY hh:mm A")
                        : ""
                    }
                    name="datetime"
                    placeholder="DD/MM/YYYY HH:MM"
                    className="bg-transparent outline-none border-none text-[#515251] font-medium text-sm w-full placeholder:text-[#b0b0b0] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                    readOnly
                  />
                </div>
              )}
            />
          </div>
        </div>
      </section>
    </PublishLayout>
  );
};

export default StepFour;
