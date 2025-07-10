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
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AuthModal;
