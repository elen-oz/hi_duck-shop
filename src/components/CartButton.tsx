import { useContext } from "react";
import classNames from "classnames";
import CartContext from "../context/cartContext";
import { Product } from "../App";
import Cart from "./Cart";

interface Props {
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const CartButton = ({ cartVisibility, onToggleCart }: Props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx?.items || [];
  const totalPrice = cartCtx?.totalAmount || 0;

  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0),
    0,
  );

  const toggledCart = cartVisibility ? "text-accentSecond" : "text-white";

  const cartItemAddHandler = (item: Product) => {
    if (cartCtx) {
      cartCtx.addItem({ ...item, amount: 1 });
    }
  };
  const cartItemRemoveHandler = (id: number) => {
    if (cartCtx) {
      cartCtx.removeItem(id);
    }
  };
  const clearCartHandler = () => {
    if (cartCtx) {
      cartCtx.clearCart();
    }
  };

  return (
    <div className="relative">
      <button
        className={classNames(
          "rounded-sm",
          "text-[1.2rem]",
          "hover:border-b-2",
          "hover:text-accent",
          "transition",
          "duration-300",
          "ease-in-out",
          toggledCart,
        )}
        onClick={() => onToggleCart()}
      >
        Cart ({totalQuantity})
      </button>

      {cartVisibility && (
        <Cart
          cartItems={cartItems}
          cartItemAddHandler={cartItemAddHandler}
          cartItemRemoveHandler={cartItemRemoveHandler}
          clearCartHandler={clearCartHandler}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};
export default CartButton;
