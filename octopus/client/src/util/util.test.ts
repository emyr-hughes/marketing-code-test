import { formatPrice, mapProductData } from ".";

describe("util/formatPrice", () => {
  test("should map a price in pennies to an object usable by the UI", () => {
    const priceInPennies = 2456;
    expect(formatPrice(priceInPennies)).toStrictEqual({
      pence: "56",
      pounds: "24",
    });
  });
});

describe("util/mapProductData", () => {
  test("should map API product data to the specific UI product data type", () => {
    const APIProduct = {
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
    };
    expect(mapProductData(APIProduct)).toStrictEqual({
      description:
        "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
      imageUrl: "https://i.ibb.co/2nzwxnQ/bulb.png",
      name: "Energy saving light bulb",
      price: 1299,
      specifications: [
        {
          property: "Brand",
          value: "Philips",
        },
        {
          property: "Item weight",
          value: 77,
        },
        {
          property: "Dimensions",
          value: "12.6x6.2x6.2",
        },
        {
          property: "Item model number",
          value: "E27 ES",
        },
        {
          property: "Colour",
          value: "Cool daylight",
        },
      ],
      subtitle: "25W // Packet of 4",
    });
  });
});
