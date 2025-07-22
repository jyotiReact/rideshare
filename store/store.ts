// store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rideReducer from './rideSlice';
import userReducer from './authslice'; // Import your other reducers
// Import any other reducers you have

// Combine all your reducers
const rootReducer = combineReducers({
  ride: rideReducer,
  user: userReducer,
  // Add other reducers here
});

// Persistence configuration
const persistConfig = {
  key: 'root',
  storage,
  // Optional: specify which reducers to persist
  // whitelist: ['ride', 'user'] or blacklist: ['someReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});

export const persistor = persistStore(store);

// Type definitions
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;