import { jsonProducts } from "../constants";
import { printProduct } from "./printProduct";

export const printProducts = () => {
  if (jsonProducts.length === 0) {
    console.log("No products are currently available");
    return;
  }

  jsonProducts.forEach((product, index) => {
    printProduct(product, index + 1);
  });

  // Acts as a spacer, better readability
  console.log();
};
