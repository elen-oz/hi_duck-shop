import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  cartItems: number;
}

const MainWrapperPage = ({ cartItems }: Props) => {
  return (
    <div className="h-screen">
      <Header cartItems={cartItems} />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
};
export default MainWrapperPage;
