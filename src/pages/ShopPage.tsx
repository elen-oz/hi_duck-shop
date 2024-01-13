import { Link } from "react-router-dom";
import { products } from "../data";
import Item from "../components/Item";
import { OnAddHandler } from "../App";

interface Props {
  onAdd: OnAddHandler;
}

const ShopPage = ({ onAdd }: Props) => {
  return (
    <div className="mx-auto flex max-w-[47rem] flex-wrap justify-center">
      {products.map((product) => {
        const { name, price, image, id } = product;

        return (
          <Link to={`/product/${id}`} key={id}>
            <Item
              id={id}
              name={name}
              price={price}
              image={image}
              onAdd={(event) => onAdd(event, product)}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ShopPage;
