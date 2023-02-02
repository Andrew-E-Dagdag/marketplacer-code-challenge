import { jsonProducts } from "../constants";
import { FilteredProducts } from "./types";

export const getProductsByUUID = (uuids: string[]): FilteredProducts => {
  return jsonProducts.reduce<FilteredProducts>((acc, currentProduct) => {
    const uuid = String(currentProduct.uuid);
    if (uuids.includes(uuid)) {
      acc[uuid] = currentProduct;
    }
    return acc;
  }, {});
};
