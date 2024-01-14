import { Link } from "react-router-dom";
import CartButton from "./CartButton";

interface Props {
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const Header = ({ cartVisibility, onToggleCart }: Props) => {
  return (
    <header className="w-full bg-main ">
      <div className="mx-auto flex justify-between px-8 py-4 text-white md:container">
        <Link to="/">
          <h2 className="text-3xl">
            <span className="text-accentSecond">Duck</span> Shop
          </h2>
        </Link>
        <CartButton
          cartVisibility={cartVisibility}
          onToggleCart={onToggleCart}
        />
      </div>
    </header>
  );
};
export default Header;
