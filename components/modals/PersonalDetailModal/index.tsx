"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronDownIcon } from "lucide-react";
import React, { useCallback } from "react";

// Types

interface OtpInput {
  value: string;
  filled: boolean;
}

interface PersonalDetailProps {
  formData?: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
}

// Memoized PersonalDetail Component
export const PersonalDetail: React.FC<PersonalDetailProps> = React.memo(
  ({
    formData = {
      firstName: "Prashant",
      lastName: "Sharma",
      dateOfBirth: "11/05/2001",
    },
  }) => {
    const handleSave = useCallback(() => {
      console.log("Save");
    }, []);

    return (
      <div className="flex flex-col">
        <form className="flex flex-col  gap-8 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-semibold text-xs text-[#353535] font-['Plus_Jakarta_Sans']">
                  First Name
                </label>
                <Input
                  className="h-11 px-5 rounded-[25px] border border-[#c4c1c1] font-['Plus_Jakarta_Sans'] font-medium text-xs focus:ring-0"
                  defaultValue={formData.firstName}
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-semibold text-xs text-[#353535] font-['Plus_Jakarta_Sans']">
                  Last Name
                </label>
                <Input
                  className="h-11 px-5 rounded-[25px] border border-[#c4c1c1] font-['Plus_Jakarta_Sans'] font-medium text-xs"
                  defaultValue={formData.lastName}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold text-xs text-[#353535] font-['Plus_Jakarta_Sans']">
                Date of Birth
              </label>
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-[25px] border border-[#c4c1c1]">
                <HugeiconsIcon
                  icon={Calendar03Icon}
                  width={20}
                  color="#631CFF"
                />
                <span className="font-['Plus_Jakarta_Sans'] font-medium text-xs">
                  {formData.dateOfBirth}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold text-xs text-[#353535] font-['Plus_Jakarta_Sans']">
                Gender
              </label>
              <Select>
                <SelectTrigger className="h-11 pl-5 pr-2 rounded-[40px] font-['Plus_Jakarta_Sans'] font-medium text-sm">
                  <SelectValue placeholder="Gender" />
                  <div className="absolute right-0 p-2 bg-[#d0f500] rounded-full cursor-pointer">
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={handleSave}
            className="w-full py-3 bg-[#631cff] rounded-[25px] font-medium text-sm tracking-tight"
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
);
