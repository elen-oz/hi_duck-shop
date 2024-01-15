import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import CartContext from "../context/cartContext";

const MainWrapperPage = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainWrapperPage;
