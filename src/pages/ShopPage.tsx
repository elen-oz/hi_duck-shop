import { Link } from "react-router-dom";
import { products } from "../data";
import Item from "../components/Item";

interface Props {
  onAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShopPage = ({ onAdd }: Props) => {
  return (
    <div className="mx-auto flex w-[750px] flex-wrap justify-center">
      {products.map((product) => {
        const { name, price, image, id } = product;

        return (
          <Link to={`/product/${id}`} key={id}>
            <Item name={name} price={price} image={image} onAdd={onAdd} />
          </Link>
        );
      })}
    </div>
  );
};
export default ShopPage;
