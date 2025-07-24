// store/vehicleSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vehicle {
  brand: string;
  model: string;
  color: string;
  colorName: string;
  number: string;
}

interface VehicleState {
  vehicles: Vehicle[];
}

const initialState: VehicleState = {
  vehicles: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.vehicles.push(action.payload);
    },
    updateVehicle: (state, action: PayloadAction<{index: number; vehicle: Vehicle}>) => {
      state.vehicles[action.payload.index] = action.payload.vehicle;
    },
        clearVehicleData: () => initialState,
    
    // Add other reducers as needed
  },
});

export const { addVehicle, updateVehicle,clearVehicleData } = profileSlice.actions;
export default profileSlice.reducer;