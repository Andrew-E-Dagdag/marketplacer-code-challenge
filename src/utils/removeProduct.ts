import { getProductByIndex } from "./getProductByIndex";
import { ShoppingCart } from "./types";

export const removeProduct = (
  cart: ShoppingCart,
  index: number,
  quantity: number
): ShoppingCart => {
  const product = getProductByIndex(index);
  const difference = cart[product.uuid] - quantity;
  if (difference <= 0) {
    console.log(
      "Quantity to be removed is more than or equal to the number present in the cart. Removing item."
    );
    const { [product.uuid]: _, ...newCart } = cart;
    return newCart;
  } else {
    cart[product.uuid] = difference;
    return cart;
  }
};
