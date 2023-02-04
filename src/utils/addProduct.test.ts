import { addProduct } from "./addProduct";
import { ShoppingCart } from "./types";
import * as getProductByIndexModule from "./getProductByIndex";

describe("Add Product", () => {
  beforeEach(() => {
    jest.spyOn(getProductByIndexModule, "getProductByIndex");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Successfully adds new products to the cart", () => {
    getProductByIndexModule.getProductByIndex = jest
      .fn()
      .mockReturnValueOnce({ uuid: "productTwo" });

    const cart: ShoppingCart = { productOne: 5 };
    const newCart = addProduct(cart, 2, 5);

    expect(newCart).toHaveProperty("productTwo");
    expect(newCart.productTwo).toBe(5);
  });

  it("Successfully increments existing products in the cart", () => {
    getProductByIndexModule.getProductByIndex = jest
      .fn()
      .mockReturnValueOnce({ uuid: "productOne" });

    const cart: ShoppingCart = { productOne: 5 };
    const newCart = addProduct(cart, 2, 5);

    expect(newCart).toHaveProperty("productOne");
    expect(newCart.productOne).toBe(10);
  });
});
