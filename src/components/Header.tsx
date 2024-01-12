import Cart from "./Cart";

interface Props {
  cartItems: number;
}

const Header = ({ cartItems }: Props) => {
  return (
    <header className="flex justify-between">
      <h2>Duck Shop</h2>
      <Cart cartItems={cartItems} />
    </header>
  );
};
export default Header;
