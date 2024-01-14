import { useParams } from "react-router-dom";
import { OnAddHandler, Product } from "../App";
import AddButton from "../UI/AddButtonA";

interface Props {
  items: Product[];
  onAdd: OnAddHandler;
}

const ItemPage = ({ items, onAdd }: Props) => {
  const { id } = useParams<{ id: string }>();
  const itemId = id ? parseInt(id, 10) : undefined;

  const item = items.find((item) => {
    if (item.id) {
      return item.id === itemId;
    }
  });

  if (!item) return <div>Item not found</div>;

  const { name, price, description, image, amount } = item;

  return (
    <div className=" flex grid-flow-col grid-rows-2 flex-col items-center justify-center  justify-items-center gap-4 px-4 md:grid">
      <img className="row-span-3 max-w-[350px]" src={image} alt={name} />
      <h2 className="col-span-1 font-bold">
        {name} - {price} SEK
      </h2>
      {description && (
        <p className="col-span-2 row-span-2 self-start  ">
          Description: {description}
        </p>
      )}

      <AddButton
        id={id}
        name={name}
        price={price}
        image={image}
        amount={amount}
        onAdd={(event) => onAdd(event, item)}
      >
        + Add to cart
      </AddButton>
    </div>
  );
};

export default ItemPage;
