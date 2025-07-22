"use client";

import React, { ReactElement } from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type CustomDatePickerProps = {
  placeholder?: string;
  minDate?: Date;
  selected?: Date | null;
  onChange?: (date: Date | null) => void;
  renderCustomInput?: () => ReactElement;
} & DatePickerProps;
const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selected,
  onChange,
  minDate = new Date(),
  placeholder = "Select date",
  renderCustomInput,
  showTimeSelect=false,
  ...props
}) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      calendarClassName="react-datepicker md:[&>div]:!relative mobile:[&>div]:!fixed mobile:[&>div]:!top-1/2 mobile:[&>div]:!left-1/2 mobile:[&>div]:!-translate-x-1/2 mobile:[&>div]:!-translate-y-1/2 mobile:[&>div]:!w-[90%] mobile:[&>div]:!max-w-[320px] mobile:[&>div]:!z-[9999]"
      className=""
      customInput={renderCustomInput ? renderCustomInput() : undefined}
      showTimeSelect={showTimeSelect}
    />
  );
};

export default CustomDatePicker;
