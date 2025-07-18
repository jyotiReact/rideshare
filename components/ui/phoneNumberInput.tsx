"use client";

import React from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface CustomPhoneInputProps extends Partial<PhoneInputProps> {
  value: string;
  onChange: (value: string, data: {}) => void;
  containerClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

const PhoneNumberInput: React.FC<CustomPhoneInputProps> = ({
  value,
  onChange,
  country = "in",
  containerClassName = "!w-full !p-0",
  inputClassName = "!w-full   !pr-4 !py-4 !rounded-[40px] !border-none  focus:!outline-none ",
  buttonClassName = "!bg-transparent !border-none !p-0 !flex !items-center !justify-center !w-4 !h-4 !top-1/2 !-translate-y-1/2 !left-3",
  dropdownClass = "!border-none !shadow-lg !rounded-xl !mt-2",

  ...props
}) => {
  return (
    <div className={containerClassName}>
      <PhoneInput
        country={country}
        value={value}
        onChange={onChange}
        enableSearch
        inputClass={inputClassName}
        buttonClass={buttonClassName}
        dropdownClass={dropdownClass}
        containerClass="!w-full"
        {...props}
      />
    </div>
  );
};

export default PhoneNumberInput;
