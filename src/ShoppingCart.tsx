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
      const productAmount = cart.get(productId) ?? 0;
      const newCart = new Map(cart);

      return newCart.set(productId, productAmount + 1);
    }
    case "decrement": {
      let productAmount = cart.get(productId) ?? 0;
      productAmount -= 1;

      const newCart = new Map(cart);

      if (productAmount <= 0) {
        newCart.delete(productId);
      } else {
        newCart.set(productId, productAmount);
      }

      return newCart;
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
