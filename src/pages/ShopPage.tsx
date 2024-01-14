import { Link } from "react-router-dom";
// import { products } from "../data";
import Item from "../components/Item";
import { Product, OnAddHandler } from "../App";

interface Props {
  items: Product[];
  onAdd: OnAddHandler;
}

const ShopPage = ({ items, onAdd }: Props) => {
  return (
    <div className="mx-auto flex max-w-[47rem] flex-wrap justify-center">
      {items.map((product) => {
        const { name, price, image, id, amount } = product;

        return (
          <Link to={`/product/${id}`} key={id}>
            <Item
              id={id}
              name={name}
              price={price}
              image={image}
              amount={amount}
              onAdd={(event) => onAdd(event, product)}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ShopPage;
