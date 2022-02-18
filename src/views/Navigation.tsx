import React from 'react'
import {Box, List, ListItem} from '@chakra-ui/react';

export const Navigation = () => {
    return (
        <Box width="200px">
        <List spacing={3}>
          <ListItem>01. Hull</ListItem>
          <ListItem>02. Drives</ListItem>
          <ListItem>03. Power Plant</ListItem>
          <ListItem>04. Fuel Tanks</ListItem>
          <ListItem>05. Bridge</ListItem>
          <ListItem>06. Computer</ListItem>
          <ListItem>07. Sensors</ListItem>
          <ListItem>08. Weapons</ListItem>
          <ListItem>09. Optional Systems</ListItem>
          <ListItem>10. Crew</ListItem>
          <ListItem>11. Staterooms</ListItem>
          <ListItem>12. Cargo Space</ListItem>
          <ListItem>13. Finalize</ListItem>
        </List>
      </Box>

    )
}