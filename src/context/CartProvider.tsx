import { useReducer, ReactNode, useState } from "react";
import CartContext from "./cartContext";
import { Product } from "../App";

interface CartState {
  items: Product[];
  totalAmount: number;
  totalQuantity: number;
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
  totalQuantity: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let updatedItems;
  let itemToRemove;
  let updatedAmount: number;
  // let updatedQuantity: number;

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
        totalQuantity: state.totalQuantity + 1,
      };
    case "REMOVE":
      itemToRemove = state.items.find((item) => item.id === action.payload);

      if (itemToRemove && itemToRemove.amount) {
        updatedAmount =
          itemToRemove?.amount === 1 ? 0 : itemToRemove?.amount - 1;
        updatedItems = state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, amount: updatedAmount }
              : item,
          )
          .filter((item) => (item.amount || 0) > 0);
        return {
          items: updatedItems,
          totalAmount: state.totalAmount - itemToRemove.price,
          totalQuantity: state.totalQuantity - 1,
        };
      }
      return state;

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
  const [isCartVisible, setCartVisibility] = useState(false);

  const handleToggleCart = () => {
    setCartVisibility((prevVisibility) => !prevVisibility);
  };

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

  // const totalQuantity = cartItems.reduce(
  //   (acc, item) => acc + (item.amount || 0),
  //   0,
  // );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalQuantity: cartState.totalQuantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
    isCartVisible: isCartVisible,
    handleToggleCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
