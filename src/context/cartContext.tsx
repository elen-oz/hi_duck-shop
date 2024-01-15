import { createContext } from "react";
import { Product } from "../App";

interface CartContextType {
  items: Product[];
  totalAmount: number;
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  isCartVisible: boolean;
  handleToggleCart: () => void;
  totalQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export default CartContext;
