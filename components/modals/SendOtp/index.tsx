import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import OtpInputField from "@/components/ui/otpComponent";
import PhoneNumberInput from "@/components/ui/phoneNumberInput";
import { LockPasswordIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { EditIcon } from "lucide-react";
import { memo, useCallback, useState } from "react";

interface SendOtpDialogProps {
  title?: string;
  phoneNumber?: string;
  countryCode?: string;
  flagUrl?: string;
  otpSent?: boolean;
  onEditPhone?: () => void;
  handleSubmit?: () => void;
  onClose?: () => void;
  type?: "Phone" | "Email" | "Google" | "";
  label?: string;
  submitBtnLabel?: string;
  otp?: string;
  setOtp?: (otp: string) => void;
}


export const SendOtpDialog: React.FC<SendOtpDialogProps> =memo(({
  type,
  label,
  submitBtnLabel,
  handleSubmit,
  otp,
  setOtp = () => {},
}) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = useCallback((value: string, data: {}) => {
    setPhone(value);
  }, []);

  const handleEdit = useCallback(() => setOtp(""), [setOtp]);

  return (
    <CardContent className="flex flex-col gap-8 w-full p-0">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 w-full">
          <label className="font-bold text-sm">{label}</label>
          <div className="relative flex items-center w-full">
            {type === "Email" ? (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-2 px-2 py-3 w-full rounded-[40px] border border-[#d9d9d9]">
                  <HugeiconsIcon icon={Mail01Icon} width={20} />
                  <input
                    type="email"
                    placeholder="@gmail.com"
                    className="font-light text-sm text-black placeholder:text-[#cfcfcf] outline-none border-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-sm">Password</label>
                  <div className="flex gap-2 px-2 py-3 w-full rounded-[40px] border border-[#d9d9d9]">
                    <HugeiconsIcon icon={LockPasswordIcon} width={20} />
                    <input
                      type="password"
                      className="font-light text-sm text-black outline-none border-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 px-2 py-2 w-full rounded-[40px] border border-[#d9d9d9]">
                <PhoneNumberInput
                  value={phone}
                  onChange={handlePhoneChange}
                  buttonClassName="rounded-full border-none"
                  placeholder="7986543210"
                />
              </div>
            )}
            {type === "Phone" && (
              <Badge
                className="px-5 py-2.5 cursor-pointer rounded-full font-bold absolute right-1"
                style={{ backgroundColor: otp?.length ? "#E7FFE5" : "#D0F500", color: otp?.length ? "#35C329" : "#000000" }}
              >
                {otp?.length ? "Otp Sent" : "Send Otp"}
              </Badge>
            )}
          </div>
        </div>
        {otp && (
          <div className="flex flex-col gap-4 justify-start w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-medium text-sm">Enter 6-Digit Otp</span>
              <Button
                variant="outline"
                className="flex items-center gap-0.5 px-3 py-2 bg-[#f4efff] text-[#631cff] rounded-[100px] border-none h-auto"
                onClick={handleEdit}
              >
                <span className="font-bold text-xs">Edit {type}</span>
                <EditIcon className="w-3 h-3" />
              </Button>
            </div>
            <OtpInputField
              value={otp}
              onChange={setOtp}
              numInputs={6}
              separator={<span className="mx-1"></span>}
            />
          </div>
        )}
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full py-3 bg-[#631cff] rounded-[25px] font-medium text-sm tracking-tight"
      >
        {submitBtnLabel}
      </Button>
    </CardContent>
  );
});