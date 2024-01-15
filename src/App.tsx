import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import MainWrapperPage from "./pages/MainWrapperPage";
import ShopPage from "./pages/ShopPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  amount?: number;
  description?: string;
}

export type OnAddHandler = (
  event: React.MouseEvent<HTMLButtonElement>,
  product: Product,
) => void;

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainWrapperPage />}>
            <Route index element={<ShopPage />} />
            <Route path="/product/:id" element={<ItemPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<PaymentPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
