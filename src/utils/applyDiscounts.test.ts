import { applyDiscounts } from "./applyDiscounts";

describe("Apply Discounts", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const formatDiscount = (val: number): number => {
    return Math.round(val * 100) / 100;
  };

  it("Does not apply discounts at total less than 20", () => {
    const testValue = 19.99;
    const result = applyDiscounts(testValue);

    expect(result).toBe(testValue);
    expect(console.log).toHaveBeenCalledWith(
      "No discount applied. Add more products to your cart to avail of discounts up to 20%!"
    );
  });

  it("Applies a 10% discount", () => {
    const testValue = 45.75;
    const result = applyDiscounts(testValue);
    expect(result).toBe(formatDiscount(testValue * 0.9));
    expect(console.log).toHaveBeenCalledWith(
      "Discount applied: 10% off on total greater than $20"
    );
  });

  it("Applies a 15% discount", () => {
    const testValue = 99.99;
    const result = applyDiscounts(testValue);
    expect(result).toBe(formatDiscount(testValue * 0.85));
    expect(console.log).toHaveBeenCalledWith(
      "Discount applied: 15% off on total greater than $50"
    );
  });

  it("Applies a 20% discount", () => {
    const testValue = 9999;
    const result = applyDiscounts(testValue);
    expect(result).toBe(formatDiscount(testValue * 0.8));
    expect(console.log).toHaveBeenCalledWith(
      "Discount applied: 20% off on total greater than $100"
    );
  });
});
// export const applyDiscounts = (total: number): number => {
//   let multiplier = 1;
//   if (total > 100) {
//     console.log("Discount applied: 20% off on total greater than $100");
//     multiplier = 0.8;
//   } else if (total > 50) {
//     console.log("Discount applied: 15% off on total greater than $50");
//     multiplier = 0.85;
//   } else if (total > 20) {
//     console.log("Discount applied: 10% off on total greater than $20");
//     multiplier = 0.9;
//   } else {
//     console.log(
//       "No discount applied. Add more products to your cart to avail of discounts up to 20%!"
//     );
//   }

//   console.log(); // Spacer
//   return Math.round(total * multiplier * 100) / 100;
// };
