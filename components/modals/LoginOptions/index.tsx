// @ts-nocheck

"use client";

import { Button } from "@/components/ui/button";
import { Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LoginOptionsProps {
  setButtonClick: (value: string) => void;
  buttonClick: string;
}

export const LoginOptions = ({
  setButtonClick,
  buttonClick,
  handleGoogleLogin,
}: LoginOptionsProps) => {
  const [visuallyActive, setVisuallyActive] = useState<string>("Email");
  const router = useRouter();

  const signUpOptions = [
    {
      icon: Mail01Icon,
      text: "Continue with Email",
      type: "icon",
      value: "Email",
      handleButtonClick: () => {
        setButtonClick("Email");
        setVisuallyActive("Email");
      },
    },
    {
      icon: Call02Icon,
      text: "Continue with Phone",
      type: "icon",
      value: "Phone",
      handleButtonClick: () => {
        setButtonClick("Phone");
        setVisuallyActive("Phone");
      },
    },
    {
      icon: "/images/google.svg",
      text: "Continue with Google",
      type: "image",
      value: "Google",
      handleButtonClick: async () => {
        await handleGoogleLogin();
        setButtonClick("Phone");
        setVisuallyActive("Google");
      },
    },
  ];

  return (
    <div className="space-y-3">
      {signUpOptions.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          onClick={option.handleButtonClick}
          className={`w-full flex justify-between items-center text-black rounded-full py-3 px-5 ${
            visuallyActive === option.value
              ? "border-2 border-[#631CFF] text-black"
              : "border border-gray-400"
          } transition-colors duration-200`}
        >
          {option.type === "image" ? (
            <Image
              src={option.icon}
              width={20}
              height={20}
              alt="Google icon"
              className="w-5 h-5"
            />
          ) : (
            <HugeiconsIcon icon={option.icon} width={20} />
          )}
          <span className="text-sm font-medium">{option.text}</span>
          <span className="w-5 h-5" />
        </Button>
      ))}
    </div>
  );
};
