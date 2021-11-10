type Price = {
    pounds: string;
    pence: string;
}

export const formatPrice = (number: number): Price => {
  const parsed = (number / 100).toFixed(2);
  const pounds = parsed.split(".")[0];
  const pence = parsed.split(".")[1];

  return { pounds, pence };
};

export default formatPrice;
