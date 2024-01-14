import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const MainWrapperPage = ({ cartVisibility, onToggleCart }: Props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header cartVisibility={cartVisibility} onToggleCart={onToggleCart} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainWrapperPage;
