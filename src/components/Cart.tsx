interface Props {
  cartItems: number;
}

const Cart = ({ cartItems }: Props) => {
  return <div className="text-xl">Cart ({cartItems})</div>;
};
export default Cart;
