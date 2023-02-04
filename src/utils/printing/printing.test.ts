import { Product } from "../types";
import { printCommands, printProduct, printProducts } from "./index";
import * as constants from "../../constants";

describe("Print Tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Print Commands", () => {
    it("Makes sure the printed command list is correct", () => {
      printCommands();
      expect(console.log).toHaveBeenCalledWith(
        "Commands available: Browse, View [index], Add [product index] [quantity], Remove [product index] [quantity], Cart, Checkout, Exit"
      );
    });
  });

  describe("Print Specific Product", () => {
    it("Prints the product's details", () => {
      const baseProduct: Product = {
        uuid: 101,
        name: "Product 1",
        price: "99.99",
        description: "Very Cool Description"
      };

      printProduct(baseProduct, 1);
      expect(console.log).toHaveBeenCalledWith("1. Product 1 - $99.99");
    });
  });

  describe("Print Products", () => {
    const mockProducts: Product[] = [1, 2, 3, 4, 5].map((val) => {
      return {
        uuid: val,
        name: "Product " + val,
        price: String(val * 5),
        description: "Description " + val
      };
    });

    it("Prints all 5 products correctly", () => {
      constants.jsonProducts = mockProducts;
      printProducts();
      expect(console.log).toHaveBeenCalledTimes(6);
    });

    it("Prints no products", () => {
      constants.jsonProducts = [];
      printProducts();
      expect(console.log).toHaveBeenCalledWith(
        "No products are currently available"
      );
    });
  });
});

describe("Print Products", () => {});
