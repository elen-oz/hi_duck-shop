import { Link } from "react-router-dom";
import { products } from "../data";
import Item from "../components/Item";
import { Product } from "../App";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description?: string;
// }

interface Props {
  onAdd: (event: React.MouseEvent<HTMLButtonElement>, product: Product) => void;
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
