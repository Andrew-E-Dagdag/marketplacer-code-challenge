import { jsonProducts } from "../constants";
import { Product } from "./types";

export const getProductByIndex = (index: number): Product => {
  return jsonProducts[index - 1];
};
