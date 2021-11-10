import React, { useState } from "react";
import { useQueryGetProductById } from "../../hooks";

import { mapProductData } from "../../util";
import Product from "./Product";

const ProductState = ({ handleAddToCart }: { handleAddToCart?: () => void }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { loading, error, data } = useQueryGetProductById("1");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;
  if (!data) return <div>No Data!</div>;

  const { name, imageUrl, subtitle, price, description, specifications } =
    mapProductData(data.product);

  return (
    <Product
      name={name}
      imageUrl={imageUrl}
      subtitle={subtitle}
      price={price}
      description={description}
      specifications={specifications}
      quantity={quantity}
      setQuantity={setQuantity}
      addToCart={handleAddToCart}
    />
  );
};

export default ProductState;
