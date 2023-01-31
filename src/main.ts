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

const printCommands = () => {
  console.log(
    "Commands available: Browse, View [index], Add [index], Cart, Checkout"
  );
};

const main = () => {
  let command = 0;
  while (command != EXIT_CODE) {
    printCommands();
    command = EXIT_CODE;
  }
};

main();
