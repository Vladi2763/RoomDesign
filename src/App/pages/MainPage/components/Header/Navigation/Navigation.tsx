import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <span className={classes.navigation__span}>Collesctions</span>
      <span className={classes.navigation__span}>blog</span>
      <span className={classes.navigation__span}>About</span>
      <span className={classes.navigation__span}>contacts</span>
    </nav>
  );
};

export default Navigation;
