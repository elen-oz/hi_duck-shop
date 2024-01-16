import { Link, useLocation } from "react-router-dom";
import CartButton from "./CartButton";
import ScrollingAd from "./ScrollingAd";

const Header = () => {
  const location = useLocation();

  const isHomePagePath = location.pathname.length === 1;

  return (
    <>
      <header className="w-full bg-main ">
        <div className="mx-auto flex justify-between px-8 py-4 text-white md:container">
          <Link to="/">
            <h2 className="relative text-3xl">
              <span className="absolute left-[-1.7rem] top-0 inline-block w-[142px] text-accentSecond transition-transform hover:translate-x-3 ">
                &rang;
              </span>
              <span className="text-accentSecond">Duck</span>
              &nbsp;Shop
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
            <CartButton />
          </div>
        </div>
        <ScrollingAd />
      </header>
    </>
  );
};
export default Header;
