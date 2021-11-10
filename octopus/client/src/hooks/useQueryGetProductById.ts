import { gql, QueryResult, useQuery } from "@apollo/client";
import { APIProduct } from "../types";

export const GET_PRODUCT = gql`
  query getProductById($id: ID) {
    product(productId: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`;

const useQueryGetProductById = (id: string): QueryResult =>
  useQuery<{ product: APIProduct }>(GET_PRODUCT, {
    variables: {
      id,
    },
  });
export default useQueryGetProductById;