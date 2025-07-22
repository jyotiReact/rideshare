"use client";

import { Button } from "@/components/ui/button";
import {
  LockPasswordIcon,
  Mail01Icon,
  EyeIcon,
  EyeFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface EmailOptionProps {
  btnLabel: string;
  setAuthData: (data: { email: string; password: string }) => void;
  setShowProfile?: (show: boolean) => void;
}

export const EmailOption = ({
  btnLabel,
  setAuthData,
  setShowProfile = () => {},
}: EmailOptionProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Form validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setAuthData({
        email: values.email,
        password: values.password,
      });
      setShowProfile(true);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4 w-full">
        <form onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm">Email</label>
            <div className="flex gap-2 px-2 py-3 w-full rounded-[40px] border border-[#d9d9d9]">
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
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs pl-3">
                {formik.errors.email}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1 mt-4">
            <label className="font-bold text-sm">Password</label>
            <div className="flex gap-2 px-2 py-3 w-full rounded-[40px] border border-[#d9d9d9] items-center">
              <HugeiconsIcon icon={LockPasswordIcon} width={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="font-light text-sm text-black outline-none border-none bg-transparent flex-1"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <HugeiconsIcon
                  icon={showPassword ? EyeFreeIcons : EyeIcon}
                  width={20}
                  className="text-[#631CFF]"
                />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-xs pl-3">
                {formik.errors.password}
              </div>
            )}
          </div>

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
