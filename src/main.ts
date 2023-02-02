import { EXIT_CODE } from "./constants";
import { getCommand } from "./utils/getCommands";
import { getProductByIndex } from "./utils/getProductByIndex";
import { printProducts, printCommands } from "./utils/printing";
import { ShoppingCart } from "./utils/types";
import { viewCart } from "./utils/viewCart";
import { viewProduct } from "./utils/viewProduct";

// enum TEST { BROWSE, VIEW, ADD, CART, CHECKOUT, EXIT }
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
