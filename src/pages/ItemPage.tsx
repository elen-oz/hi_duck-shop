import { useParams } from "react-router-dom";
import { products } from "../data";
import Item from "../components/Item";

// interface Item {
//   id: string;
//   name: string;
//   price: number;
//   description?: string;
// }

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
    <Item
      name={name}
      price={price}
      image={image}
      description={description}
      onAdd={handleAddToCart}
    />
  );
};

export default ItemPage;
