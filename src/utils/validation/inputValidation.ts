import { COMMANDS } from "../../constants";
import { getProductByIndex } from "../getProductByIndex";
import { printCommands } from "../printing";
import { ShoppingCart } from "../types";
import { argQtyError } from "./argQtyError";
import { validNumber } from "./validNumber";

export const validInput = (
  inputArr: string[],
  inputCommand: string,
  cart: ShoppingCart
): boolean => {
  if (!COMMANDS.includes(inputCommand)) {
    console.log("Invalid command. See list of available commands below:");
    printCommands();
    return false;
  }

  if (inputCommand === "VIEW") {
    if (inputArr.length !== 2) {
      argQtyError("View [index]");
      return false;
    }

    if (!validNumber(inputArr[1], true)) {
      console.log(
        "Index should be a number, e.g. for product '1. Great Product - $4.00', enter 'View 1'"
      );
      return false;
    }
  }

  if (inputCommand === "ADD") {
    if (inputArr.length !== 3) {
      argQtyError("Add [index] [quantity]");
      return false;
    }

    if (!validNumber(inputArr[1], true) || !validNumber(inputArr[2])) {
      console.log(
        "Index and Quantity should be a number, e.g. to add to cart 5 pieces of product '1. Great Product - $4.00', enter 'Add 1 5'"
      );
      return false;
    }
  }

  if (inputCommand === "REMOVE") {
    if (inputArr.length !== 3) {
      argQtyError("Remove [index] [quantity]");
      return false;
    }

    if (!validNumber(inputArr[1], true) || !validNumber(inputArr[2])) {
      console.log(
        "Index and Quantity should be a number, e.g. to remove from the cart 5 pieces of product '1. Great Product - $4.00', enter 'Remove 1 5'"
      );
      return false;
    }

    const product = getProductByIndex(Number(inputArr[1]));
    if (cart[product.uuid] == null) {
      console.log("Product does not exist in your cart.");
      return false;
    }
  }

  return true;
};
