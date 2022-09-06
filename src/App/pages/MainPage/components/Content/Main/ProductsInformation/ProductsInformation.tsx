import Description from "./Description";
import ProductMenu from "./ProductMenu";

import classes from "./ProductsInformation.module.scss";

const ProductsInformation = () => {
  return (
    <section className={classes.productsInformation}>
      <Description />
      <ProductMenu />
    </section>
  );
};

export default ProductsInformation;
