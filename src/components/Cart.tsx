import { Product } from "../App";

interface Props {
  cartItems: Product[];
}

const Cart = ({ cartItems }: Props) => {
  return <div className="text-xl">Cart ({cartItems.length})</div>;
};
export default Cart;
