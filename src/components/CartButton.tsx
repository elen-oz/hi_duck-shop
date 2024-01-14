import { Product } from "../App";

interface Props {
  cartItems: Product[];
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const CartButton = ({ cartItems, cartVisibility, onToggleCart }: Props) => {
  return (
    <div className="relative">
      <button className="text-xl" onClick={() => onToggleCart()}>
        Cart ({cartItems.length})
      </button>
      {cartVisibility && (
        <div className="absolute right-0 top-12 z-10 w-[200px]  bg-main p-4 ">
          <p>Your items:</p>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="pt-2">
                {item.amount &&
                  `${item.name} x ${item.amount} - ${item.price * item.amount} SEK`}

                {!item.amount && `${item.name} x 1 - ${item.price} SEK`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default CartButton;
