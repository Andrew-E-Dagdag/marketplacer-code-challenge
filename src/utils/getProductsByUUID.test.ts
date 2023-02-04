import * as constants from "../constants";
import { getProductsByUUID } from "./getProductsByUUID";
import { Product } from "./types";

describe("Get Products By UUID", () => {
  const mockProducts: Product[] = [1, 2, 3, 4, 5].map((val) => {
    return {
      uuid: val,
      name: "Product " + val,
      price: String(val * 5),
      description: "Description " + val
    };
  });

  it("Returns 3 out of 5 products", () => {
    constants.jsonProducts = mockProducts;

    const filteredProducts = getProductsByUUID(["1", "2", "3"]);

    expect(filteredProducts).toHaveProperty("1");
    expect(filteredProducts).toHaveProperty("2");
    expect(filteredProducts).toHaveProperty("3");
    expect(filteredProducts).not.toHaveProperty("4");
    expect(filteredProducts).not.toHaveProperty("5");
  });
});
