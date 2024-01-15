import { Link } from "react-router-dom";
import Item from "../components/Item";
import useGetProducts from "../hooks/useGetProducts";

const ShopPage = () => {
  const { items } = useGetProducts();
  return (
    <div className="mx-auto flex max-w-[47rem] flex-wrap justify-center">
      {items.map((product) => {
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
