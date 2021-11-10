import React from "react";
import styled from "styled-components";
import {
  Footer,
  FooterText,
  Col,
  Price,
  OffsetColorSection,
  SectionHeader,
  Section,
  SpacedRow,
  UnderlinedRow,
  Quantity,
  QuantityProps,
  Header,
  AddToCartButton,
} from "../../components";
import { UIProduct } from "../../types";

type ProductProps = UIProduct & QuantityProps & { addToCart?: () => void };

const Product = ({
  name,
  imageUrl,
  subtitle,
  price,
  description,
  specifications,
  quantity,
  setQuantity,
  addToCart = () => null,
}: ProductProps) => (
  <Col>
    <Header />
    <ProductImage src={imageUrl} />
    <UnderImageSection>
      <ProductTitle data-testid="product-title">{name}</ProductTitle>
      <ProductSubtitle data-testid="product-subtitle">{subtitle}</ProductSubtitle>
    </UnderImageSection>

    <Section>
      <Col>
        <SpacedRow>
          <Price priceInPence={price} />
          <Quantity quantity={quantity} setQuantity={setQuantity} />
        </SpacedRow>
        <AddToCartButton data-testid="product-add-to-cart-button" onClick={addToCart}>Add to cart</AddToCartButton>
      </Col>
    </Section>
    <OffsetColorSection>
      <SectionHeader>Description</SectionHeader>
      <DescriptionText>{description}</DescriptionText>
    </OffsetColorSection>

    <Section>
      <SectionHeader>Specifications</SectionHeader>
      {specifications.map((specification, index) => (
        <UnderlinedRow key={specification.property}>
          <SpecificationText data-testid={`product-specification-${specification.property}-property`}>{specification.property}</SpecificationText>
          <SpecificationText data-testid={`product-specification-${specification.property}-value`}>{specification.value}</SpecificationText>
        </UnderlinedRow>
      ))}
    </Section>
    <Footer>
      <FooterText>
        Octopus Energy Ltd is a company registered in England and Wales.
      </FooterText>
      <FooterText>
        Registered Number: 09263424. Registered office: 33 Holborn, London, EC1N
        2HT. Trading office: 20-24 Broadwich Street, London, W1F 8HT.
      </FooterText>
    </Footer>
  </Col>
);

const UnderImageSection = styled(OffsetColorSection)`
  margin-top: -2.5em;
`;

const ProductImage = styled.img`
  width: 75%;
  align-self: center;
  z-index: 1;
`;

const ProductTitle = styled.div`
  margin-top: 0.5em;
  font-size: 2.9em;
  font-weight: bold;
`;

const DescriptionText = styled.div`
  font-size: 1.1em;
  line-height: 1.4em;
`;

const SpecificationText = styled.div`
  font-size: 1.2em;
  width: 50%;
`;

const ProductSubtitle = styled.div`
  margin-top: 1em;
  color: #36598d;
  font-size: 1.5em;
  font-weight: 400;
`;

export default Product;
