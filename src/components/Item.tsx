// import { useContext } from "react";
import { Product, OnAddHandler } from "../App";
import AddButton from "../UI/AddButtonA";
// import CartContext from "../context/cartContext";

type ItemProps = Omit<Product, "description"> & {
  onAdd: OnAddHandler;
};

const Item = (product: ItemProps) => {
  const { id, name, price, image, amount, onAdd } = product;
  // const cartCtx = useContext(CartContext)

  

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
        id={id}
        name={name}
        price={price}
        image={image}
        amount={amount}
        onAdd={(event) => onAdd(event, product)}
      >
        + Add to cart
      </AddButton>
    </div>
  );
};
export default Item;
