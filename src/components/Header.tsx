import Cart from "./Cart";

interface Props {
  cartItems: number;
}

const Header = ({ cartItems }: Props) => {
  return (
    <header className="bg-main flex justify-between p-4 text-3xl text-white">
      <h2>Duck Shop</h2>
      <Cart cartItems={cartItems} />
    </header>
  );
};
export default Header;
