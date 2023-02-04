import { getProductByIndex } from "./getProductByIndex";
import { ShoppingCart } from "./types";

export const addProduct = (
  cart: ShoppingCart,
  index: number,
  quantity: number
): ShoppingCart => {
  const product = getProductByIndex(index);
  cart[product.uuid] = quantity + (cart[product.uuid] ?? 0);
  return cart;
};
