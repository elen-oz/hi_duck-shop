import { OnAddHandler } from "../App";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  onAdd: OnAddHandler;
}

const Item = ({ id, name, price, image, onAdd }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAdd(event, { id, name, price, image });
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
      <button
        className="rounded border border-accentSecond py-1 transition duration-300 ease-in-out hover:bg-accentSecond hover:text-white "
        onClick={handleClick}
      >
        + Add to cart
      </button>
    </div>
  );
};
export default Item;
