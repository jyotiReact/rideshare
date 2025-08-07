import { VehicleBrand } from "@/types";

export const BASE_URL = "https://100cc6144b9e.ngrok-free.app/"

// Sample vehicle data
export const vehicleBrands: VehicleBrand[] = [
  {
    id: "toyota",
    name: "Toyota",
    models: ["Corolla", "Camry", "RAV4", "Prius"],
  },
  { id: "honda", name: "Honda", models: ["Civic", "Accord", "CR-V", "Pilot"] },
  {
    id: "ford",
    name: "Ford",
    models: ["F-150", "Mustang", "Explorer", "Escape"],
  },
  { id: "bmw", name: "BMW", models: ["3 Series", "5 Series", "X5", "X3"] },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    models: ["C-Class", "E-Class", "GLC", "S-Class"],
  },
];
export const vehicleType = [
  {
    id: "1", // Changed to string
    name: "Car",
  },
  {
    id: "2",
    name: "Bike",
  },
  {
    id: "3",
    name: "Truck",
  },
  {
    id: "4",
    name: "Bus",
  },
  {
    id: "5",
    name: "Other",
  },
];