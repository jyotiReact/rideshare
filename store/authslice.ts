
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for user information
interface UserInfo {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: string;
  email?: string;
  phone?: string;
  otp?: string;
  password?: string;
  // Add other user properties as needed
}

// Define auth state interface
interface AuthState {
  verificationStep: 'initial' | 'otp' | 'complete';
  userInfo: UserInfo;
  aboutYou: string;
}

const initialState: AuthState = {
  verificationStep: 'initial',
  userInfo: {},
  aboutYou: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
      setPersonalDetails: (state, action: PayloadAction<Partial<UserInfo>>) => {
      state.userInfo = {
        ...state.userInfo,
        //@ts-ignore
        login: true,
        ...action.payload
      };
    },
    setVerificationStep: (state, action: PayloadAction<'initial' | 'otp' | 'complete'>) => {
      state.verificationStep = action.payload;
    },
    setAboutYou: (state, action: PayloadAction<string>) => {
      state.aboutYou = action.payload;
    },
    resetAuthState: () => initialState
  }
});

export const { 
  setVerificationStep,
  resetAuthState,
  setPersonalDetails,
  setAboutYou
} = authSlice.actions;

export default authSlice.reducer;