interface Props {
  name: string;
  price: number;
  image: string;
  description?: string;
  onAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Item = ({ name, price, image, onAdd, description }: Props) => {
  return (
    <div className="w-[220px] p-[10px]">
      <img src={image} alt={name} />
      <p>
        {name} - {price}
      </p>
      {description && <p>Description: {description}</p>}
      <button onClick={onAdd}>+ Add to cart</button>
    </div>
  );
};
export default Item;
