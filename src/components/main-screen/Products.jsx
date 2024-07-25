import { ProductsItem } from "./ProductsItem";

export const Products = () => {
  const products = Array(10);

  return (
    <div className="item_section layout_padding2">
      <div className="container">
        <div className="item_container">
            <ProductsItem />
            <ProductsItem />
            <ProductsItem />
        </div>
      </div>
    </div>
  );
};
