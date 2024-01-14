import { useContext } from "react";
import { Product, OnAddHandler } from "../App";
import AddButton from "../UI/AddButtonA";
import CartContext from "../context/cartContext";

interface ItemProps {
  product: Product;
}

const Item = ({ product }: ItemProps) => {
  const { name, price, image } = product;
  const cartCtx = useContext(CartContext);

  const addToCartHandler: OnAddHandler = (event, item) => {
    event.preventDefault();

    if (cartCtx) {
      cartCtx.addItem({ ...item, amount: 1 });
    }
  };

  return (
    <div className=" flex h-[19rem] w-[14rem] flex-col justify-between p-[1rem]">
      <img
        className="transform transition-transform hover:scale-105"
        src={image}
        alt={name}
      />
      <p className="">
        {name} - {price} SEK
      </p>

      <AddButton
        product={product}
        onAdd={(event) => addToCartHandler(event, product)}
      >
        + Add to cart
      </AddButton>
    </div>
  );
};
export default Item;
