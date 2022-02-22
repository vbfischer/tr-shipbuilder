import React from "react";

import { useAppSelector, useAppDispatch, useFormState } from "../hooks";

import {
  Stack,
  FormLabel,
  FormControl,
  NumberInput,
  NumberInputField,
  Input,
  Center,
  HStack,
  Heading,
  CheckboxGroup,
  Checkbox,
  Select,
} from "@chakra-ui/react";

import { selectShipInfo, updateShip } from "../features/ship/ShipSlice";

import {
  getHullConfigurations,
  getHullOptions,
  getReinforcedOptions,
} from "../api";

export const HullOptions = () => {
  const hullConfigurations = getHullConfigurations();
  const { hullSize, hullType, reinforced, hullOptions } =
    useAppSelector(selectShipInfo);
  const dispatch = useAppDispatch();

  const {
    registerInput,
    registerNumericInput,
    registerStringOrNumberInput,
    data,
  } = useFormState();

  React.useEffect(() => {
    dispatch(updateShip(data));
  }, [data]);

  return (
    <>
      <Center>
        <Heading size="lg">Step 1: Create a Hull</Heading>
      </Center>
      <Heading size="md">Hull Size and Configuration</Heading>
      <HStack spacing="24px">
        <FormControl>
          <FormLabel htmlFor="hullSize">Specify Hull Size</FormLabel>
          <NumberInput
            value={hullSize}
            {...registerNumericInput({ name: "hullSize" })}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="reinforced">Reinforced</FormLabel>
          <Select {...registerInput({ name: "reinforced" })} value={reinforced}>
            {getReinforcedOptions().map((r) => (
              <option key={r.id} value={r.id}>
                {r.value}
              </option>
            ))}
          </Select>
        </FormControl>
      </HStack>
      <HStack>
        <FormControl>
          <FormLabel htmlFor="hull-type">Hull Type</FormLabel>
          <Select {...registerInput({ name: "hullType" })} value={hullType}>
            {hullConfigurations.map((h) => (
              <option key={h.id} value={h.id}>
                {h.value}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="hull-modular">Modular Hull (Percent)</FormLabel>
          <NumberInput
            defaultValue={0}
            min={0}
            max={10}
            id="hull-armored-bulkheads"
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </HStack>
      <Heading size="md">Select Some Armor</Heading>
      <HStack>
        <FormControl>
          <FormLabel htmlFor="hull-armor">Armor</FormLabel>
          <Select id="hull-type">
            <option>Crystaliron</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="hull-armor-points">Points of Armor</FormLabel>
          <NumberInput defaultValue={0} min={0} max={10} id="hull-armor-points">
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="hull-coating">Coating</FormLabel>
          <Select id="hull-coating">
            <option>None</option>
          </Select>
        </FormControl>
      </HStack>
      <HStack>
        <FormControl>
          <FormLabel htmlFor="hull-armored-bulkheads">
            Armored Bulkheads (tons)
          </FormLabel>
          <NumberInput
            defaultValue={0}
            min={0}
            max={10}
            id="hull-armored-bulkheads"
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </HStack>
      <Stack>
        <Heading size="md">Other Hull Options</Heading>
        <CheckboxGroup
          value={hullOptions}
          {...registerStringOrNumberInput({ name: "hullOptions" })}
        >
          <Stack>
            {getHullOptions().map((o) => (
              <Checkbox value={o.id} key={o.id}>
                {o.value}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Stack>
    </>
  );
};
