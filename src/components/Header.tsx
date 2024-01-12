import Cart from "./Cart";

interface Props {
  cartItems: number;
}

const Header = ({ cartItems }: Props) => {
  return (
    <header className="bg-main flex justify-between px-8 py-4 text-white">
      <h2 className="text-3xl">
        <span className="text-accent">Duck</span> Shop
      </h2>
      <Cart cartItems={cartItems} />
    </header>
  );
};
export default Header;
