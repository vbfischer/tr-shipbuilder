import React from "react";
import { Provider } from "react-redux";

import { ChakraProvider, Box, Stack, HStack } from "@chakra-ui/react";

import {
  Navigation,
  HullOptions,
  Header,
  ShipName,
  SummaryView,
} from "./views";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Box as="main" className="main-content" w="full" maxW="8xl" mx="auto">
          <Stack minH="100vh" spacing={8}>
            <Header>ATSBA</Header>
            <HStack align="flex-start">
              <Navigation />
              <Stack flex="1" spacing={8}>
                <ShipName />
                <HullOptions />
              </Stack>
              <SummaryView />
            </HStack>
          </Stack>
        </Box>
      </ChakraProvider>
    </Provider>
  );
};
