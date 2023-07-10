export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export type ProductWithoutDescription = Omit<Product, "description">;

export type NewProduct = Omit<Product, "id">;
