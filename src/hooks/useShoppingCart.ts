import { useContext } from "react";
import { ShoppingCartContext } from "../ShoppingCart";

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
