import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import CartProvider from "./context/CartProvider";
import { products } from "./data";

import MainWrapperPage from "./pages/MainWrapperPage";
import ShopPage from "./pages/ShopPage";
import ItemPage from "./pages/ItemPage";

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

const items = products.map((product) => ({ ...product, amount: 0 }));

const App = () => {
  const [isCartVisible, setCartVisibility] = useState(false);

  const handleToggleCart = () => {
    setCartVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainWrapperPage
                cartVisibility={isCartVisible}
                onToggleCart={handleToggleCart}
              />
            }
          >
            <Route index element={<ShopPage items={items} />} />
            <Route path="/product/:id" element={<ItemPage items={items} />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
