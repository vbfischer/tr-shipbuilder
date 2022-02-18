import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface ShipState {
    name: string;
    techLevel: number;
}

const initialState: ShipState = {
    name: "<Ship Name>",
    techLevel: 12
}

export const shipSlice = createSlice({
    name: "ship",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
});

export const {setName} = shipSlice.actions;

export const selectName = (state: RootState) => state.ship.name;

export default shipSlice.reducer;