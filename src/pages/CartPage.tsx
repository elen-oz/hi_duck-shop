import { useContext } from "react";
import CartContext from "../context/cartContext";
import { Product } from "../App";

const CartPage = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx?.items || [];
  const totalPrice = cartCtx?.totalAmount || 0;
  //   const totalQuantity = cartCtx?.totalQuantity || 0;
  //   const isCartVisible = cartCtx?.isCartVisible || false;
  //   const handleToggleCart = cartCtx?.handleToggleCart;

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

  //todo: hide CartList when Page is open
  //todo: <div>x {item.amount}</div> -- doesn't work correctly - NEED TO BE FIXED

  return (
    <div>
      <div className="container mx-auto w-[500px]">
        <ul className="mx-auto">
          {cartItems.length === 0 && <p>Cart is empty</p>}
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b py-1"
            >
              <div className="flex w-[120px] justify-between">
                <div>{item.amount && item.name}</div>
                {/* todo: doesn't work correctly - NEED TO BE FIXED */}
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

        <div className="flex justify-between pt-4 ">
          <p className="font-bold text-accent">{`Total payable: ${totalPrice} SEK`}</p>
          <button
            className="rounded-sm bg-zinc-300 px-4 hover:bg-zinc-400"
            onClick={clearCartHandler}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
