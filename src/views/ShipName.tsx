import React from "react";

import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";


import {useAppSelector, useAppDispatch} from '../hooks';
import { setName, selectName } from "../features/ship/ShipSlice";

export const ShipName = () => {
    const name = useAppSelector(selectName);
    const dispatch = useAppDispatch();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        dispatch(setName(event.target.value));
    }

  return (
    <HStack spacing="24px">
      <FormControl>
        <FormLabel htmlFor="ship-name">Ship Name</FormLabel>
        <Input id="ship-name" value={name} onChange={handleNameChange}/>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="ship-tl">TL</FormLabel>
        <NumberInput id="ship-tl" defaultValue={12} min={7} max={19}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
    </HStack>
  );
};
