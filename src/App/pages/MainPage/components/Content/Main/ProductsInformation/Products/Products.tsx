import { useSelector } from "react-redux";
import { InitialState } from "../../../../../../../../store/mainReducer";
import classes from "./Products.module.scss";

import Product from "../Product/Product";

const Products = () => {
  const products = useSelector((state: InitialState) => state.products);

  return (
    <div className={classes.products}>
      {products.map((lamp) => (
        <Product lamp={lamp} key={lamp.id} />
      ))}
    </div>
  );
};

export default Products;
