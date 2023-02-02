// TODO: Separate into own function file
import * as readline from "node:readline/promises";
import { validInput } from "./inputValidation";
import type { ValidCommand } from "./types";

export const getCommand = async (): Promise<ValidCommand> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let validInputLoop = true;
  const validCommand: ValidCommand = {
    command: "n/a"
  };
  while (validInputLoop) {
    const userInput = await rl.question("Input: ");
    console.log();
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
