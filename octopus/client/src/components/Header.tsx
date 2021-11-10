import React from "react";
import styled from "styled-components";
import { Basket, Logo, SpacedRow } from ".";

export const Header = (): JSX.Element => (
  <HeaderContainer>
    <SpacedRow>
      <Logo />
      <Basket />
    </SpacedRow>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  margin-bottom: 10px;
  padding-left: 1em;
  padding-right: 1em;
`;
