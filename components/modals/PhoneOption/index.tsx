//@ts-nocheck
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import OtpInputField from "@/components/ui/otpComponent";
import PhoneNumberInput from "@/components/ui/phoneNumberInput";
import { EditIcon } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EmailOptionProps } from "@/types";

// Validation schema
const validationSchema = Yup.object({
  phone: Yup.string().required("Phone number is required"),
});

export const PhoneOption = ({
  btnLabel,
  authData,
  setAuthData,
  handleSendOtp = () => {},
  handleContinue = () => {},
}: EmailOptionProps) => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      countryCode: "", // Add country code field
      purePhoneNumber: "", // Add pure phone number field
      otp: "",
    },
    validationSchema,
    onSubmit: (values: any) => {
      // Extract country code and pure phone number before submission
      const submissionValues = {
        ...values,
        countryCode: values.countryCode || "", // Will be set by PhoneNumberInput
        purePhoneNumber: values.phone.replace(values.countryCode, "").trim() // Remove country code
      };

      if (values?.otp) {
        handleContinue(submissionValues);
      } else {
        handleSendOtp(submissionValues);
      }
    },
  });

  return (
    <CardContent className="flex flex-col gap-8 w-full p-0">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 px-2 py-2 w-full rounded-[40px] border border-[#d9d9d9] relative">
            <PhoneNumberInput
              value={formik.values.phone}
              onChange={(value: string, code: string) => {
                formik.setFieldValue("phone", value);
                formik.setFieldValue("countryCode", code.dialCode); // Set country code
              }}
              buttonClassName="rounded-full border-none"
              placeholder="7986543210"
            />
            <Badge
              className="px-5 py-2.5 cursor-pointer rounded-full font-bold absolute right-1"
              style={{
                backgroundColor: authData ? "#E7FFE5" : "#D0F500",
                color: authData ? "#35C329" : "#000000",
              }}
            >
              {authData ? "OTP Sent" : "Send OTP"}
            </Badge>
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-xs pl-2">
              {formik.errors.phone as string}
            </div>
          )}

          {authData && (
            <div className="flex flex-col gap-4 justify-start w-full">
              <div className="flex items-center justify-between w-full">
                <span className="font-bold text-sm">Enter 6-Digit OTP</span>
                <Button
                  variant="outline"
                  className="flex items-center w-fit gap-0.5 px-3 py-2 bg-[#f4efff] text-[#631cff] rounded-[100px] border-none h-auto"
                  onClick={() => {
                    formik.setFieldValue("otp", "");
                    //@ts-ignore
                    setAuthData(null);
                  }}
                  type="button"
                >
                  <span className="font-bold text-xs">Edit Phone</span>
                  <EditIcon className="w-3 h-3" />
                </Button>
              </div>
              <OtpInputField
                value={formik.values.otp}
                onChange={(otp: string) => {
                  formik.setFieldValue("otp", otp);
                }}
                numInputs={6}
                separator={<span className="mx-1"></span>}
              />
            </div>
          )}

          <Button
            variant="solid"
            className="w-full bg-[#631CFF] hover:bg-[#4e16cc] text-white"
            type="submit"
          >
            <div className="font-bold text-sm">{btnLabel}</div>
          </Button>
        </div>
      </form>
    </CardContent>
  );
};