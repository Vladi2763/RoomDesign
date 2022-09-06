import {
  switchOn,
  switchOff,
} from "../../../../../../../../store/actionsCreater";

import { useSelector } from "react-redux";
import { InitialState } from "../../../../../../../../store/mainReducer";
import classes from "./Products.module.scss";

import Product from "../Product/Product";
import Button from "../ProductMenu/Button/Button";
import { useDispatch } from "react-redux";

const Products = () => {
  const products = useSelector((state: InitialState) => state.products);
  const dispatch = useDispatch();
  const switchOnHandler = () => {
    dispatch(switchOn());
  };

  const switchOffHandler = () => {
    dispatch(switchOff());
  };
  return (
    <div className={classes.products}>
      {products.map((lamp) => (
        <Product lamp={lamp} key={lamp.id} />
      ))}
    </div>
  );
};

export default Products;
