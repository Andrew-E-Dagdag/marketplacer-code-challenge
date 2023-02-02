import { jsonProducts } from "../../constants";

export const validNumber = (input: string, isIndex = false): boolean => {
  const num = Number(input);
  if (isNaN(num) || num <= 0 || (isIndex && num > jsonProducts.length)) {
    return false;
  }
  return true;
};
