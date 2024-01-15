import { products } from "../data";

const useGetProducts = () => {
  console.log("getting products");
  const items = products.map((product) => ({ ...product, amount: 0 }));

  return { items };
};
export default useGetProducts;
