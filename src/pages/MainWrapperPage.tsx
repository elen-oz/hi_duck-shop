import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
