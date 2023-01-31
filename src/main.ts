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

import products from "./products/products.json";

// TODO: Separate constants to own constants.ts file
const EXIT_CODE = 9;
// TODO: explore making these into enums and types for better checks
const COMMANDS = ["BROWSE", "VIEW", "ADD", "CART", "CHECKOUT", "EXIT"];

// TODO: Separate into own function file
const printCommands = () => {
  console.log(
    "Commands available: Browse, View [index], Add [index] [quantity], Cart, Checkout, Exit"
  );
};

// TODO: Separate into own function file
const printProducts = () => {
  if (products.length === 0) {
    console.log("No products are currently available");
    return;
  }

  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - $${product.price}`);
  });
};

// TODO: Separate into own function file
import * as readline from "node:readline/promises";

type ValidCommand = {
  command: string;
  index?: number;
  quantity?: number;
};

const getCommand = async (): Promise<ValidCommand> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let validInputLoop = true;
  const validCommand: ValidCommand = {
    command: "n/a"
  };
  while (validInputLoop) {
    const userInput = await rl.question("\nInput: ");
    const inputArr = userInput.split(" ");
    const command = inputArr[0].toUpperCase();
    if (validInput(inputArr, command)) {
      validInputLoop = false;
      validCommand.command = command;
      if (validCommand.command === "VIEW") {
        validCommand.index = Number(inputArr[1]);
      } else if (validCommand.command === "ADD") {
        validCommand.index = Number(inputArr[1]);
        validCommand.quantity = Number(inputArr[2]);
      }
    }
  }

  rl.close();
  return validCommand;
};

// TODO: Separate into own validation function file
const argQtyError = (properCommand: string) => {
  console.log(`Incorrect number of arguments, ${properCommand}`);
};
const validNumber = (input: string): boolean => {
  return !isNaN(Number(input));
};
const validInput = (inputArr: string[], inputCommand: string): boolean => {
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

    if (isNaN(Number(inputArr[1]))) {
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

    if (!validNumber(inputArr[1]) || !validNumber(inputArr[2])) {
      console.log(
        "Index and Quantity should be a number, e.g. to add to cart 5 pieces of product '1. Great Product - $4.00', enter 'Add 1 5'"
      );
      return false;
    }
  }
  return true;
};

const main = async () => {
  let command = 0;
  while (command != EXIT_CODE) {
    printCommands();
    // printProducts();
    const validCommand = await getCommand();
    // console.log({ userInput });
    if (validCommand.command === "EXIT") {
      command = EXIT_CODE;
    }
  }
};

main();
