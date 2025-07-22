"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import CustomDatePicker from "@/components/ui/date-picker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setPersonalDetails } from "@/store/authslice";

// Validation Schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
 
});
// Type for the authData prop
interface AuthData {
  email?: string;
  phone?: string;
  password?: string;
  otp?: string;
  // Add other auth-related properties you might have
}

export const PersonalDetailModal = ({ authData } : { authData: AuthData } ) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Format date before dispatching
      const formattedValues = {
        ...values,
        dateOfBirth: moment(values.dateOfBirth).format("YYYY-MM-DD"),
      };

    //@ts-ignore
      dispatch(setPersonalDetails({formattedValues,...authData}));

    },
  });

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col gap-8 w-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-4 w-full">
          {/* First Name & Last Name */}
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold text-[12px] text-[#353535]">
                First Name
              </label>
              <Input
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-11 px-5 rounded-[25px] border border-[#c4c1c1] font-['Plus_Jakarta_Sans'] font-medium text-xs focus:ring-0"
                placeholder="First Name"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-xs pl-3">
                  {formik.errors.firstName}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold text-[12px] text-[#353535] font-['Plus_Jakarta_Sans']">
                Last Name
              </label>
              <Input
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-11 px-5 rounded-[25px] border border-[#c4c1c1] font-['Plus_Jakarta_Sans'] font-medium text-xs"
                placeholder="Last Name"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-xs pl-3">
                  {formik.errors.lastName}
                </div>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-[12px] text-[#353535] font-['Plus_Jakarta_Sans']">
              Date of Birth
            </label>
            <CustomDatePicker
              selected={formik.values.dateOfBirth}
              onChange={(date) => formik.setFieldValue("dateOfBirth", date)}
              dateFormat="dd/MM/yyyy"
              renderCustomInput={() => (
                <div className="flex items-center gap-1.5 px-5 py-[18px] relative flex-1 grow rounded-[40px] border border-solid border-[#d9d9d9]">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    width={20}
                    color="#631CFF"
                  />
                  <input
                    type="text"
                    value={
                      formik.values.dateOfBirth
                        ? moment(formik.values.dateOfBirth).format("DD/MM/YYYY")
                        : ""
                    }
                    placeholder="DD/MM/YYYY"
                    className="bg-transparent outline-none border-none text-[#515251] font-medium text-sm w-full placeholder:text-[#b0b0b0] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                    readOnly
                  />
                </div>
              )}
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-[12px] text-[#353535] font-['Plus_Jakarta_Sans']">
              Gender
            </label>
            <Select
              value={formik.values.gender}
              onValueChange={(value) => formik.setFieldValue("gender", value)}
            >
              <SelectTrigger className="h-11 pl-5 pr-2 rounded-[40px] font-['Plus_Jakarta_Sans'] font-medium text-sm">
                <SelectValue placeholder="Gender" />
                <div className="absolute right-6 p-2 bg-[#d0f500] rounded-full cursor-pointer">
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full py-3 bg-[#631cff] rounded-[25px] font-medium text-sm tracking-tight"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          Save
        </Button>
      </form>
    </div>
  );
};
