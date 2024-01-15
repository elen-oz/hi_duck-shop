import { useContext } from "react";
import CartContext from "../context/cartContext";
import { Product } from "../App";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx?.items || [];
  const totalPrice = cartCtx?.totalAmount || 0;

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
    <div>
      <div className="container mx-auto w-[500px]">
        <div className="mb-2 text-right">
          <button
            className="rounded-sm bg-zinc-300 px-4 hover:bg-zinc-400"
            onClick={clearCartHandler}
          >
            Clear
          </button>
        </div>
        <ul className="mx-auto">
          {cartItems.length === 0 && <p>Cart is empty</p>}
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b py-1"
            >
              <div className="flex w-[120px] justify-between">
                <div>{item.amount && item.name}</div>
                <div>x {item.amount}</div>
              </div>

              <div className="flex w-[160px] items-center justify-between">
                {item.amount && <div>{item.price * item.amount} SEK</div>}

                <div>
                  <button
                    className="mr-1 w-8 rounded-sm bg-zinc-200 hover:bg-zinc-400"
                    onClick={() => cartItemAddHandler?.(item)}
                  >
                    +
                  </button>
                  <button
                    className=" ml-1 w-8 rounded-sm bg-zinc-200  hover:bg-zinc-400"
                    onClick={() => cartItemRemoveHandler?.(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* <p>
        {name} - <span className="font-semibold text-red-500">{price}</span>
        &nbsp;
        <span className="line-through">&nbsp;{Math.floor(price * 1.1)}</span>
        &nbsp;SEK
      </p> */}

        <div className="flex justify-between pt-4">
          <p className="font-bold text-accentSecond">
            Total payable:{" "}
            <span className="font-normal text-black line-through">
              {Math.floor(totalPrice * 1.1)}
            </span>
            &nbsp;{totalPrice}&nbsp;SEK
          </p>
          <Link
            to="/checkout"
            className="rounded-sm bg-zinc-300 px-5 font-bold hover:bg-zinc-400"
            onClick={clearCartHandler}
          >
            BUY
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
