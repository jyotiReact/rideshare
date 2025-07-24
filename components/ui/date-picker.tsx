"use client";

import React, { ReactElement, useEffect, useState } from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type CustomDatePickerProps = {
  placeholder?: string;
  minDate?: Date;
  selected?: Date | null;
  onChange?: (date: Date | null) => void;
  renderCustomInput?: () => ReactElement;
  showTimeOnly?: boolean;
} & DatePickerProps;

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selected,
  onChange,
  minDate = new Date(),
  placeholder = "Select date",
  renderCustomInput,
  showTimeSelect = false,
  showTimeOnly = false,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    // If selecting time for today, disable past times
    if (
      selectedDate.getDate() === currentDate.getDate() &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    ) {
      return selectedDate.getTime() >= currentDate.getTime();
    }
    // For future dates, all times are allowed
    return true;
  };

  return (
    <div className="relative">
      <style jsx global>{`
        /* Time picker styling */
        .react-datepicker__time-container {
          width: 300px !important;
        }
        .react-datepicker__time-box {
          width: 300px !important;
          margin: 0 !important;
        }
        .react-datepicker__time-list {
          padding: 0 !important;
          background: white !important;
        }
        .react-datepicker__time-list-item {
          color: #515251 !important;
          font-weight: 500 !important;
          padding: 8px 16px !important;
          &:hover {
            background: #631cff !important;
            color: white !important;
          }
        }
        .react-datepicker__time-list-item--selected {
          background: #631cff !important;
          color: white !important;
          font-weight: 600 !important;
        }
        /* Navigation arrows */
        .react-datepicker__navigation--previous::before,
        .react-datepicker__navigation--next::before {
          border-color: #d0f500 !important;
        }
        /* Disabled time styling */
        .react-datepicker__time-list-item--disabled {
          color: #b0b0b0 !important;
          cursor: not-allowed !important;
        }
        .react-datepicker__time-list-item--disabled:hover {
          background: transparent !important;
          color: #b0b0b0 !important;
        }
      `}</style>

      <DatePicker
        selected={selected}
        onChange={(date: Date | null) => {
          onChange?.(date);
          setIsOpen(false);
        }}
        // @ts-ignore
        selectsRange={false}
        filterTime={filterPassedTime}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        calendarClassName={`
          react-datepicker
          ${showTimeOnly ? "!border-none !shadow-none" : ""}
          ${
            isMobile
              ? `
            [&>div]:!fixed 
            [&>div]:!top-1/2 
            [&>div]:!left-1/2 
            [&>div]:!-translate-x-1/2 
            [&>div]:!-translate-y-1/2 
            [&>div]:!w-[95vw] 
            [&>div]:!max-w-[350px] 
            [&>div]:!z-[9999]
            [&>div]:!mx-auto
            [&>div_.react-datepicker__month-container]:!w-full
          `
              : ""
          }
        `}
        wrapperClassName="w-full"
        className="w-full"
        customInput={renderCustomInput ? renderCustomInput() : undefined}
        showTimeSelect={showTimeSelect || showTimeOnly}
        showTimeSelectOnly={showTimeOnly}
        timeIntervals={15}
        timeCaption="Time"
        minDate={minDate}
        minTime={new Date()} // Minimum selectable time (now)
        maxTime={new Date(new Date().setHours(23, 59, 59, 999))}
        dateFormat={showTimeOnly ? "HH:mm:ss" : "MMM d, yyyy h:mm aa"}
        {...props}
      />

      {/* Mobile overlay - shows for both date and time pickers on mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/5 bg-opacity-30 backdrop-blur-sm z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CustomDatePicker;
