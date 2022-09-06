import {
  switchOn,
  switchOff,
} from "../../../../../../../../store/actionsCreater";

import classes from "./ProductMenu.module.scss";

import Products from "../Products";
import Button from "./Button/Button";
import { useDispatch } from "react-redux";

const ProductMenu = () => {
  const dispatch = useDispatch();
  const switchOnHandler = () => {
    dispatch(switchOn());
  };

  const switchOffHandler = () => {
    dispatch(switchOff());
  };
  return (
    <div className={classes.productMenu}>
      <Products />
      <div className={classes.productMenu__buttons}>
        <Button type="day" switch={switchOnHandler} />
        <Button type="night" switch={switchOffHandler} />
      </div>
    </div>
  );
};

export default ProductMenu;
