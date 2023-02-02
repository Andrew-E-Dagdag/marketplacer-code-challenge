import { getProductByIndex } from "./getProductByIndex";
import { printProduct } from "./printProduct";
import { Product } from "./types";

export const viewProduct = (index: number) => {
  const product: Product = getProductByIndex(index);
  printProduct(product, index);
  console.log(
    `Description: ${product.description ?? "Lorem Ipsum Very Cool Product"}`
  );
};
