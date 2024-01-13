import { Link } from "react-router-dom";
import Cart from "./Cart";
import { Product } from "../App";

interface Props {
  cartItems: Product[];
}

const Header = ({ cartItems }: Props) => {
  return (
    <header className="w-full bg-main ">
      <div className="mx-auto flex justify-between px-8 py-4 text-white md:container">
        <Link to="/">
          <h2 className="text-3xl">
            <span className="text-accent">Duck</span> Shop
          </h2>
        </Link>
        <Cart cartItems={cartItems} />
      </div>
    </header>
  );
};
export default Header;
