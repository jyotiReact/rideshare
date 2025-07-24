"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import Terms from "@/components/terms&Conditions";
import Image from "next/image";
import React, { ReactNode } from "react";

interface AuthModalProps {
  open: boolean;
  title?: string;
  formType?: string;
  onClose: () => void;
  terms?: boolean;
  renderComponent: ReactNode;
  switchForm?: () => void;
  switchToLogin?: boolean;
  loginText?: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  open,
  title,
  formType,
  onClose,
  terms,
  renderComponent,
  switchForm,
  switchToLogin,
  loginText = true,
}) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-[15px] shadow-xl overflow-y-auto max-h-[90vh]">
          <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-[#f0f0f0]">
            <div className="p-1 bg-[#631cff] rounded-md">
              <Image
                src="/images/Logo.png"
                alt="RideShare Logo"
                width={26.31}
                height={26.42}
                className="w-[26.31px] h-[26.42px]"
              />
            </div>
            {formType && (
              <span className="text-base font-medium text-black">
                {formType}
              </span>
            )}
            <Dialog.Close asChild>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
          <div className="flex flex-col gap-6 p-6">
            {title && (
              <h1 className="w-full md:text-3xl text-[24px] font-medium text-center text-[#353535]">
                {title}
              </h1>
            )}
            {renderComponent}

            <div className="flex flex-col gap-4 w-full">
              {loginText && (
                <p className="text-xs text-left">
                  <span className="font-medium text-[#353535]">
                    {switchToLogin ? "New Member?" : "Already a Member?"}&nbsp;
                  </span>
                  <button
                    type="button"
                    className="font-bold text-[#631cff] hover:text-[#4e16cc] focus:outline-none"
                    onClick={switchForm}
                  >
                    {switchToLogin ? "Sign Up" : "Login"}
                  </button>
                  <span className="font-medium text-[#a2a2a2]">
                    &nbsp;using your account
                  </span>
                </p>
              )}
              {terms && <Terms />}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
