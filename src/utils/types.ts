export type ValidCommand = {
  command: string;
  index?: number; // Note that index starts with 1, not 0
  quantity?: number;
};

export type ShoppingCart = {
  [uuid: string]: number;
};

export type FilteredProducts = { [uuid: string]: Product };

export type Product = {
  uuid: number;
  name: string;
  price: string;
  description?: string;
};
