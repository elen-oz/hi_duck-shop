import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import CartContext from "../context/cartContext";

const MainWrapperPage = () => {
  const cartCtx = useContext(CartContext);
  let isCartVisible: boolean = false;
  let handleToggleCart: () => void = () => {};

  if (cartCtx) {
    isCartVisible = cartCtx.isCartVisible;
    handleToggleCart = cartCtx.handleToggleCart;
  }

  return (
    <div className="flex h-screen flex-col justify-between">
      <Header cartVisibility={isCartVisible} onToggleCart={handleToggleCart} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainWrapperPage;
