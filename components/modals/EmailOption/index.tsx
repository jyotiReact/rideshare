"use client";

import { Button } from "@/components/ui/button";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import OtpInputField from "@/components/ui/otpComponent";
import { Badge } from "@/components/ui/badge";
import { EditIcon } from "lucide-react";
import { EmailOptionProps } from "@/types";

export const EmailOption = ({
  btnLabel,
  handleSendOtp = () => {},
  authData,
  setAuthData,
  handleContinue = () => {},
}: EmailOptionProps) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: authData?.email || "",
      otp: authData?.otp || "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values?.otp) {
        handleContinue();
      } else {
        handleSendOtp(values);
      }
    },
  });

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4 w-full">
        <form onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <div className="flex flex-col gap-1 relative">
            <label className="font-bold text-sm">Email</label>
            <div className="flex gap-2 px-2 py-3 w-full rounded-[40px] border border-[#d9d9d9] relative">
              <HugeiconsIcon icon={Mail01Icon} width={20} />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="font-light text-sm text-black placeholder:text-[#cfcfcf] outline-none border-none bg-transparent flex-1"
              />
              <Badge
                className="px-5 py-2.5 cursor-pointer rounded-full font-bold absolute top-1 right-1"
                style={{
                  backgroundColor: authData?.otp ? "#E7FFE5" : "#D0F500",
                  color: authData?.otp ? "#35C329" : "#000000",
                }}
              >
                {authData.otp ? "OTP Sent" : "Send OTP"}
              </Badge>
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs pl-3">
                {formik.errors.email}
              </div>
            )}
          </div>

          {/* OTP Field */}
          {authData?.otp && (
            <div className="flex flex-col gap-4  w-full mt-4 ">
              <div className="flex items-center justify-between w-full">
                <span className="font-bold text-sm">Enter 6-Digit OTP</span>
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center w-fit gap-0.5 px-3 py-2 bg-[#f4efff] text-[#631cff] rounded-[100px] border-none h-auto"
                  onClick={() => {
                    formik.setFieldValue("otp", "");
                    //@ts-ignore
                    setAuthData({ ...authData, otp: "" });
                  }}
                >
                  <span className="font-bold text-xs">Edit Email</span>
                  <EditIcon className="w-3 h-3" />
                </Button>
              </div>
              <div className="w-full">
                <OtpInputField
                  value={formik.values.otp}
                  onChange={(otp) => formik.setFieldValue("otp", otp)}
                  numInputs={6}
                  separator={<span className="mx-1" />}  
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="solid"
            className="w-full bg-[#631CFF] hover:bg-[#4e16cc] text-white mt-6 transition-colors duration-200"
          >
            <div className="font-bold text-sm">{btnLabel}</div>
          </Button>
        </form>
      </div>
    </div>
  );
};
