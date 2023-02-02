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
import { validInput } from "./utils/inputValidation";

// TODO: Separate constants to own constants.ts file
const EXIT_CODE = 9;
// TODO: explore making these into enums and types for better checks
const COMMANDS = ["BROWSE", "VIEW", "ADD", "CART", "CHECKOUT", "EXIT"];
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

type Product = {
  uuid: number;
  name: string;
  price: string;
  description?: string;
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

type FilteredProducts = { [uuid: string]: Product };
const getProductsByUUID = (uuids: string[]): FilteredProducts => {
  return jsonProducts.reduce<FilteredProducts>((acc, currentProduct) => {
    const uuid = String(currentProduct.uuid);
    if (uuids.includes(uuid)) {
      acc[uuid] = currentProduct;
    }
    return acc;
  }, {});
};

type ShoppingCart = {
  [uuid: string]: number;
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

// TODO: Separate into own function file
const viewCart = () => {
  const uuids = Object.keys(Cart);
  const productDetails = getProductsByUUID(uuids);
  let cartTotal = 0;
  uuids.forEach((uuid, index) => {
    const product = productDetails[uuid];
    const productTotal = Number(product.price) * Cart[uuid];
    cartTotal += productTotal;
    console.log(`${product.name} - $${[product.price]}/pc - ${productTotal}`);
  });

  console.log(`Your total is currently: $${applyDiscounts(cartTotal)}`);
};

const applyDiscounts = (total: number): number => {
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
  return Math.round(total * multiplier * 100) / 100;
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
      viewCart();
    } else if (validCommand.command === "EXIT") {
      command = EXIT_CODE;
    }
  }
};

main();
