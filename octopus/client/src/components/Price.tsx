import React from "react";
import styled from "styled-components";
import { formatPrice } from "../util";
import { Col, Row } from ".";

export interface PriceProps {
  priceInPence: number;
}

export const Price = ({ priceInPence }: PriceProps): JSX.Element => {
  const { pounds, pence } = formatPrice(priceInPence);
  return (
    <Col>
      <Spacer />
      <Row>
        <Pounds data-testid="price-pounds">{pounds}</Pounds>
        <Pence data-testid="price-pence">.{pence}</Pence>
      </Row>
    </Col>
  );
};

const Spacer = styled.div`
  height: 2em;
`;

const Pounds = styled.div`
  font-size: 2.9em;
  font-weight: bold;
`;

const Pence = styled.div`
  line-height: 1.3em;
  font-size: 2em;
  font-weight: bold;
`;
