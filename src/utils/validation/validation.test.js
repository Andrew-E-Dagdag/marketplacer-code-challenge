import { argQtyError } from "./argQtyError";
import { validNumber } from "./validNumber";
import { validInput } from "./inputValidation";
import { getProductByIndex } from "../getProductByIndex";

jest.mock("../getProductByIndex", () => ({ getProductByIndex: jest.fn() }));

describe("Validation", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  describe("inputValidation", () => {
    it("Prints invalid command error and returns false", () => {
      const result = validInput(["TEST"], "INVALID", {});

      expect(console.log).toHaveBeenCalledWith(
        "Invalid command. See list of available commands below:"
      );
      expect(console.log).toHaveBeenCalledWith(
        "Commands available: Browse, View [index], Add [product index] [quantity], Remove [product index] [quantity], Cart, Checkout, Exit"
      );
      expect(result).toBe(false);
    });

    describe("VIEW", () => {
      it("Prints invalid args error and returns false", () => {
        const result = validInput(["VIEW"], "VIEW", {});

        expect(console.log).toHaveBeenCalledWith(
          "Incorrect number of arguments, View [index]"
        );
        expect(result).toBe(false);
      });

      it("Prints invalid number error and returns false", () => {
        const result = validInput(["VIEW", -1], "VIEW", {});

        expect(console.log).toHaveBeenCalledWith(
          "Index should be a number, e.g. for product '1. Great Product - $4.00', enter 'View 1'"
        );
        expect(result).toBe(false);
      });

      it("Successfully validates view command", () => {
        const result = validInput(["VIEW", 1], "VIEW", {});

        expect(result).toBe(true);
      });
    });

    describe("ADD", () => {
      it("Prints invalid args error and returns false", () => {
        const result = validInput(["ADD"], "ADD", {});

        expect(console.log).toHaveBeenCalledWith(
          "Incorrect number of arguments, Add [index] [quantity]"
        );
        expect(result).toBe(false);
      });

      it("Prints invalid number error for the first number argument and returns false", () => {
        const result = validInput(["ADD", 0, 0], "ADD", {});

        expect(console.log).toHaveBeenCalledWith(
          "Index and Quantity should be a number, e.g. to add to cart 5 pieces of product '1. Great Product - $4.00', enter 'Add 1 5'"
        );
        expect(result).toBe(false);
      });

      it("Prints invalid number error for the second number argument and returns false", () => {
        const result = validInput(["ADD", 1, 0], "ADD", {});

        expect(console.log).toHaveBeenCalledWith(
          "Index and Quantity should be a number, e.g. to add to cart 5 pieces of product '1. Great Product - $4.00', enter 'Add 1 5'"
        );
        expect(result).toBe(false);
      });

      it("Successfully validates add command", () => {
        const result = validInput(["ADD", 1, 1], "ADD", {});

        expect(result).toBe(true);
      });
    });

    describe("REMOVE", () => {
      it("Prints invalid args error and returns false", () => {
        const result = validInput(["REMOVE"], "REMOVE", {});

        expect(console.log).toHaveBeenCalledWith(
          "Incorrect number of arguments, Add [index] [quantity]"
        );
        expect(result).toBe(false);
      });

      it("Prints invalid number error for the first number argument and returns false", () => {
        const result = validInput(["REMOVE", 0, 0], "REMOVE", {});

        expect(console.log).toHaveBeenCalledWith(
          "Index and Quantity should be a number, e.g. to remove from the cart 5 pieces of product '1. Great Product - $4.00', enter 'Remove 1 5'"
        );
        expect(result).toBe(false);
      });

      it("Prints invalid number error for the second number argument and returns false", () => {
        const result = validInput(["REMOVE", 1, 0], "REMOVE", {});

        expect(console.log).toHaveBeenCalledWith(
          "Index and Quantity should be a number, e.g. to remove from the cart 5 pieces of product '1. Great Product - $4.00', enter 'Remove 1 5'"
        );
        expect(result).toBe(false);
      });

      it("Prints product does not exist in cart and returns false", () => {
        getProductByIndex.mockReturnValue({ uuid: 1 });

        const result = validInput(["REMOVE", 1, 1], "REMOVE", {});

        expect(console.log).toHaveBeenCalledWith(
          "Product does not exist in your cart."
        );
        expect(result).toBe(false);
      });

      it("Successfully validates remove command", () => {
        getProductByIndex.mockReturnValue({ uuid: 1 });

        const result = validInput(["REMOVE", 1, 1], "REMOVE", { 1: 5 });

        expect(result).toBe(true);
      });
    });

    it("Successfully validates the input", () => {
      const result = validInput(["BROWSE"], "BROWSE", {});

      expect(result).toBe(true);
    });
  });
});
