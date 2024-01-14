import { useContext } from "react";
import classNames from "classnames";
import CartContext from "../context/cartContext";
import { Product } from "../App";

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
        <div className="absolute right-0 top-12 z-10 w-[330px] rounded-sm  bg-main p-4 ">
          <ul>
            {cartItems.length === 0 && <p>Cart is empty</p>}
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between pt-2">
                <span>
                  {item.amount &&
                    `${item.name} x ${item.amount} - ${item.price * item.amount} SEK`}

                  {!item.amount && `${item.name} x 1 - ${item.price} SEK`}
                </span>
                <span>
                  <button
                    className="mr-1 w-8 rounded-sm bg-zinc-700 p-1 hover:bg-zinc-800"
                    onClick={() => cartItemAddHandler(item)}
                  >
                    +
                  </button>
                  <button
                    className=" ml-1 w-8 rounded-sm bg-zinc-700 p-1 hover:bg-zinc-800"
                    onClick={() => cartItemRemoveHandler(item.id)}
                  >
                    -
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between pt-4 ">
            <p className="font-bold text-accent">{`Total payable: ${totalPrice} SEK`}</p>
            <button
              className="rounded-sm bg-zinc-800 px-4 hover:bg-zinc-900"
              onClick={clearCartHandler}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartButton;
