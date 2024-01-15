import { Link } from "react-router-dom";
import { Product } from "../App";

interface Props {
  cartItems: Product[];
  cartItemAddHandler: (item: Product) => void;
  cartItemRemoveHandler: (id: number) => void;
  clearCartHandler: () => void;
  totalPrice: number;
}

const CartList = ({
  cartItems,
  cartItemAddHandler,
  cartItemRemoveHandler,
  clearCartHandler,
  totalPrice,
}: Props) => {
  return (
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

      <Link
        to="/cart"
        className=" mt-4 block w-[100%] bg-zinc-600 text-center text-xl"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};
export default CartList;
