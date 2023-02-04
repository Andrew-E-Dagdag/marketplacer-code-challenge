# marketplacer-code-challenge

This is a repository to solve the [marketplacer-code-challenge](https://gist.github.com/alexrogers/63d262d4e07b75a45c646cd4f473accf).

## Goals:

- Load a list of products from a file. (done)
- List product details to the user. (done)
- Add products to a Shopping Cart. (done)
- Apply promotional discounts. (done)
- Calculate and display the total cost. (done)
- (self: implement tests for all functions)

## Usage:

### Running the tests:

- Clone the repository
- `npm i` to install the required dependencies
- `npm run test` to run jest's test suite

### Starting the program:

- Clone the repository
- `npm i` to install the required dependencies
- `npm run start` to run the application

### Using the program:

#### Browse

- `Browse`
- - Shows you the list of products that have been loaded in from the json file

#### View Product

- `View [product index]`
- - View the specific details of a product, with the index coming from the number seen in the `Browse` command. E.g. To view `1. Jockey Wheels - Orange - $15.39`, use `View 1`

#### Add/Remove Product

- `Add [product index] [quantity]` | `Remove [product index] [quantity]`
- - Add or Remove the product to your shopping cart, with the index coming from the number seen in the `Browse` command and quantity being the number of items you want to add or remove. E.g. To add 5 pieces of `1. Jockey Wheels - Orange - $15.39`, use `Add 1 5`. To remove, simply use `Remove 1 3`, leaving you with 2 items in your cart.

#### Cart

- `Cart`
- - Check the contents of your shopping cart, along with the total amount and any discounts automatically applied.

#### Checkout

- `Checkout`
- - Checkout the cart by exiting the program and be redirected to the payment platform. For this exercise, the redirect and payment platform are not implemented. Instead, this exits the program.

#### Exit

- `Exit`
- - Exits the program
