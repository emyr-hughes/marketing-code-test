import React from "react";
import styled from "styled-components";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid brown;
`;

export const Row = styled.div`
  display: flex;
`;

export const AlignedRow = styled.div`
  display: flex;
  align-items: center;
`;

export const SpacedRow = styled(Row)`
  justify-content: space-between;
`;
const StyledLogo = styled.img`
  height: 2em;
`;

export const Logo = () => {
  return <StyledLogo alt="logo" src={require("../assets/logo.svg")} />;
};

const StyledBasket = styled.img`
  height: 2em;
`;

export const Basket = () => {
  return <StyledBasket alt="basket" src={require("../assets/basket.svg")} />;
};

export const Section = styled(Col)`
  padding-left: 1.7em;
  padding-right: 1.7em;
  padding-bottom: 2em;
  padding-top: 2em;
`;

export const SectionHeader = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 0.8em;
`;

export const OffsetColorSection = styled(Section)`
  background: #01193b;
`;

export const Footer = styled(Col)`
  background: #01193b;
  padding-left: 1em;
  padding-right: 1.7em;
  padding-bottom: 2em;
  padding-top: 2em;
`;

export const FooterText = styled.div`
  font-size: 0.9em;
  line-height: 1.9em;
  font-weight: 100;
  color: #8ea2c1;
`;

export const UnderlinedRow = styled(SpacedRow)`
  border-bottom: 2px solid #01193b;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
`;

export const AddToCartButton = styled.div`
  background: #fb1a7b;
  border-radius: 5px;
  height: 2em;
  margin-top: 0.5em;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 2.3em;
`;
