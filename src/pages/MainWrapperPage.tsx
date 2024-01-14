import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Product } from "../App";

interface Props {
  cartItems: Product[];
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const MainWrapperPage = ({
  cartItems,
  cartVisibility,
  onToggleCart,
}: Props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header
        cartItems={cartItems}
        cartVisibility={cartVisibility}
        onToggleCart={onToggleCart}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainWrapperPage;
