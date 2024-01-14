import { Product } from "../App";

interface Props {
  cartItems: Product[];
  cartVisibility: boolean;
  onToggleCart: () => void;
}

const CartButton = ({ cartItems, cartVisibility, onToggleCart }: Props) => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0),
    0,
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.amount || 0) * item.price,
    0,
  );

  return (
    <div className="relative">
      <button className="text-xl" onClick={() => onToggleCart()}>
        Cart ({totalAmount})
      </button>

      {cartVisibility && (
        <div className="absolute right-0 top-12 z-10 w-[200px]  bg-main p-4 ">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="pt-2">
                {item.amount &&
                  `${item.name} x ${item.amount} - ${item.price * item.amount} SEK`}

                {!item.amount && `${item.name} x 1 - ${item.price} SEK`}
              </li>
            ))}
          </ul>
          <p className="pt-4 font-bold text-accent">{`Total Price: ${totalPrice} SEK`}</p>
        </div>
      )}
    </div>
  );
};
export default CartButton;
