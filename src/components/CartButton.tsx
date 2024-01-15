import { useContext } from "react";
import classNames from "classnames";
import CartContext from "../context/cartContext";
import CartList from "./CartList";

const CartButton = () => {
  const cartCtx = useContext(CartContext);
  const totalQuantity = cartCtx?.totalQuantity || 0;
  let isCartVisible: boolean = false;
  let handleToggleCart: () => void = () => {};

  const toggledCart = isCartVisible ? "text-accentSecond" : "text-white";

  if (cartCtx) {
    isCartVisible = cartCtx.isCartVisible;
    handleToggleCart = cartCtx.handleToggleCart;
  }

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
        onClick={() => handleToggleCart()}
      >
        Cart ({totalQuantity})
      </button>

      {isCartVisible && <CartList />}
    </div>
  );
};
export default CartButton;
