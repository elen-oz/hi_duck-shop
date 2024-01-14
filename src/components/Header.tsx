import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { Product } from "../App";

interface Props {
  cartItems: Product[];
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const Header = ({ cartItems, cartVisibility, onToggleCart }: Props) => {
  return (
    <header className="w-full bg-main ">
      <div className="mx-auto flex justify-between px-8 py-4 text-white md:container">
        <Link to="/">
          <h2 className="text-3xl">
            <span className="text-accentSecond">Duck</span> Shop
          </h2>
        </Link>
        <CartButton
          cartItems={cartItems}
          cartVisibility={cartVisibility}
          onToggleCart={onToggleCart}
        />
      </div>
    </header>
  );
};
export default Header;
