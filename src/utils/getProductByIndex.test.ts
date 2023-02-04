import * as constants from "../constants";
import { getProductByIndex } from "./getProductByIndex";
import { Product } from "./types";

describe("Get Product By Index", () => {
  const mockProducts: Product[] = [1, 2, 3, 4, 5].map((val) => {
    return {
      uuid: val,
      name: "Product " + val,
      price: String(val * 5),
      description: "Description " + val
    };
  });

  it("Gets the correct product from the index", () => {
    constants.jsonProducts = mockProducts;

    const product = getProductByIndex(1);

    expect(product.uuid).toBe(1);
    expect(product.name).toBe("Product 1");
    expect(product.price).toBe("5");
    expect(product.description).toBe("Description 1");
  });
});
