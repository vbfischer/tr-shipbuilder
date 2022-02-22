import React from "react";
import {
  Stack,
  Box,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import { useAppSelector } from "../hooks";
import { selectShipSummary } from "../features/ship/ShipSlice";

export const SummaryView = () => {
  const { name, techLevel, items } = useAppSelector(selectShipSummary);

  return (
    <Stack width="500px">
      <Box>Ship Name: {name}</Box>
      <Box>Tech Level: {techLevel}</Box>
      <Table>
        <TableCaption>Summary Information</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th>Tons</Th>
            <Th>Cost (MCr)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.hull.map((i, ndx) => (
            <Tr>
            <Td>{ndx === 0 ? "Hull" : ""}</Td>
            <Td>{i?.description}</Td>
            <Td>{i?.tonnage}</Td>
            <Td>{i?.cost}</Td>
          </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};
