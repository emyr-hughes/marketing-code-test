import React from "react";
import styled from "styled-components";
import { Col, AlignedRow } from ".";

export interface QuantityProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export const Quantity = ({ quantity, setQuantity }: QuantityProps): JSX.Element => (
  <Col>
    <Label>QTY</Label>
    <AlignedRow>
      <QuantityButton
        data-testid="quantity-decrease-button"
        dark
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </QuantityButton>
      <Amount data-testid="quantity-amount">{quantity}</Amount>
      <QuantityButton
        data-testid="quantity-increase-button"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </QuantityButton>
    </AlignedRow>
  </Col>
);

type StyledButton = {
  dark?: boolean;
};

const QuantityButton = styled.div<StyledButton>`
  background: ${(props) => (props.dark ? "#1A2A43" : "#36598D")};
  border-radius: 5px;
  height: 1.9em;
  width: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

const Label = styled.div`
  margin-bottom: 0.1em;
  color: #36598d;
  align-self: center;
  font-size: 1.2em;
  font-weight: 400;
`;

const Amount = styled.div`
  font-size: 2.4em;
  font-weight: bold;
  margin: 0.2em;
`;
