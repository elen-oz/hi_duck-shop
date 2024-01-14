import { useReducer, ReactNode } from "react";
import CartContext from "./cartContext";
import { Product } from "../App";

interface CartState {
  items: Product[];
  totalAmount: number;
}

interface CartAction {
  type: string;
  payload?: any;
}

interface CartProviderProps {
  children: ReactNode;
}

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let updatedItems;

  switch (action.type) {
    case "ADD":
      if (state.items.find((item: Product) => item.id === action.payload.id)) {
        updatedItems = state.items.map((item: Product) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + action.payload.amount }
            : item,
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return {
        items: updatedItems,
        totalAmount:
          state.totalAmount +
          (action.payload.amount || 1) * action.payload.price,
      };
    case "REMOVE":
      //todo: change later
      return defaultCartState;

    case "CLEAR":
      return defaultCartState;

    default:
      return state;
  }
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item: Product) => {
    dispatchCartAction({
      type: "ADD",
      payload: item,
    });
  };

  const removeItemToCartHandler = (id: number) => {
    dispatchCartAction({
      type: "REMOVE",
      payload: id,
    });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
