interface Props {
  name: string;
  price: number;
  image: string;
  description?: string;
  onAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Item = ({ name, price, image, onAdd, description }: Props) => {
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
      {description && <p>Description: {description}</p>}
      <button
        className="border-accentSecond hover:bg-accentSecond rounded border py-1 transition duration-300 ease-in-out hover:text-white "
        onClick={onAdd}
      >
        + Add to cart
      </button>
    </div>
  );
};
export default Item;
