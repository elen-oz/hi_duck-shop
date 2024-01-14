import { Link } from "react-router-dom";
import Item from "../components/Item";
import { Product } from "../App";

interface Props {
  items: Product[];
}

const ShopPage = ({ items }: Props) => {
  return (
    <div className="mx-auto flex max-w-[47rem] flex-wrap justify-center">
      {items.map((product) => {
        // const { name, price, image, id, amount } = product;

        return (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Item product={product} />
          </Link>
        );
      })}
    </div>
  );
};

export default ShopPage;
