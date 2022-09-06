import Logo from "./Logo";
import Navigation from "./Navigation";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
