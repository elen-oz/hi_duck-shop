import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainWrapperPage from "./pages/MainWrapperPage";
import ShopPage from "./pages/ShopPage";
import { useState } from "react";
import ItemPage from "./pages/ItemPage";

const App = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();

    const newItemCount = cartItems + 1;
    setCartItems(newItemCount);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainWrapperPage cartItems={cartItems} />}>
          <Route index element={<ShopPage onAdd={handleAddToCart} />} />
          <Route
            path="/product/:id"
            element={<ItemPage handleAddToCart={handleAddToCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
