"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import React, { JSX, useState } from "react";
import { Input } from "@/components/ui/input";
import { BookingLayout } from "@/components/layout/BookingLayout";
import { HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, Palette } from "lucide-react";
import { useDispatch } from "react-redux";
import { addVehicle, updateVehicle } from "@/store/profileSlice";

// Sample vehicle data
const vehicleBrands = [
  { id: "toyota", name: "Toyota", models: ["Corolla", "Camry", "RAV4", "Prius"] },
  { id: "honda", name: "Honda", models: ["Civic", "Accord", "CR-V", "Pilot"] },
  { id: "ford", name: "Ford", models: ["F-150", "Mustang", "Explorer", "Escape"] },
  { id: "bmw", name: "BMW", models: ["3 Series", "5 Series", "X5", "X3"] },
  { id: "mercedes", name: "Mercedes-Benz", models: ["C-Class", "E-Class", "GLC", "S-Class"] },
];

// Default color options
const defaultColors = [
  "#FF0000", "#0000FF", "#008000", "#000000", 
  "#FFFFFF", "#C0C0C0", "#808080", "#FFFF00",
];

export const EditVehicle = (): JSX.Element => {
  const dispatch = useDispatch();
  const [vehicles, setVehicles] = useState<Array<{
    brand: string;
    model: string;
    color: string;
    number: string;
  }>>([{
    brand: "",
    model: "",
    color: "",
    number: ""
  }]);
  
  const [currentVehicleIndex, setCurrentVehicleIndex] = useState(0);

  // Get models for selected brand
  const availableModels = vehicleBrands.find(brand => brand.id === vehicles[currentVehicleIndex].brand)?.models || [];

  // Get color name from hex value
  const getColorName = (hex: string) => {
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
    return colorMap[hex.toUpperCase()] || "Vehicle Color";
  };

  const handleAddNewVehicle = () => {
    setVehicles([...vehicles, {
      brand: "",
      model: "",
      color: "",
      number: ""
    }]);
    setCurrentVehicleIndex(vehicles.length);
  };

  const handleSave = () => {
    const currentVehicle = vehicles[currentVehicleIndex];
    const brandName = vehicleBrands.find(brand => brand.id === currentVehicle.brand)?.name || "";
    
    if (currentVehicleIndex < vehicles.length - 1) {
      // Updating existing vehicle
      dispatch(updateVehicle({
        index: currentVehicleIndex,
        vehicle: {
          ...currentVehicle,
          brand: brandName,
          colorName: getColorName(currentVehicle.color)
        }
      }));
    } else {
      // Adding new vehicle
      dispatch(addVehicle({
        ...currentVehicle,
        brand: brandName,
        colorName: getColorName(currentVehicle.color)
      }));
    }
  };

  const updateCurrentVehicle = (field: string, value: string) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles[currentVehicleIndex] = {
      ...updatedVehicles[currentVehicleIndex],
      [field]: value
    };
    setVehicles(updatedVehicles);
  };

  return (
    <BookingLayout
      title="Add/Edit a vehicle"
      description="Add/Edit Vehicle that you travel in"
    >
      <div className="inline-flex flex-col items-start justify-center gap-5 lg:w-[785px] w-full">
        <Card className="w-full border border-solid border-[#F2F2F2] rounded-[10px]">
          <CardContent className="flex flex-col items-start gap-[30px] lg:px-10 py-5 px-5">
            <h1 className="font-bold text-[#353535] lg:text-4xl text-[24px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Vehicle {currentVehicleIndex + 1}
            </h1>
            
            {/* Vehicle Brand Select */}
            <div className="flex flex-col w-full items-start gap-[15px]">
              <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                What's your vehicle's brand?
              </label>
              <Select 
                value={vehicles[currentVehicleIndex].brand} 
                onValueChange={(value) => updateCurrentVehicle("brand", value)}
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
            </div>

            {/* Vehicle Model and Color Row */}
            <div className="flex flex-col md:flex-row items-start gap-[30px] w-full">
              {/* Vehicle Model Select */}
              <div className="flex flex-col items-start gap-[15px] flex-1 w-full">
                <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Vehicle model
                </label>
                <Select 
                  value={vehicles[currentVehicleIndex].model} 
                  onValueChange={(value) => updateCurrentVehicle("model", value)}
                  disabled={!vehicles[currentVehicleIndex].brand}
                >
                  <SelectTrigger className="w-full py-[19px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]">
                    <SelectValue placeholder={vehicles[currentVehicleIndex].brand ? "Select model" : "Select brand first"} />
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
              </div>

              {/* Vehicle Color Select */}
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
                        !vehicles[currentVehicleIndex].color && "text-muted-foreground"
                      )}
                    >
                      {vehicles[currentVehicleIndex].color ? (
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-5 h-5 rounded-full border" 
                            style={{ backgroundColor: vehicles[currentVehicleIndex].color }}
                          />
                          {getColorName(vehicles[currentVehicleIndex].color)}
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
                        color={vehicles[currentVehicleIndex].color || "#FFFFFF"}
                        onChange={(color) => updateCurrentVehicle("color", color)}
                        className="!w-full !h-[200px]"
                      />
                      <div className="grid grid-cols-8 gap-2">
                        {defaultColors.map((color) => (
                          <button
                            key={color}
                            className={cn(
                              "h-8 w-8 rounded-full border cursor-pointer flex items-center justify-center",
                              vehicles[currentVehicleIndex].color === color && "ring-2 ring-[#631CFF]"
                            )}
                            style={{ backgroundColor: color }}
                            onClick={() => updateCurrentVehicle("color", color)}
                          >
                            {vehicles[currentVehicleIndex].color === color && (
                              <Check className="h-3 w-3 text-white" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Vehicle Number Input */}
            <div className="flex flex-col w-full items-start gap-[15px]">
              <label className="font-bold text-black text-sm [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Vehicle Number
              </label>
              <Input
                className="w-full py-[22px] px-5 rounded-[40px] border border-solid border-[#D9D9D9]"
                placeholder="Enter vehicle number"
                value={vehicles[currentVehicleIndex].number}
                onChange={(e) => updateCurrentVehicle("number", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Button
          variant="outline"
          className="w-full py-5 bg-[#631cff1a] text-[#631CFF] rounded-[40px] font-semibold text-base [font-family:'Plus_Jakarta_Sans',Helvetica] tracking-[-0.13px] leading-[22.4px] border-none"
          onClick={handleAddNewVehicle}
        >
          Add New vehicle
        </Button>
        <Button 
          className="w-full py-5 bg-[#631CFF] text-white rounded-[50px] font-semibold text-base [font-family:'Plus_Jakarta_Sans',Helvetica] leading-7"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </BookingLayout>
  );
};