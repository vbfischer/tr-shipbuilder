import React from "react";
import styled from 'styled-components';

import { Center, Heading } from "@chakra-ui/react";

const StyledContainer = styled(Center)`
    border-bottom: 1px solid black;
`
const StyledHeading = styled(Heading)`
`
export const Header = ({children}: React.PropsWithChildren<{}>) => {
  return (
    <StyledContainer>
      <StyledHeading>{children}</StyledHeading>
    </StyledContainer>
  );
};
