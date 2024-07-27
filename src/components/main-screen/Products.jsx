import { ProductsItem } from "./ProductsItem";
import { products } from '../../../public/products';

export const Products = () => {

  return (
    <div className="item_section layout_padding2">
      <div className="container">
        <div className="item_container">
          {
            products.anillos.map(({ name, url, price}, index) => {
              return (<ProductsItem name={name} url={url} key={url} price={price} />)
            })
          }
        </div>
      </div>
    </div>
  );
};
