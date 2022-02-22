import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

import {
  getHullData,
  getHullCostPerTon,
  HullConfigurationType,
  HullReinforcedType,
  getReinforcedData,
  HullOptionsType,
  getHullOptionsData,
} from "../../api";

interface ShipState {
  name: string;
  techLevel: number;
  hullSize: number;
  hullType: HullConfigurationType;
  reinforced: HullReinforcedType;
  hullOptions: HullOptionsType[];
}

const initialState: ShipState = {
  name: "<Ship Name>",
  techLevel: 12,
  hullSize: 100,
  hullType: "standard",
  reinforced: "none",
  hullOptions: [],
};

export const shipSlice = createSlice({
  name: "ship",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setTL: (state, action: PayloadAction<number>) => {
      state.techLevel = action.payload;
    },
    setHullSize: (state, action: PayloadAction<number>) => {
      state.hullSize = action.payload;
    },
    updateShip: (state, action: PayloadAction<Partial<ShipState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setName, setTL, updateShip } = shipSlice.actions;

export const selectName = (state: RootState) => state.ship.name;

export const selectShipInfo = (state: RootState) => state.ship;

export const selectHullCost = ({ ship }: RootState) =>
  ship.hullSize * getHullCostPerTon();

export const selectShipSummary = (state: RootState) => {
  const hullCost = selectHullCost(state);

  const { cost: hullTypeCost, name: hullTypeName } = getHullData(
    state.ship.hullType
  );
  const { cost: reinforcedCost, name: reinforcedName } = getReinforcedData(
    state.ship.reinforced
  );

  const hullTypeAdj = 1 + hullTypeCost;
  const reinforcedAdj = reinforcedCost;

  const basicHullCost = hullCost * hullTypeAdj;
  const hullSection = [
    {
      description: `${state.ship.hullSize} tons, ${hullTypeName}`,
      tonnage: "-",
      cost: basicHullCost / 1000000,
    },
    state.ship.reinforced !== "none"
      ? {
          description: `${reinforcedName}`,
          tonnage: "-",
          cost: (basicHullCost * reinforcedAdj) / 1000000,
        }
      : null,
    ...state.ship.hullOptions.map((o) => {
        const {cost: optionCost, name: optionName} = getHullOptionsData(o);
      return {
        description: optionName,
        tonnage: "-",
        cost: (optionCost * state.ship.hullSize) / 1000000,
      };
    }),
  ].filter((x) => x !== null);

  const items = {
    hull: hullSection,
  };

  return {
    name: state.ship.name,
    techLevel: state.ship.techLevel,
    items,
  };
};

export default shipSlice.reducer;
