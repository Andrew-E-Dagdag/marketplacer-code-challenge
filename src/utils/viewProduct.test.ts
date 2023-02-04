import { viewProduct } from "./viewProduct";
import * as getProductByIndexModule from "./getProductByIndex";
import { Product } from "./types";

describe("View Product", () => {
  jest.spyOn(getProductByIndexModule, "getProductByIndex");
  const baseProduct: Product = {
    name: "Very Cool Product",
    uuid: 10101,
    price: "5000.5"
  };

  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Shows the product with its own description", () => {
    const productDescription = "Very cool description here";
    getProductByIndexModule.getProductByIndex = jest.fn().mockReturnValue({
      ...baseProduct,
      description: productDescription
    });

    viewProduct(1);

    expect(console.log).toHaveBeenCalledWith(
      `1. ${baseProduct.name} - $${baseProduct.price}`
    );
    expect(console.log).toHaveBeenCalledWith(
      `Description: ${productDescription}`
    );
  });

  it("Shows the product with the fallback description", () => {
    getProductByIndexModule.getProductByIndex = jest
      .fn()
      .mockReturnValue(baseProduct);

    viewProduct(1);

    expect(console.log).toHaveBeenCalledWith(
      `1. ${baseProduct.name} - $${baseProduct.price}`
    );
    expect(console.log).toHaveBeenCalledWith(
      "Description: Lorem Ipsum Very Cool Product"
    );
  });
});
