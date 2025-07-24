"use client";

import React from "react";
import OtpInput from "react-otp-input";

interface OtpInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  numInputs?: number;
  autoFocus?: boolean;
  separator?: React.ReactNode;
  inputStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const OtpInputField: React.FC<OtpInputFieldProps> = ({
  value,
  onChange,
  numInputs = 6,
  autoFocus = true,
  separator = <span style={{ padding: "0 4px" }}>-</span>,
  inputStyle = {
    width: "3rem",
    height: "3rem",
    fontSize: "1rem",
    borderRadius: "100%",
    border: "2px solid #631CFF",
    textAlign: "center",
  },
  containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    outline: "none",
  },
  ...props
}) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={numInputs}
      shouldAutoFocus={autoFocus}
      inputType="tel"
      renderInput={(props) => (
        <>
          <input
            {...props}
            className=" md:mx-1 mx-0 rounded-full border-2 border-[#631CFF] outline-none otp-input "
            style={{
              ...props.style,
              textAlign: "center",
              MozAppearance: "textfield",
              WebkitAppearance: "none",
              appearance: "textfield",
            }}
          />

          {(props as any).index !== numInputs - 1 && separator}
        </>
      )}
      inputStyle={inputStyle}
      containerStyle={containerStyle}
      {...props}
    />
  );
};

export default OtpInputField;
