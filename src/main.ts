console.log("Sample output below:");
console.log("Products in Shopping Cart:");
console.log("1. Jockey Wheels - Orange - $15.39");
console.log("2. Chain Ring 146mm - $65.95");
console.log("3. Carbon Brake Pads - $92.00");
console.log("4. Front Derailleur - 34.9mm - $31.22");
console.log("");
console.log("Discount applied: 20% off on total greater than $100");
console.log("");
console.log("TOTAL: $163.65\n\n\n\n\n");

import { jsonProducts } from "./constants";
import { getCommand } from "./utils/getCommands";
import { Product, ShoppingCart } from "./utils/types";
import { viewCart } from "./utils/viewCart";

// TODO: Separate constants to own constants.ts file
const EXIT_CODE = 9;
// enum TEST { BROWSE, VIEW, ADD, CART, CHECKOUT, EXIT }

// TODO: Separate into own function file
const printCommands = () => {
  console.log(
    "Commands available: Browse, View [index], Add [index] [quantity], Cart, Checkout, Exit"
  );
};

// TODO: separate utility file
const printProduct = (product: Product, index: number) =>
  console.log(`${index}. ${product.name} - $${product.price}`);

// TODO: Separate into own function file
const printProducts = () => {
  if (jsonProducts.length === 0) {
    console.log("No products are currently available");
    return;
  }

  jsonProducts.forEach((product, index) => {
    printProduct(product, index + 1);
  });

  // Acts as a spacer, better readability
  console.log();
};

// TODO: Separate into own function file
const viewProduct = (index: number) => {
  const product: Product = getProductByIndex(index);
  printProduct(product, index);
  console.log(
    `Description: ${product.description ?? "Lorem Ipsum Very Cool Product"}`
  );
};

// TODO: Move to helper functions
const getProductByIndex = (index: number): Product => {
  return jsonProducts[index - 1];
};

const Cart: ShoppingCart = {};

// TODO: Separate into own function file
const addProduct = (index: number, quantity: number) => {
  const product = getProductByIndex(index);
  if (Cart[product.uuid] != null) {
    Cart[product.uuid] = quantity + Cart[product.uuid];
  } else {
    Cart[product.uuid] = quantity;
  }
};

const main = async () => {
  let command = 0;
  printCommands();
  while (command != EXIT_CODE) {
    const validCommand = await getCommand();
    if (validCommand.command === "BROWSE") {
      printProducts();
    } else if (validCommand.command === "VIEW" && validCommand.index != null) {
      viewProduct(validCommand.index);
    } else if (
      validCommand.command === "ADD" &&
      validCommand.index != null &&
      validCommand.quantity != null
    ) {
      addProduct(validCommand.index, validCommand.quantity);
    } else if (validCommand.command === "CART") {
      viewCart(Cart);
    } else if (validCommand.command === "EXIT") {
      command = EXIT_CODE;
    }
  }
};

main();
