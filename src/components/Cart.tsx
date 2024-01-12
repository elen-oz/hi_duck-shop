interface Props {
  cartItems: number;
}

const Cart = ({ cartItems }: Props) => {
  return <div>Cart ({cartItems})</div>;
};
export default Cart;
