import { useContext } from "react";
import classNames from "classnames";
import CartContext from "../context/cartContext";
import CartList from "./CartList";

interface Props {
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const CartButton = ({ cartVisibility, onToggleCart }: Props) => {
  const cartCtx = useContext(CartContext);
  const totalQuantity = cartCtx?.totalQuantity || 0;

  const toggledCart = cartVisibility ? "text-accentSecond" : "text-white";

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

      {cartVisibility && <CartList />}
    </div>
  );
};
export default CartButton;
