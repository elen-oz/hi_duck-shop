import { useContext } from "react";
import classNames from "classnames";
import CartContext from "../context/cartContext";
import { Product } from "../App";

interface Props {
  cartItems: Product[];
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const CartButton = ({ cartItems, cartVisibility, onToggleCart }: Props) => {
  const cartCtx = useContext(CartContext);

  //todo: items => cartItems
  const { items } = cartCtx;
  console.log("items", items);
  console.log("cartItems", cartItems);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0),
    0,
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0) * item.price,
    0,
  );

  const toggledCart = cartVisibility ? "text-accentSecond" : "text-white";

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

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
                  <button className="mr-1 w-8 rounded-sm bg-zinc-700 p-1 hover:bg-zinc-800">
                    +
                  </button>
                  <button className=" ml-1 w-8 rounded-sm bg-zinc-700 p-1 hover:bg-zinc-800">
                    -
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between pt-4 ">
            <p className="font-bold text-accent">{`Total payable: ${totalPrice} SEK`}</p>
            <button className="rounded-sm bg-zinc-800 px-4 hover:bg-zinc-900">
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartButton;
