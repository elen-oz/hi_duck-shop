import { useParams } from "react-router-dom";
import { products } from "../data";

interface Props {
  handleAddToCart: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ItemPage = ({ handleAddToCart }: Props) => {
  const { id } = useParams();
  console.log(id);

  const item = products.find((item) => {
    return item.id === +id;
  });

  if (!item) return <div>Item not found</div>;

  const { name, price, description, image } = item;

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
      <button
        className="col-span-1 rounded border border-accentSecond px-4 py-1 transition duration-300 ease-in-out hover:bg-accentSecond hover:text-white "
        onClick={handleAddToCart}
      >
        + Add to cart
      </button>
    </div>
  );
};

export default ItemPage;
