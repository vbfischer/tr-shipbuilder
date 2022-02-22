import hullData from "../data/hull.json";

export type HullConfigurationType = keyof typeof hullData.hullConfiguration;
export type HullReinforcedType = keyof typeof hullData.reinforced;
export type HullOptionsType = keyof typeof hullData.options;

export const getHullCostPerTon = () => {
  return hullData.cost;
};

export const getHullConfigurations = () => {
  const keys = Object.keys(
    hullData.hullConfiguration
  ) as HullConfigurationType[];

  return keys.map((k: HullConfigurationType) => ({
    id: k,
    value: hullData.hullConfiguration[k].name,
  }));
};

export const getHullData = (hullType: HullConfigurationType) => {
  return hullData.hullConfiguration[hullType];
};

export const getReinforcedOptions = () => {
  const keys = Object.keys(hullData.reinforced) as HullReinforcedType[];

  return keys.map((k: HullReinforcedType) => ({
    id: k,
    value: hullData.reinforced[k].name,
  }));
};

export const getReinforcedData = (reinforcementType: HullReinforcedType) => {
  return hullData.reinforced[reinforcementType];
};

export const getHullOptions = () => {
  const keys = Object.keys(hullData.options) as HullOptionsType[];

  return keys.map((k: HullOptionsType) => ({
    id: k,
    value: hullData.options[k].name,
  }));
};

export const getHullOptionsData = (hullOption: HullOptionsType) =>
  hullData.options[hullOption];
