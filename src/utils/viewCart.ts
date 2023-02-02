import { applyDiscounts } from "./applyDiscounts";
import { getProductsByUUID } from "./getProductsByUUID";
import { ShoppingCart } from "./types";

export const viewCart = (cart: ShoppingCart) => {
  const uuids = Object.keys(cart);
  if (uuids.length === 0) {
    console.log(
      'It looks like your cart is empty, add products by using the "Add [product index] [quantity]" command!'
    );
    return;
  }

  const productDetails = getProductsByUUID(uuids);
  let cartTotal = 0;
  uuids.forEach((uuid) => {
    const product = productDetails[uuid];
    const productTotal = Number(product.price) * cart[uuid];
    cartTotal += productTotal;
    console.log(
      `${product.name} - $${[product.price]}/item - ${
        cart[uuid]
      } items - ${productTotal}`
    );
  });

  console.log(`TOTAL: $${applyDiscounts(cartTotal)}`);
};
