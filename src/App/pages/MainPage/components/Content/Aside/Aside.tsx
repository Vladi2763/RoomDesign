import { useSelector } from "react-redux";
import { InitialState } from "../../../../../../store/mainReducer";
import classes from "./Aside.module.scss";

const Aside = () => {
  const selectedLamp = useSelector(
    (state: InitialState) => state.selectedProduct?.name
  );

  const isDark = useSelector((state: InitialState) => state.isDark);
  return (
    <aside className={classes.aside}>
      {selectedLamp && (
        <img
          className={`${classes.aside__selectedLamp} ${
            classes[`aside__selectedLamp_${isDark ? "isDarkMode" : ""}`]
          }`}
          src={`./images/${selectedLamp}.svg`}
          alt={selectedLamp}
        />
      )}
      <img
        className={classes.aside__image}
        src={isDark ? "./images/night room.svg" : "./images/room.svg"}
        alt="room"
      ></img>
    </aside>
  );
};

export default Aside;
