import { Link, useLocation } from "react-router-dom";
import CartButton from "./CartButton";

interface Props {
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const Header = ({ cartVisibility, onToggleCart }: Props) => {
  const location = useLocation();

  const isHomePagePath = location.pathname.length === 1;

  return (
    <header className="w-full bg-main ">
      <div className="mx-auto flex justify-between px-8 py-4 text-white md:container">
        <Link to="/">
          <h2 className="transform text-3xl transition-transform hover:scale-105">
            <span className="text-accentSecond">&rang;Duck</span> Shop
          </h2>
        </Link>
        <div className="flex w-[13rem] justify-between">
          {!isHomePagePath && (
            <Link to="/">
              <h3 className="w-[125px] text-[1.2rem] text-accent hover:border-b-2 ">
                View All Items
              </h3>
            </Link>
          )}
          {isHomePagePath && <div className="w-[125px]"></div>}
          <CartButton
            cartVisibility={cartVisibility}
            onToggleCart={onToggleCart}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
