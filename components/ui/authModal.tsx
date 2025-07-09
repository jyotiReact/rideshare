import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";

interface CustomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  // footer?: React.ReactNode;
  children: React.ReactNode;
}

const AuthModal: React.FC<CustomModalProps> = ({
  open,
  onOpenChange,
  children,
  title,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative p-6 space-y-4">
            <div className="flex items-center justify-between w-full px-4 py-3">
              {/* Logo */}
              <img src="/images/logo.png" alt="Logo" width={24} height={24} />

              {/* Title */}
              <Dialog.Title className="text-md font-light text-gray-900 text-center flex-1">
                {title}
              </Dialog.Title>

              {/* Close Icon */}
              <Dialog.Close className="text-gray-500 hover:text-gray-800">
                <X />
              </Dialog.Close>
            </div>

            {/* Content */}
            <div>
              <Dialog.Title className="text-2xl font-semibold text-[#363636] text-center flex-1">
                Welcome to RideShare
              </Dialog.Title>

              {children}
            </div>

            {/* Footer */}
            <div className="pt-4  border-gray-200">
              <p className="font-medium text-[10px] text-[#A2A2A2] text-center">
                <span className="text-[#363636]"> Already a member ?</span>{" "}
                <span className="text-[#631CFF] cursor-pointer">Login</span> using your account
              </p>
              <p className="font-medium text-[10px] text-[#A2A2A2] text-center">
                By proceeding you agree to our Terms of Use and confirm you have
                read our <span className=" cursor-pointer underline" >Privacy and Cookie Statement</span>{" "}
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AuthModal;
