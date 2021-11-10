import { fireEvent, render } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { GET_PRODUCT } from "./hooks/useQueryGetProductById";
import { Product } from "./views";
import 'jest-styled-components'
import React from "react";

const mocks = [
  {
    request: {
      query: GET_PRODUCT,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        product: {
          id: "1",
          name: "Energy saving light bulb",
          power: "25W",
          description:
            "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
          price: 1299,
          quantity: 4,
          brand: "Philips",
          weight: 77,
          height: 12.6,
          width: 6.2,
          length: 6.2,
          modelCode: "E27 ES",
          colour: "Cool daylight",
          imgUrl: "https://i.ibb.co/2nzwxnQ/bulb.png",
        },
      },
    },
  },
];


test("renders with mock data", async () => {
  const {findByTestId, container} = render(
    <MockedProvider mocks={mocks}>
      <Product />
   </MockedProvider>
   )

  const title = await findByTestId("product-title")
  expect(title).toHaveTextContent("Energy saving light bulb")

  expect(container).toMatchSnapshot();

  const subtitle = await findByTestId("product-subtitle")
  expect(subtitle).toHaveTextContent("25W // Packet of 4")

  const pounds = await findByTestId("price-pounds")
  expect(pounds).toHaveTextContent("12")

  const pence = await findByTestId("price-pence")
  expect(pence).toHaveTextContent(".99")

  const brand = await findByTestId("product-specification-Brand-value")
  expect(brand).toHaveTextContent("Philips")

  const weight = await findByTestId("product-specification-Item weight-value")
  expect(weight).toHaveTextContent("77")

  const dimensions = await findByTestId("product-specification-Dimensions-value")
  expect(dimensions).toHaveTextContent("12.6x6.2x6.2")

  const model = await findByTestId("product-specification-Item model number-value")
  expect(model).toHaveTextContent("E27 ES")

  const colour = await findByTestId("product-specification-Colour-value")
  expect(colour).toHaveTextContent("Cool daylight")

})

test("should be able to increase and decrease product quantity", async () => {
  const {findByTestId} = render(
    <MockedProvider mocks={mocks}>
      <Product />
   </MockedProvider>
   )

  const increaseButton = await findByTestId("quantity-increase-button")
  const quantityAmount = await findByTestId("quantity-amount")
  const decreaseButton = await findByTestId("quantity-decrease-button")
  fireEvent.click(increaseButton)
  expect(quantityAmount).toHaveTextContent("2")
  fireEvent.click(increaseButton)
  expect(quantityAmount).toHaveTextContent("3")
  fireEvent.click(decreaseButton)
  expect(quantityAmount).toHaveTextContent("2")
  fireEvent.click(decreaseButton)
  expect(quantityAmount).toHaveTextContent("1")
});


test("should be able to add items to the basket", async () => {
  const addToCartMock = jest.fn()
  const {findByTestId} = render(
    <MockedProvider mocks={mocks}>
      <Product handleAddToCart={addToCartMock}/>
   </MockedProvider>
   )

  const addToCartButton = await findByTestId("product-add-to-cart-button")
 fireEvent.click(addToCartButton)
 expect(addToCartMock).toHaveBeenCalled()
});
