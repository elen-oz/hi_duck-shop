import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Product } from "../App";

interface Props {
  cartItems: Product[];
}

const MainWrapperPage = ({ cartItems }: Props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header cartItems={cartItems} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainWrapperPage;
