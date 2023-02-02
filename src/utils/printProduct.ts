import { Product } from "./types";

export const printProduct = (product: Product, index: number) =>
  console.log(`${index}. ${product.name} - $${product.price}`);
