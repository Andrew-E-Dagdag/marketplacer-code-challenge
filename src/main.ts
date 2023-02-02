import { EXIT_CODE } from "./constants";
import { getCommand } from "./utils/getCommands";
import { addProduct } from "./utils/addProduct";
import { printProducts, printCommands } from "./utils/printing";
import { ShoppingCart } from "./utils/types";
import { viewCart } from "./utils/viewCart";
import { viewProduct } from "./utils/viewProduct";

// enum TEST { BROWSE, VIEW, ADD, CART, CHECKOUT, EXIT }
let cart: ShoppingCart = {};

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
      cart = addProduct(cart, validCommand.index, validCommand.quantity);
    } else if (validCommand.command === "CART") {
      viewCart(cart);
    } else if (validCommand.command === "EXIT") {
      command = EXIT_CODE;
    }
  }
};

main();
