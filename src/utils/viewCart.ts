import { applyDiscounts } from "./applyDiscounts";
import { getProductsByUUID } from "./getProductsByUUID";
import { ShoppingCart } from "./types";

export const viewCart = (Cart: ShoppingCart) => {
  const uuids = Object.keys(Cart);
  const productDetails = getProductsByUUID(uuids);
  let cartTotal = 0;
  uuids.forEach((uuid) => {
    const product = productDetails[uuid];
    const productTotal = Number(product.price) * Cart[uuid];
    cartTotal += productTotal;
    console.log(`${product.name} - $${[product.price]}/pc - ${productTotal}`);
  });

  console.log(`Your total is currently: $${applyDiscounts(cartTotal)}`);
};
