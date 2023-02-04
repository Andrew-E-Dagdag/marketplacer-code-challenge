import * as getProductByIndexModule from "./getProductByIndex";
import { removeProduct } from "./removeProduct";

describe("Remove Product", () => {
  jest.spyOn(getProductByIndexModule, "getProductByIndex");
  getProductByIndexModule.getProductByIndex = jest
    .fn()
    .mockReturnValue({ uuid: "productOne" });

  it("Removes a product from the shopping cart", () => {
    jest.spyOn(console, "log");

    const oldCart = { productOne: 5 };
    const newCart = removeProduct(oldCart, 1, 10);

    expect(console.log).toHaveBeenCalledWith(
      "Quantity to be removed is more than or equal to the number present in the cart. Removing item."
    );
    expect(newCart).not.toHaveProperty("productOne");
  });

  it("Reduces the quantity of a product from the shopping cart", () => {
    const oldCart = { productOne: 5 };
    const newCart = removeProduct(oldCart, 1, 2);

    expect(newCart).toHaveProperty("productOne");
    expect(newCart.productOne).toBe(3);
  });
});
