console.log("Sample output below:");
console.log("Products in Shopping Cart:");
console.log("1. Jockey Wheels - Orange - $15.39");
console.log("2. Chain Ring 146mm - $65.95");
console.log("3. Carbon Brake Pads - $92.00");
console.log("4. Front Derailleur - 34.9mm - $31.22");
console.log("");
console.log("Discount applied: 20% off on total greater than $100");
console.log("");
console.log("TOTAL: $163.65");

const EXIT_CODE = 9;
import products from "./products/products.json";

const printCommands = () => {
  console.log(
    "Commands available: Browse, View [index], Add [index] [quantity], Cart, Checkout"
  );
};

const printProducts = () => {
  if (products.length === 0) {
    console.log("No products are currently available");
    return;
  }

  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - $${product.price}`);
  });
};

const main = () => {
  let command = 0;
  while (command != EXIT_CODE) {
    printCommands();
    printProducts();
    command = EXIT_CODE;
  }
};

main();
