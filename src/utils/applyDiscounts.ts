export const applyDiscounts = (total: number): number => {
  let multiplier = 1;
  if (total > 100) {
    console.log("Discount applied: 20% off on total greater than $100");
    multiplier = 0.8;
  } else if (total > 50) {
    console.log("Discount applied: 15% off on total greater than $100");
    multiplier = 0.85;
  } else if (total > 20) {
    console.log("Discount applied: 10% off on total greater than $100");
    multiplier = 0.9;
  } else {
    console.log(
      "No discount applied. Add more products to your cart to avail of discounts up to 20%!"
    );
  }

  console.log(); // Spacer
  return Math.round(total * multiplier * 100) / 100;
};
