import React from "react";
import { Box } from "@chakra-ui/react";

import {useAppSelector} from '../hooks';
import { selectName } from "../features/ship/ShipSlice";

export const SummaryView = () => {
  const name = useAppSelector(selectName);

  return <Box width="300px">{name}</Box>;
};
