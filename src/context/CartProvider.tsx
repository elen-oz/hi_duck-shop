import { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;

  switch (action.type) {
    case "ADD":
      if (state.items.find((item) => item.id === action.payload.id)) {
        updatedItems = state.items.map((item) =>
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
          state.totalAmount + action.payload.amount * action.payload.price,
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

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      payload: item,
    });
  };

  const removeItemToCartHandler = (id) => {
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
