import Introduction from "./Introduction";
import ProductsInformation from "./ProductsInformation";

import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main className={classes.main}>
      <Introduction />
      <ProductsInformation />
    </main>
  );
};

export default Main;
