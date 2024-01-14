import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainWrapperPage from "./pages/MainWrapperPage";
import ShopPage from "./pages/ShopPage";
import { useState } from "react";
import { products } from "./data";
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
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartVisible, setCartVisibility] = useState(false);

  const handleAddToCart: OnAddHandler = (event, product): void => {
    event.preventDefault();

    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct !== undefined) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, amount: (item.amount || 0) + 1 }
            : item,
        ),
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, amount: 1 }]);
    }

    console.log("cartItems:", cartItems);
  };

  const handleToggleCart = () => {
    setCartVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainWrapperPage
              cartItems={cartItems}
              cartVisibility={isCartVisible}
              onToggleCart={handleToggleCart}
            />
          }
        >
          <Route
            index
            element={<ShopPage items={items} onAdd={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ItemPage items={items} onAdd={handleAddToCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
