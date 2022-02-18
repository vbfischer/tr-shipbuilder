import React from "react";

import {
  Stack,
  FormLabel,
  FormControl,
  NumberInput,
  NumberInputField,
  Center,
  HStack,
  Heading,
  CheckboxGroup,
  Checkbox,
  Select,
} from "@chakra-ui/react";

export const HullOptions = () => {
  return (
    <>
      <Center>
        <Heading size="lg">Step 1: Create a Hull</Heading>
      </Center>
      <Heading size="md">Hull Size and Configuration</Heading>
      <HStack spacing="24px">
        <FormControl>
          <FormLabel htmlFor="hull-size">Specify Hull Size</FormLabel>
          <NumberInput defaultValue={100} min={10} id="hull-size">
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="hull-reinforced">Reinforced</FormLabel>
          <Select id="hull-reinforced">
            <option value="none">None</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
      </HStack>
      <HStack>
        <FormControl>
          <FormLabel htmlFor="hull-type">Hull Type</FormLabel>
          <Select id="hull-type">
            <option>Streamlined</option>
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
        <CheckboxGroup>
          <Stack>
            <Checkbox value="emissions">
              Emissions Absorption Grid (TL8)
            </Checkbox>
            <Checkbox value="head-shielding">Heat Shielding (TL6)</Checkbox>
            <Checkbox value="radiation-shielding">
              Radiation Shielding (TL7)
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Stack>
    </>
  );
};
