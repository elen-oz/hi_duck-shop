import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainWrapperPage from "./pages/MainWrapperPage";
import ShopPage from "./pages/ShopPage";
import { useState } from "react";
import ItemPage from "./pages/ItemPage";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export type OnAddHandler = (
  event: React.MouseEvent<HTMLButtonElement>,
  product: Product,
) => void;

const App = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart: OnAddHandler = (event, product): void => {
    event.preventDefault();

    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainWrapperPage cartItems={cartItems} />}>
          <Route index element={<ShopPage onAdd={handleAddToCart} />} />
          <Route
            path="/product/:id"
            element={<ItemPage onAdd={handleAddToCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
