import classes from "./Button.module.scss";

const Button: React.FC<{ type: string; switch: () => void }> = (props) => {
  return (
    <div
      onClick={() => props.switch()}
      className={`${classes.button} ${classes[`button__${props.type}`]}`}
    >
      <img src={`images/${props.type}.svg`} />
    </div>
  );
};

export default Button;
