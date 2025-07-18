"use client";

import { Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { useCallback, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { PersonalDetail } from "../PersonalDetailModal";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { SendOtpDialog } from "../SendOtp";
import Terms from "@/components/terms&Conditions";

interface LoginOption {
  icon: any;
  text: string;
  isPrimary: boolean;
  type: "icon" | "image";
  handleClick?: () => void;
}

interface LoginOptionModalProps {
  open: boolean;
  title?: string;
  formType?: string;
  switchToLogin?: boolean;
  terms?: boolean;
  footerLoginClick?: () => void;
  onClose?: () => void;
  buttonClick?: string;
  setButtonClick?: (value: string) => void;
}

export const LoginOptionModal: React.FC<LoginOptionModalProps> = ({
  open,
  title,
  formType,
  onClose,
  switchToLogin = false,
  footerLoginClick = () => {},
  terms = true,
  buttonClick,
  setButtonClick = () => {},
}) => {
  const [showPersonalDetailsModal, setShowPersonalDetailsModal] =
    useState(false);
  const [otp, setOtp] = useState("");

  const signUpOptions: LoginOption[] = useMemo(
    () => [
      {
        icon: Mail01Icon,
        text: "Continue with Email",
        isPrimary: true,
        type: "icon",
        handleClick: () => setButtonClick("Email"),
      },
      {
        icon: Call02Icon,
        text: "Continue with Phone",
        isPrimary: false,
        type: "icon",
        handleClick: () => setButtonClick("Phone"),
      },
      {
        icon: "/images/google.svg",
        text: "Continue with Google",
        isPrimary: false,
        type: "image",
        handleClick: () => setButtonClick("google"),
      },
    ],
    [setButtonClick]
  );

  const handleBtnClick = useCallback(() => {
    if (buttonClick === "Email") {
      setShowPersonalDetailsModal(true);
    } else {
      setOtp("123467");
    }
  }, [buttonClick]);

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-[15px] shadow-xl overflow-y-auto">
          <div className="flex items-center justify-between px-5 py-6 border-b border-[#f0f0f0]">
            <div className="p-1 bg-[#631cff] rounded-md">
              <img
                src="/images/Logo.png"
                alt="Logo"
                className="w-[26.31px] h-[26.42px]"
              />
            </div>
            {formType && (
              <span className="text-base font-medium text-black">
                {formType}
              </span>
            )}
            <XIcon className="w-5 h-5 cursor-pointer" onClick={onClose} />
          </div>
          <div className="flex flex-col  gap-6 p-6">
            {title && (
              <h1 className="w-full text-3xl font-medium text-center text-[#353535]">
                {title}
              </h1>
            )}
            {showPersonalDetailsModal && !switchToLogin ? (
              <PersonalDetail />
            ) : (
              <div className="flex flex-col gap-2.5 w-full">
                {!buttonClick ? (
                  signUpOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant={option.isPrimary ? "default" : "outline"}
                      className={`flex items-center justify-between px-5 py-3 w-full rounded-[40px] ${
                        option.isPrimary
                          ? "border-[#631cff] bg-transparent border-2"
                          : ""
                      }`}
                      onClick={option.handleClick}
                    >
                      <div className="flex items-center justify-center w-5 h-5">
                        {option.type === "image" ? (
                          <img
                            src={option.icon}
                            alt="Google icon"
                            className="w-5 h-5"
                          />
                        ) : (
                          <HugeiconsIcon
                            icon={option.icon}
                            width={20}
                            color="black"
                          />
                        )}
                      </div>
                      <span className="text-xs font-medium text-[#353535]">
                        {option.text}
                      </span>
                      <div className="w-5 h-5 opacity-0" />
                    </Button>
                  ))
                ) : (
                  <SendOtpDialog
                    label={buttonClick}
                    type={buttonClick === "Phone" ? "Phone" : "Email"}
                    otp={otp}
                    setOtp={setOtp}
                    submitBtnLabel="Continue"
                    onEditPhone={() => alert("Edit phone clicked")}
                    handleSubmit={
                      buttonClick === "Phone" && otp && !switchToLogin
                        ? () => {
                            setShowPersonalDetailsModal(true);
                            setOtp("");
                          }
                        : handleBtnClick
                    }
                  />
                )}
              </div>
            )}
            <div className="flex flex-col gap-4 w-full">
              <p className="text-xs text-left">
                <span className="font-medium text-[#353535]">
                  {switchToLogin ? "New Member?" : "Already a Member?"}&nbsp;
                </span>
                <span
                  onClick={() => {
                    if (!buttonClick?.length) {
                      footerLoginClick();
                    }
                    setButtonClick("");
                    setShowPersonalDetailsModal(false);
                  }}
                  className="font-bold text-[#631cff] cursor-pointer"
                >
                  {switchToLogin ? "Sign Up" : "Login"}
                </span>
                <span className="font-medium text-[#a2a2a2]">
                  &nbsp;using your account
                </span>
              </p>
              {terms && <Terms />}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
