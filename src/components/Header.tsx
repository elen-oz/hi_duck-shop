import { Link } from "react-router-dom";
import Cart from "./Cart";

interface Props {
  cartItems: number;
}

const Header = ({ cartItems }: Props) => {
  return (
    <header className="flex justify-between bg-main px-8 py-4 text-white">
      <Link to="/">
        <h2 className="text-3xl">
          <span className="text-accent">Duck</span> Shop
        </h2>
      </Link>
      <Cart cartItems={cartItems} />
    </header>
  );
};
export default Header;
