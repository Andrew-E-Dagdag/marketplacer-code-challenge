import { getProductByIndex } from "./getProductByIndex";
import { ShoppingCart } from "./types";

export const addProduct = (
  cart: ShoppingCart,
  index: number,
  quantity: number
): ShoppingCart => {
  const product = getProductByIndex(index);
  if (cart[product.uuid] != null) {
    cart[product.uuid] = quantity + cart[product.uuid];
  } else {
    cart[product.uuid] = quantity;
  }
  return cart;
};
