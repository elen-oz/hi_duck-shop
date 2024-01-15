import { useContext } from "react";
import CartContext from "../context/cartContext";
import { Product } from "../App";

interface Props {
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const CartPage = ({ cartVisibility, onToggleCart }: Props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx?.items || [];
  const totalPrice = cartCtx?.totalAmount || 0;

  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0),
    0,
  );

  return (
    <div>
      <div className="container">
        <ul className="mx-auto w-[500px]">
          <li className="mx-auto  flex justify-between gap-3 border-b text-center">
            <div>Item</div>
            <div className="flex w-[200px] justify-between">
              <div>x Quantity</div>
              <div>Price</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CartPage;
