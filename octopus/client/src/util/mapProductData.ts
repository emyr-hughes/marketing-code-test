import { APIProduct, UIProduct } from "../types";

export const mapProductData = (product: APIProduct): UIProduct => ({
  name: product.name,
  imageUrl: product.imgUrl,
  subtitle: `${product.power} // Packet of ${product.quantity}`,
  price: product.price,
  description: product.description,
  specifications: [
    { property: "Brand", value: product.brand },
    { property: "Item weight", value: product.weight },
    {
      property: "Dimensions",
      value: `${product.height}x${product.width}x${product.length}`,
    },
    { property: "Item model number", value: product.modelCode },
    { property: "Colour", value: product.colour },
  ],
});

export default mapProductData;
