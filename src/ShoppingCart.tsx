import { Dispatch, ReactNode, createContext, useReducer } from "react";

export type ShoppingCart = Map<string, number>;

interface ShoppingCartContextValue {
  shoppingCart: ShoppingCart;
  updateCart: Dispatch<UpdateCartAction>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextValue>({
  shoppingCart: new Map(),
  updateCart: () => new Map(),
});

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export interface UpdateCartAction {
  type: "increment" | "decrement";
  productId: string;
}

function reducer(cart: ShoppingCart, action: UpdateCartAction) {
  const { productId, type } = action;

  switch (type) {
    case "increment": {
      let productAmount = cart.get(productId) ?? 0;
      productAmount += 1;

      cart.set(productId, productAmount);
      return cart;
    }
    case "decrement": {
      let productAmount = cart.get(productId) ?? 0;
      productAmount -= 1;

      if (productAmount <= 0) {
        cart.delete(productId);
      } else {
        cart.set(productId, productAmount);
      }

      return cart;
    }
    default:
      throw new Error("Unknown action.");
  }
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, updateCart] = useReducer(reducer, new Map());

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, updateCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
