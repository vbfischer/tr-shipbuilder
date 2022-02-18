import { configureStore } from "@reduxjs/toolkit";
import shipReducer from './features/ship/ShipSlice';

export const store = configureStore({
    reducer: {
        ship: shipReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;