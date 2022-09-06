import { switchOn } from "../../../../../../../../store/actionsCreater";

import { useDispatch } from "react-redux";
import { selectProduct } from "../../../../../../../../store/actionsCreater";

import classes from "./Product.module.scss";

import {
  InitialState,
  Product as ProductType,
} from "../../../../../../../../store/mainReducer";
import { useSelector } from "react-redux";

const Product: React.FC<{ lamp: ProductType }> = ({ lamp }) => {
  const dispatch = useDispatch();
  const selectedLamp = useSelector(
    (state: InitialState) => state.selectedProduct
  );

  const selected = selectedLamp?.id === lamp.id ? "selected" : "";

  const selectProductHandler = (lamp: ProductType) => {
    dispatch(selectProduct(lamp));
    dispatch(switchOn());
  };
  return (
    <div onClick={() => selectProductHandler(lamp)} className={classes.product}>
      <div
        className={`${classes.product__container} ${
          classes[`product__container_${selected}`]
        }`}
      >
        <img
          className={classes.container__image}
          src={`/images/${lamp.name}.svg`}
          alt={lamp.name}
        />
      </div>
    </div>
  );
};

export default Product;
