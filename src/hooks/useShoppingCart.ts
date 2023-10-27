import { useContext } from "react";
import { ShoppingCartContext } from "../ShoppingCart";

export function useShoppingCart() {
  const { shoppingCart, updateCart } = useContext(ShoppingCartContext);
  return [shoppingCart, updateCart] as const;
}
