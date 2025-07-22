"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import OtpInputField from "@/components/ui/otpComponent";
import PhoneNumberInput from "@/components/ui/phoneNumberInput";
import { EditIcon } from "lucide-react";
import { useState } from "react";

interface PhoneOptionProps {
  btnLabel: string;
  setShowProfile?: (show: boolean) => void;
  setAuthData: (data: { phone?: string; otp?: string }) => void;
}

interface UserData {
  phoneNumber: string;
  otp?: string;
}

export const PhoneOption: React.FC<PhoneOptionProps> = ({
  btnLabel,
  setShowProfile = () => {},
  setAuthData,
}) => {
  const [userData, setUserData] = useState<UserData>({
    phoneNumber: "",
  });

  const handleOtpChange = (otp: string) => {
    setAuthData({ phone: userData.phoneNumber, otp });
    setUserData((prev) => ({ ...prev, otp }));
  };

  const handleEdit = () => {
    setUserData((prev) => ({ ...prev, otp: undefined }));
  };

  const handleSendOtp = () => {
    if (!userData.phoneNumber) return;

    setAuthData({ phone: userData.phoneNumber });
    setUserData((prev) => ({ ...prev, otp: "123456" })); // Mock OTP for demo
  };

  const handleContinue = () => {
    if (userData.otp) {
      setShowProfile(true);
    } else {
      handleSendOtp();
    }
  };

  return (
    <CardContent className="flex flex-col gap-8 w-full p-0">
      <div className="flex gap-2 px-2 py-2 w-full rounded-[40px] border border-[#d9d9d9] relative">
        <PhoneNumberInput
          value={userData.phoneNumber}
          onChange={(value: string) =>
            setUserData((prev) => ({ ...prev, phoneNumber: value }))
          }
          buttonClassName="rounded-full border-none"
          placeholder="7986543210"
        />
        <Badge
          className="px-5 py-2.5 cursor-pointer rounded-full font-bold absolute right-1"
          style={{
            backgroundColor: userData?.otp ? "#E7FFE5" : "#D0F500",
            color: userData?.otp ? "#35C329" : "#000000",
          }}
          onClick={!userData?.otp ? handleSendOtp : undefined}
        >
          {userData?.otp ? "OTP Sent" : "Send OTP"}
        </Badge>
      </div>

      {userData?.otp && (
        <div className="flex flex-col gap-4 justify-start w-full">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-sm">Enter 6-Digit OTP</span>
            <Button
              variant="outline"
              className="flex items-center w-fit gap-0.5 px-3 py-2 bg-[#f4efff] text-[#631cff] rounded-[100px] border-none h-auto"
              onClick={handleEdit}
            >
              <span className="font-bold text-xs">Edit Phone</span>
              <EditIcon className="w-3 h-3" />
            </Button>
          </div>
          <OtpInputField
            value={userData.otp}
            onChange={handleOtpChange}
            numInputs={6}
            separator={<span className="mx-1"></span>}
          />
        </div>
      )}

      <Button
        variant="solid"
        className="w-full bg-[#631CFF] hover:bg-[#4e16cc] text-white"
        onClick={handleContinue}
        disabled={!userData.phoneNumber}
      >
        <div className="font-bold text-sm">{btnLabel}</div>
      </Button>
    </CardContent>
  );
};
