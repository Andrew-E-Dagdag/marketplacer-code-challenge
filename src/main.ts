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

import { EXIT_CODE } from "./constants";
import { getCommand } from "./utils/getCommands";
import { getProductByIndex } from "./utils/getProductByIndex";
import { printProducts } from "./utils/printProducts";
import { ShoppingCart } from "./utils/types";
import { viewCart } from "./utils/viewCart";
import { viewProduct } from "./utils/viewProduct";

// enum TEST { BROWSE, VIEW, ADD, CART, CHECKOUT, EXIT }

// TODO: Separate into own function file
const printCommands = () => {
  console.log(
    "Commands available: Browse, View [index], Add [index] [quantity], Cart, Checkout, Exit"
  );
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
