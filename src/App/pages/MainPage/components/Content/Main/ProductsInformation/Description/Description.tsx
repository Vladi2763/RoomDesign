import { useSelector } from "react-redux";
import { InitialState } from "../../../../../../../../store/mainReducer";
import classes from "./Description.module.scss";

const Description = () => {
  const selectedLamp = useSelector(
    (state: InitialState) => state.selectedProduct
  );
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        {selectedLamp && (
          <div className={classes.description__container}>
            <div className={classes.container__textWrapper}>
              <span className={classes.container_title}>Material: </span>
              <span className={classes.container_text}>
                {selectedLamp?.material[0].toLocaleUpperCase() +
                  selectedLamp?.material.slice(
                    1,
                    selectedLamp?.material.length
                  )}
              </span>
            </div>
            <div className={classes.container__textWrapper}>
              <span className={classes.container_title}>Dimensions (cm): </span>
              <span className={classes.container_text}>
                H {selectedLamp?.height} x W {selectedLamp?.width} x D{" "}
                {selectedLamp?.width}
              </span>
            </div>
            <div className={classes.container__textWrapper}>
              <span className={classes.container_title}>Net Weight: </span>
              <span className={classes.container_text}>
                {selectedLamp?.weight}
              </span>
            </div>
            <div className={classes.container__textWrapper}>
              <span className={classes.container_title}>Electrification: </span>
              <br />
              <span className={classes.container_text}>
                {selectedLamp?.electrification}
              </span>
            </div>
          </div>
        )}
      </div>
      {selectedLamp && (
        <img
          className={classes.wrapper_image}
          src={`./images/${selectedLamp?.name}.svg`}
          alt={selectedLamp?.name}
        />
      )}
    </div>
  );
};

export default Description;
