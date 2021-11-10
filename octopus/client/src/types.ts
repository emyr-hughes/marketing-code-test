export interface UIProduct {
  name: string;
  imageUrl: string;
  subtitle: string;
  price: number;
  description: string;
  specifications: { property: string; value: string | number }[];
}

export interface APIProduct {
  id: string;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  modelCode: string;
  colour: string;
  imgUrl: string;
}

