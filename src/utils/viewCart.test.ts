import { viewCart } from "./viewCart";
import * as getProductsByUUIDModule from "./getProductsByUUID";

describe("View Cart", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
    jest.spyOn(getProductsByUUIDModule, "getProductsByUUID");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Tells the user that the cart is empty", () => {
    viewCart({});

    expect(console.log).toHaveBeenCalledWith(
      'It looks like your cart is empty, add products by using the "Add [product index] [quantity]" command!'
    );
  });

  it("Displays the contents of the cart without any discounts on the total", () => {
    getProductsByUUIDModule.getProductsByUUID = jest.fn().mockReturnValue({
      1: {
        uuid: 1,
        name: "Product One",
        price: "5.00"
      },
      2: {
        uuid: 2,
        name: "Product Two",
        price: "2.00"
      }
    });

    viewCart({ 1: 2, 2: 1 });

    expect(console.log).toHaveBeenCalledWith(
      "Product One - $5.00/item - 2 items - $10"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Product Two - $2.00/item - 1 items - $2"
    );
    expect(console.log).toHaveBeenCalledWith("TOTAL: $12");
  });

  it("Displays the contents of the cart with the appropriate discount", () => {
    getProductsByUUIDModule.getProductsByUUID = jest.fn().mockReturnValue({
      1: {
        uuid: 1,
        name: "Product One",
        price: "5.00"
      }
    });

    viewCart({ 1: 50 });

    expect(console.log).toHaveBeenCalledWith(
      "Product One - $5.00/item - 50 items - $250"
    );
    expect(console.log).toHaveBeenCalledWith("TOTAL: $200");
  });
});
