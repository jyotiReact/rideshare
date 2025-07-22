// store/rideSlice.ts
import { RouteOption } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Stopover {
  name: string;
  selected: boolean;
}

type Step4Data = {
  datetime: Date | null;
};

interface Step5Data {
  seats: number;
  price: number;
}

// Add interface for Step6 data
interface Step6Data {
  bookingType: 'instant' | 'manual';
}

interface Step7Data {
  comments: string;
  luggagePerPassenger: number;
}

interface RideData {
  step1: {
    origin: string;
    destination: string;
  };
  step2: {
    selectedRoute: RouteOption | null;
  };
  step3: {
    stopovers: Stopover[];
  };
  step4: Step4Data;
  step5: Step5Data;
  step6: Step6Data;
   step7: Step7Data;// Add step6 to the main interface
}

const initialState: RideData = {
  step1: {
    origin: '',
    destination: ''
  },
  step2: {
    selectedRoute: null
  },
  step3: {
    stopovers: []
  },
  step4: {
    datetime: null
  },
  step5: { 
    seats: 2,
    price: 1000
  },
  step6: {
    bookingType: 'instant' 
  },
   step7: {
    comments: '',
    luggagePerPassenger: 2 // Default value
  }
};

export const rideSlice = createSlice({
  name: 'ride',
  initialState,
  reducers: {
    setStep1Data: (state, action: PayloadAction<{
      origin: string;
      destination: string;
    }>) => {
      state.step1 = action.payload;
    },
    setStep2Data: (state, action: PayloadAction<{
      selectedRoute: RouteOption;
    }>) => {
      state.step2 = action.payload;
    },
    setStep3Data: (state, action: PayloadAction<{
      stopovers: Stopover[];
    }>) => {
      state.step3 = {
        ...state.step3,
        ...action.payload
      };
    },
    setStep4Data: (state, action: PayloadAction<Step4Data>) => {
      state.step4 = action.payload;
    },
    setStep5Data: (state, action: PayloadAction<{
      seats?: number;
      price?: number;
    }>) => {
      state.step5 = {
        ...state.step5,
        ...action.payload
      };
    },
    // Add new reducer for step6 data
    setStep6Data: (state, action: PayloadAction<{
      bookingType: 'instant' | 'manual';
    }>) => {
      state.step6 = action.payload;
    },
     setStep7Data: (state, action: PayloadAction<{
      comments?: string;
      luggagePerPassenger?: number;
    }>) => {
      state.step7 = {
        ...state.step7,
        ...action.payload
      };
    },
    clearRideData: () => initialState,
  },
});

export const { 
  setStep1Data, 
  setStep2Data, 
  setStep3Data, 
  setStep4Data,
  setStep5Data,
  setStep6Data, 
  setStep7Data,
  clearRideData 
} = rideSlice.actions;

export default rideSlice.reducer;