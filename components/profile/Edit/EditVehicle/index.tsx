// @ts-nocheck

"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { BookingLayout } from "@/components/layout/BookingLayout";
import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, Palette } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, updateVehicle } from "@/store/profileSlice";
import { useParams, useRouter } from "next/navigation";
import { vehicleBrands, vehicleType } from "@/constants/appConstants";
import { getApi, postApi } from "@/services/userService";
import { useEffect, useState } from "react";

// Default color options
const defaultColors = [
  "#FF0000",
  "#0000FF",
  "#008000",
  "#000000",
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#FFFF00",
];

// Validation Schema
const vehicleSchema = Yup.object().shape({
  brand: Yup.string().required("Brand is required"),
  type: Yup.string().required("Type is required"),
  model: Yup.string().required("Model is required"),
  color: Yup.string().required("Color is required"),
  number: Yup.string()
    .required("Vehicle number is required")
    .matches(/^[A-Za-z0-9]+$/, "Invalid vehicle number"),
});

export const EditVehicle = () => {
  const router = useRouter();
  const { id } = useParams<{ id?: string }>();
  const vehiclesFromRedux = useSelector(
    (state: any) => state.profile.vehicles || []
  );
  const [fetchedVehicle, setFetchedVehicle] = useState<any>(null);

  // Keep this version
  async function handleGetVehicles() {
    try {
      const response = await getApi<{ data: any; message: string }>(
        "/vehicle/list",
        {
          params: { id: id[0] },
        }
      );
      if (response?.data) {
        setFetchedVehicle(response.data.data); // Assuming response.data is the vehicle object
      }
    } catch (error) {
      console.error("Failed to get vehicles:", error);
    }
  }

  // Use only this in useEffect
  useEffect(() => {
    handleGetVehicles();
  }, []);

  const formik = useFormik({
    enableReinitialize: true, // Important for dynamic initialValues
    initialValues: {
      brand:
        (fetchedVehicle?.brand &&
          vehicleBrands.find((b) => b.id === fetchedVehicle.brand)?.id) ||
        "",
      type:
        (fetchedVehicle?.vehicleType &&
          vehicleType.find(
            (b) => b.id === fetchedVehicle.vehicleType.toString()
          )?.id) ||
        "",
      model: fetchedVehicle?.model || "",
      color: fetchedVehicle?.color || "",
      number: fetchedVehicle?.registrationNumber || "",
    },
    validationSchema: vehicleSchema,
    onSubmit: async (values) => {
      try {
        const response = await postApi<{ message: string }>(
          "/vehicle/addEditVehicle",
          {
            ...(id && { vehicleId: id[0] }),
            vehicleType: values.type,
            brand: values.brand,
            model: values.model,
            registrationNumber: values.number,
            color: values.color,
          }
        );
        if (response) {
          router.push("/profile");
        }
      } catch (error) {
        console.error("Failed to send OTP:", error);
      }
    },
  });

  const availableModels =
    vehicleBrands.find((brand) => brand.id === formik.values.brand)?.models ||
    [];

  const getColorName = (hex: string): string => {
    const colorMap: Record<string, string> = {
      "#FF0000": "Red",
      "#0000FF": "Blue",
      "#008000": "Green",
      "#000000": "Black",
      "#FFFFFF": "White",
      "#C0C0C0": "Silver",
      "#808080": "Gray",
      "#FFFF00": "Yellow",
    };
    return colorMap[hex.toUpperCase()] || "Custom Color";
  };

  return (
    <BookingLayout
      title={id ? "Edit vehicle" : "Add a vehicle"}
      description={
        id ? "Edit your vehicle details" : "Add Vehicle that you travel in"
      }
    >
      <form
        onSubmit={formik.handleSubmit}
        className="inline-flex flex-col items-start justify-center gap-5 lg:w-[785px] w-full"
      >
        <Card className="w-full border border-solid border-[#F2F2F2] rounded-[10px]">
          <CardContent className="flex flex-col items-start gap-[30px] lg:px-10 py-5 px-5">
            <h1 className="font-bold text-[#353535] lg:text-4xl text-[24px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              {id ? "Edit Vehicle" : "Vehicle Details"}
            </h1>

            {/* Brand and Type Row */}
            <div className="grid grid-cols-2 gap-5 w-full">
              {/* Brand Select */}
              <div className="flex flex-col w-full items-start gap-[15px]">
                <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  What's your vehicle's brand?
                </label>
                <Select
                  name="brand"
                  value={formik.values.brand}
                  onValueChange={(value) => {
                    formik.setFieldValue("brand", value);
                    formik.setFieldValue("model", ""); // Reset model when brand changes
                  }}
                >
                  <SelectTrigger className="w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent className="rounded-[10px] border border-[#F2F2F2]">
                    {vehicleBrands.map((brand) => (
                      <SelectItem
                        key={brand.id}
                        value={brand.id}
                        className="py-3 px-5 hover:bg-[#631CFF]/10"
                      >
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formik.touched.brand && formik.errors.brand && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.brand}
                  </div>
                )}
              </div>

              {/* Type Select */}
              <div className="flex flex-col w-full items-start gap-[15px]">
                <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  What's your vehicle's Type?
                </label>
                <Select
                  name="type"
                  value={formik.values.type.toString()} // Convert to string for comparison
                  onValueChange={(value) =>
                    formik.setFieldValue("type", parseInt(value))
                  } // Convert back to number
                >
                  <SelectTrigger className="w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-[10px] border border-[#F2F2F2]">
                    {vehicleType.map((type) => (
                      <SelectItem
                        key={type.id}
                        value={type.id.toString()} // Convert to string
                        className="py-3 px-5 hover:bg-[#631CFF]/10"
                      >
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formik.touched.type && formik.errors.type && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.type}
                  </div>
                )}
              </div>
            </div>

            {/* Model and Color Row */}
            <div className="flex flex-col md:flex-row items-start gap-[30px] w-full">
              {/* Model Select */}
              <div className="flex flex-col items-start gap-[15px] flex-1 w-full">
                <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Vehicle model
                </label>
                <Select
                  name="model"
                  value={formik.values.model}
                  onValueChange={(value) =>
                    formik.setFieldValue("model", value)
                  }
                  disabled={!formik.values.brand}
                >
                  <SelectTrigger className="w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]">
                    <SelectValue
                      placeholder={
                        formik.values.brand
                          ? "Select model"
                          : "Select brand first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className="rounded-[10px] border border-[#F2F2F2]">
                    {availableModels.map((model) => (
                      <SelectItem
                        key={model}
                        value={model}
                        className="py-3 px-5 hover:bg-[#631CFF]/10"
                      >
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formik.touched.model && formik.errors.model && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.model}
                  </div>
                )}
              </div>

              {/* Color Picker */}
              <div className="flex flex-col items-start gap-[15px] flex-1 w-full">
                <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Vehicle color
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9] justify-between",
                        !formik.values.color && "text-muted-foreground"
                      )}
                    >
                      {formik.values.color ? (
                        <div className="flex items-center gap-2">
                          <div
                            className="w-5 h-5 rounded-full border"
                            style={{ backgroundColor: formik.values.color }}
                          />
                          {getColorName(formik.values.color)}
                        </div>
                      ) : (
                        "Select color"
                      )}
                      <Palette className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4 rounded-[10px] border border-[#F2F2F2]">
                    <div className="flex flex-col gap-4">
                      <HexColorPicker
                        color={formik.values.color || "#FFFFFF"}
                        onChange={(color) =>
                          formik.setFieldValue("color", color)
                        }
                        className="!w-full !h-[200px]"
                      />
                      <div className="grid grid-cols-8 gap-2">
                        {defaultColors.map((color) => (
                          <button
                            key={color}
                            type="button"
                            className={cn(
                              "h-8 w-8 rounded-full border cursor-pointer flex items-center justify-center",
                              formik.values.color === color &&
                                "ring-2 ring-[#631CFF]"
                            )}
                            style={{ backgroundColor: color }}
                            onClick={() => formik.setFieldValue("color", color)}
                          >
                            {formik.values.color === color && (
                              <Check className="h-3 w-3 text-white" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                {formik.touched.color && formik.errors.color && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.color}
                  </div>
                )}
              </div>
            </div>

            {/* Vehicle Number Input */}
            <div className="flex flex-col w-full items-start gap-[15px]">
              <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Vehicle Number
              </label>
              <Input
                name="number"
                className="w-full py-[22px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]"
                placeholder="Enter vehicle number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.number && formik.errors.number && (
                <div className="text-red-500 text-xs">
                  {formik.errors.number}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Button
          type="submit"
          className={cn(
            "w-full py-5 rounded-[40px] font-semibold text-base [font-family:'Plus_Jakarta_Sans',Helvetica] tracking-[-0.13px] leading-[22.4px]",
            id
              ? "bg-[#631CFF] text-white"
              : "bg-[#631cff1a] text-[#631CFF] border-none"
          )}
          disabled={formik.isSubmitting}
        >
          {id ? "Save" : "Add New vehicle"}
        </Button>
      </form>
    </BookingLayout>
  );
};
