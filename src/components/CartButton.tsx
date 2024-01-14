import classNames from "classnames";
import { Product } from "../App";

interface Props {
  cartItems: Product[];
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const CartButton = ({ cartItems, cartVisibility, onToggleCart }: Props) => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0),
    0,
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0) * item.price,
    0,
  );

  const toggledCart = cartVisibility ? "text-accentSecond" : "text-white";

  return (
    <div className="relative">
      <button
        className={classNames(
          "rounded-sm",
          "text-xl",
          "hover:border-b-2",
          "hover:text-accent",
          "transition",
          "duration-300",
          "ease-in-out",
          toggledCart,
        )}
        onClick={() => onToggleCart()}
      >
        Cart ({totalAmount})
      </button>

      {cartVisibility && (
        <div className="absolute right-0 top-12 z-10 w-[200px] rounded-sm  bg-main p-4 ">
          <ul>
            {cartItems.length === 0 && <p>Cart is empty</p>}
            {cartItems.map((item) => (
              <li key={item.id} className="pt-2">
                {item.amount &&
                  `${item.name} x ${item.amount} - ${item.price * item.amount} SEK`}

                {!item.amount && `${item.name} x 1 - ${item.price} SEK`}
              </li>
            ))}
          </ul>
          <p className="pt-4 font-bold text-accent">{`Total payable: ${totalPrice} SEK`}</p>
        </div>
      )}
    </div>
  );
};
export default CartButton;
