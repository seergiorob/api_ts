import productsData from "./products.json";
import { Product, ProductWithoutDescription, NewProduct } from "../types";

const product: Array<Product> = productsData as Array<Product>;

export const getProducts = (): Product[] => {
  return product;
};

export const getProducstWithoutDescription =
  (): ProductWithoutDescription[] => {
    return product.map(({ description, ...rest }) => rest);
  };

export const getProductById = (id: number): Product | undefined => {
  return product.find((p) => p.id === id);
};

export const addProduct = (newProduct: NewProduct): Product => {
  const Product = {
    id: Math.max(...product.map((p) => p.id)) + 1,
    ...newProduct,
  };

  product.push(Product);

  return Product;
};
