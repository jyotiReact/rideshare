"use client";
import PublishLayout from "@/components/layout/PublishLayout";
import { PinLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep3Data } from "@/store/rideSlice";
import { RootState } from "@/store/store";

export const AddCity = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { step3 } = useSelector((state: RootState) => state.ride);
  const [newStopover, setNewStopover] = useState("");

  const handleAddStopover = () => {
    if (!newStopover.trim()) return; // Don't add empty stopovers
    
    const updatedStopovers = [
      ...(step3?.stopovers || []), // Existing stopovers
      { 
        name: newStopover.trim(), 
        selected: true // Automatically select new stopovers
      }
    ];

    dispatch(setStep3Data({
      stopovers: updatedStopovers
    }));

    router.push("/publish-ride/step-3");
  };

  return (
    <div className="flex lg:flex-row flex-col w-full items-start lg:gap-0  bg-white h-full">
      <div className="lg:w-[50%] w-full lg:px-16 lg:order-1 order-2">
        <PublishLayout
          stepCount={3}
          title="Add a City"
          buttons={[
            {
              label: "Add",
              handleClick: handleAddStopover,
              variant: "default",
            },
          ]}
        >
          {/* Input field section */}
          <div className="flex flex-col gap-[15px] self-stretch w-full">
            <label className="font-bold text-black text-sm">Stopover</label>
            <div className="flex items-start gap-[15px] relative self-stretch w-full">
              <div className="flex items-center gap-1 px-5 md:py-[18px] py-[10px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                <HugeiconsIcon icon={PinLocation01Icon} width={20} />
                <input
                  type="text"
                  name="stopover"
                  value={newStopover}
                  onChange={(e) => setNewStopover(e.target.value)}
                  placeholder="Enter location"
                  className="flex-1 bg-transparent border-none outline-none [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#515251] text-sm tracking-[0] leading-[normal] placeholder:text-[#b0b0b0]"
                />
              </div>
            </div>
          </div>
        </PublishLayout>
      </div>
      <div className="lg:w-[50%] w-full lg:order-2 order-1 h-[200px] lg:h-full">
        <img
          className="w-full h-full object-fill"
          alt="Map showing route"
          src="/images/map.png"
        />
      </div>
    </div>
  );
};