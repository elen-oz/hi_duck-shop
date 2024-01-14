import { OnAddHandler, Product } from "../App";

type ItemProps = {
  product: Product;
  onAdd: OnAddHandler;
  children: string;
};

const AddButton = ({ children, product, onAdd }: ItemProps) => {
  const { id, name, price, image, amount } = product;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onAdd(event, { id, name, price, image, amount });
  };

  return (
    <button
      className="rounded-sm border-2 border-accentSecond px-5 py-1 transition duration-300 ease-in-out hover:bg-accentSecond hover:text-white "
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default AddButton;
