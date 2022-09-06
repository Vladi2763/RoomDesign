import classes from "./Content.module.scss";
import Main from "./Main";
import Aside from "./Aside";

const Content = () => {
  return (
    <div className={classes.content}>
      <Main />
      <Aside />
    </div>
  );
};

export default Content;
